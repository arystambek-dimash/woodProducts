import React, {useState} from 'react';
import {ChevronDown, X} from 'lucide-react';

const FilterNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('Все фильтры');
    const [priceRange, setPriceRange] = useState([0, 147500]);
    const [thisCatalogClicked, setThisCatalogClicked] = useState(false);
    const [expandedSections, setExpandedSections] = useState({});
    const [catalogs, setCatalogs] = useState([
        {
            id: 0,
            name: 'Межкомнатные двери'
        },
        {
            id: 1,
            name: 'Мебель'
        },
        {
            id: 2,
            name: 'Стеновые панели «Буазери»'
        },
        {
            id: 3,
            name: 'Лестницы'
        },
        {
            id: 4,
            name: 'Мебельные фасады'
        }
    ]);
    const [filterState, setFilterState] = useState({
        'Тип дверей': {
            'Межкомнатные': false,
            'Скрытые': false
        },
        'Стиль': {
            'Скандинавский': false,
            'Винтаж': false,
            'Современный': false
        },
        'Материал': {
            'Эмаль': false,
            'Монохромный Кортекс': false,
            'Шёлк': false,
            'Кортекс': false,
            'Шпон': false
        },
        'Покрытие': {
            'Матовые': false,
            'Глянцевые': false,
            'Под покраску': false
        },
        'Тип конструкции': {
            'Рамочные': false,
            'Филёнчатые': false,
            'Щитовые': false,
            'Остеклённые': false,
            'Глухие': false,
            'Арочные': false,
            'Радиусные': false,
            'Автоматические': false,
            'Противопожарные': false
        },
        'Облицовки': {
            'Ваниль': false,
            'Белый Клен': false,
            'Тополь': false,
            'Белый матовый': false
        }
    });

    const handleCheckboxChange = (section, option) => {
        setFilterState(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [option]: !prev[section][option]
            }
        }));
    };

    const toggleSection = (sectionTitle) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionTitle]: !prev[sectionTitle]
        }));
    };

    const handleRangeChange = (e, index) => {
        const newValue = parseInt(e.target.value);
        setPriceRange(prev => {
            const newRange = [...prev];
            newRange[index] = newValue;
            return newRange;
        });
    };

    const resetFilters = () => {
        setFilterState(prev => {
            const reset = {};
            Object.keys(prev).forEach(section => {
                reset[section] = {};
                Object.keys(prev[section]).forEach(option => {
                    reset[section][option] = false;
                });
            });
            return reset;
        });
        setPriceRange([2200, 147500]);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const changeThisCatalogClicked = (catalogId) => {
        setThisCatalogClicked(prev => prev === catalogId ? null : catalogId);
    };
    return (
        <>
            <div className="mt-2 mb-16">
                <div className="md:hidden top-16 left-0 right-0 bg-white z-50 border-b border-gray-200">
                    <div className="p-4 flex items-center justify-between">
                        <button
                            onClick={toggleMobileMenu}
                            className="flex items-center space-x-2 text-black"
                        >
                            <span>{selectedFilter}</span>
                            <ChevronDown
                                className={`w-5 h-5 transform transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`}/>
                        </button>
                        {isMobileMenuOpen && (
                            <button onClick={resetFilters} className="text-sm text-gray-600">
                                Сбросить
                            </button>
                        )}
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={toggleMobileMenu}/>
                )}

                <div className={`
                fixed md:relative top-16 right-0 h-full w-64 bg-white z-40
                transform transition-transform duration-300 ease-in-out
                ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
                md:transform-none
                overflow-y-auto
            `}>
                    <div className="md:hidden p-4 flex justify-end">
                        <button onClick={toggleMobileMenu}>
                            <X className="w-6 h-6 text-black"/>
                        </button>
                    </div>

                    <div className="space-y-3 p-4">
                        {catalogs.map((catalog) => (
                            <button
                                key={catalog.id}
                                onClick={() => changeThisCatalogClicked(catalog.id)}
                                className={`font-medium text-black ${thisCatalogClicked === catalog.id ? 'text-[]' : ''}`}
                            >
                                {catalog.name}
                            </button>
                        ))}
                    </div>

                    <div className="top-16 bg-white z-10 p-4 border-b border-black">
                        <h3 className="text-sm font-medium text-black mb-4">Ценовой диапазон</h3>
                        <div className="flex space-x-2 mb-4">
                            <input
                                type="number"
                                value={priceRange[0]}
                                onChange={(e) => handleRangeChange(e, 0)}
                                className="w-24 px-2 py-1 border border-black rounded text-black"
                            />
                            <input
                                type="number"
                                value={priceRange[1]}
                                onChange={(e) => handleRangeChange(e, 1)}
                                className="w-24 px-2 py-1 border border-black rounded text-black"
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="range"
                                min="0"
                                max="147500"
                                value={priceRange[1]}
                                onChange={(e) => handleRangeChange(e, 1)}
                                className="w-full appearance-none h-1 bg-black rounded-full cursor-pointer"
                            />
                        </div>
                    </div>

                    <div className="p-4 space-y-6">
                        {Object.entries(filterState).map(([sectionTitle, options]) => (
                            <div key={sectionTitle} className="space-y-3">
                                <h3
                                    className="text-sm font-medium text-black flex items-center justify-between cursor-pointer"
                                    onClick={() => toggleSection(sectionTitle)}
                                >
                                    {sectionTitle}
                                    <ChevronDown
                                        className={`w-4 h-4 transform transition-transform ${expandedSections[sectionTitle] ? 'rotate-180' : ''}`}/>
                                </h3>
                                <div className={`space-y-2 ${expandedSections[sectionTitle] ? 'hidden' : ''}`}>
                                    {Object.entries(options).map(([optionName, isChecked]) => (
                                        <label key={optionName} className="flex items-center space-x-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={isChecked}
                                                onChange={() => handleCheckboxChange(sectionTitle, optionName)}
                                                className="h-4 w-4 rounded border-black text-black focus:ring-black cursor-pointer"
                                            />
                                            <span className="text-sm text-black">{optionName}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-4 hidden md:block">
                        <button
                            onClick={resetFilters}
                            className="w-full flex items-center justify-center space-x-2 text-sm text-black hover:text-gray-700"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                            </svg>
                            <span>Сбросить фильтры</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FilterNavbar;
