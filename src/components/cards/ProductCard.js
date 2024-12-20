import React, {useState, useRef, useEffect} from "react";

function ProductCard({productData, cardWidth = 300}) {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [startX, setStartX] = useState(null);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef(null);

    const handleDragStart = (e) => {
        setIsDragging(true);
        setStartX(e.type === 'touchstart' ? e.touches[0].clientX : e.clientX);
    };

    const handleDragMove = (e) => {
        if (!isDragging || startX === null) return;

        const currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
        const diff = startX - currentX;
        const translate = Math.max(
            Math.min(diff, cardWidth),
            -cardWidth
        );

        setCurrentTranslate(translate);

        if (Math.abs(translate) > cardWidth * 0.25) {
            const newIndex = translate > 0
                ? (activeImageIndex + 1) % productData.images.length
                : (activeImageIndex - 1 + productData.images.length) % productData.images.length;
            setActiveImageIndex(newIndex);
            handleDragEnd();
        }
    };

    const handleDragEnd = () => {
        setIsDragging(false);
        setStartX(null);
        setCurrentTranslate(0);
    };

    useEffect(() => {
        setCurrentTranslate(0);
    }, [activeImageIndex]);

    return (
        <article
            className="overflow-hidden border border-gray-300 rounded-lg p-4 bg-white shadow-sm"
            style={{width: `${cardWidth}px`}}
            aria-label={`Product card for ${productData.name}`}
        >
            <div
                ref={sliderRef}
                className="relative select-none cursor-grab active:cursor-grabbing mb-4"
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
            >
                <div
                    className="flex justify-center transition-transform duration-300 ease-out"
                    style={{
                        transform: `translateX(${-currentTranslate}px)`,
                        width: `${cardWidth-50}px`,
                        height: '250px'
                    }}
                >
                    <img
                        src={productData.images[activeImageIndex].src}
                        alt={productData.images[activeImageIndex].alt}
                        className="w-full h-full object-contain flex-shrink-0"
                    />
                </div>

                <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded-md text-sm">
                    {activeImageIndex + 1} / {productData.images.length}
                </div>
            </div>

            <div className="flex flex-col items-start w-full">
                <h2 className="font-medium text-lg text-gray-800 truncate">
                    {productData.name}
                </h2>
                <p className="text-xl font-bold text-gray-900 mt-2">
                    {productData.price}
                </p>
            </div>

            <div className="flex justify-end items-center w-full mt-4">
                <button
                    className="uppercase text-sm font-bold text-orange-500 hover:text-orange-700"
                    onClick={() => console.log(`Buy ${productData.name}`)}
                    aria-label={`Buy ${productData.name}`}
                >
                    купить
                </button>
            </div>
        </article>
    );
}

export default ProductCard;