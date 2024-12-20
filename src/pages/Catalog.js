import React from 'react';
import { useSelector } from 'react-redux';
import { selectCatalogItems } from "../redux/catalogSlice";

const CatalogPage = () => {
    const items = useSelector(selectCatalogItems);

    const rows = [];
    for (let i = 0; i < items.length; i += 3) {
        rows.push(items.slice(i, i + 3));
    }

    return (
        <div className="bg-white py-8">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Каталог</h2>
                <div className="space-y-8">
                    {rows.map((rowItems, rowIndex) => (
                        <div
                            key={rowIndex}
                            className="grid grid-cols-3 gap-4"
                            style={{ gridTemplateColumns: `repeat(${rowItems.length}, minmax(0, 1fr))` }}
                        >
                            {rowItems.map((item, index) => (
                                <CatalogCard
                                    key={index}
                                    title={item.title}
                                    imageUrl={item.imageUrl}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const CatalogCard = ({ title, imageUrl }) => {
    return (
        <div className="relative group w-full h-48 bg-gray-200 rounded overflow-hidden cursor-pointer">
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
            />

            <div
                className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                <div className="p-4 text-white">
                    <h3 className="font-semibold text-sm md:text-base mb-2">{title}</h3>
                    <button
                        className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-200"
                        title="Подробнее"
                    >
                        <span className="transform rotate-90 text-lg leading-none">&rsaquo;</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CatalogPage;
