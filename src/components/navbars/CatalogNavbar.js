import React, { useState, useRef } from "react";
import { CatalogItem } from "./CatalogNavbarItem";

const catalogItems = [
    { id: 1, title: "Межкомнатные двери", isActive: true },
    { id: 2, title: "Мебель", isActive: false },
    { id: 3, title: "Стеновые панели \u00abБуазери\u00bb", isActive: false },
    { id: 4, title: "Лестницы", isActive: false },
    { id: 5, title: "Мебельные фасады", isActive: false },
];

export function CatalogNavbar() {
    const [activeItems, setActiveItems] = useState(
        catalogItems.map((item) => item.isActive)
    );
    const itemRefs = useRef([]);

    const handleSelect = (index) => {
        setActiveItems(activeItems.map((_, i) => i === index));
        itemRefs.current[index]?.scrollIntoView({ behavior: "smooth", inline: "center" });
    };

    return (
        <nav
            role="tablist"
            aria-label="Product Categories"
            className="flex overflow-x-auto scrollbar-hide text-base tracking-wider leading-tight text-center uppercase text-neutral-700"
        >
            {catalogItems.map((item, index) => (
                <CatalogItem
                    key={item.id}
                    title={item.title}
                    isActive={activeItems[index]}
                    onSelect={() => handleSelect(index)}
                    ref={(el) => (itemRefs.current[index] = el)}
                />
            ))}
        </nav>
    );
}
