import React from 'react';
import Container from "../components/boxes/Container";
import FilterNavbar from "../components/navbars/FilterNavbar";
import ProductCard from "../components/cards/ProductCard";

const Products = () => {
    const [products, setProducts] = React.useState([
        {
            name: "Sofia Original 50.07",
            price: "24 500 ₽",
            images: [
                {
                    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/69acfcb2a5ff20246c41a91f0eb605e147db64f70d3dacec98320318d509be45",
                    alt: "Sofia Original 50.07 main product view",
                },
            ],
        },
        {
            name: "VISION Модель 64.43",
            price: "24 500 ₽",
            images: [
                {
                    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f4bdc3ef6725481c85b47029466f910aabc8e653fc4ff5335fec2d5c9de6f583",
                    alt: "VISION Модель 64.43 product view",
                },
            ],
        },
        {
            name: "SKYLINE Модель 55.21",
            price: "24 500 ₽",
            images: [
                {
                    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/69acfcb2a5ff20246c41a91f0eb605e147db64f70d3dacec98320318d509be45",
                    alt: "SKYLINE Модель 55.21 product view",
                },
            ],
        },
        {
            name: "CLASSIC Модель 65.44",
            price: "24 500 ₽",
            images: [
                {
                    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/69acfcb2a5ff20246c41a91f0eb605e147db64f70d3dacec98320318d509be45",
                    alt: "CLASSIC Модель 65.44 product view",
                },
                {
                    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/69acfcb2a5ff20246c41a91f0eb605e147db64f70d3dacec98320318d509be45",
                    alt: "CLASSIC Модель 65.44 product view",
                },
                {
                    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/69acfcb2a5ff20246c41a91f0eb605e147db64f70d3dacec98320318d509be45",
                    alt: "CLASSIC Модель 65.44 product view",
                },
            ],
        },
        {
            name: "METAMORFOSA Модель 65.171",
            price: "24 500 ₽",
            images: [
                {
                    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/69acfcb2a5ff20246c41a91f0eb605e147db64f70d3dacec98320318d509be45",
                    alt: "METAMORFOSA Модель 65.171 product view",
                },
            ],
        },
    ]);

    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = React.useState(1);

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const currentProducts = products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const renderPagination = () => {
        const buttons = [];

        if (currentPage > 1) {
            buttons.push(
                <button
                    key="prev"
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="px-4 py-2 border border-solid border-neutral-700"
                >
                    Назад
                </button>
            );
        }

        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === totalPages ||
                (i >= currentPage - 1 && i <= currentPage + 1)
            ) {
                buttons.push(
                    <button
                        key={i}
                        onClick={() => handlePageChange(i)}
                        className={`px-4 py-2 border border-solid border-neutral-700 ${
                            i === currentPage ? "bg-gray-300 font-bold" : ""
                        }`}
                    >
                        {i === currentPage ? `${i}` : i}
                    </button>
                );
            } else if (
                i === currentPage - 2 ||
                i === currentPage + 2
            ) {
                buttons.push(
                    <span key={`dots-${i}`} className="px-2">
                        ...
                    </span>
                );
            }
        }

        if (currentPage < totalPages) {
            buttons.push(
                <button
                    key="next"
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="px-4 py-2 border border-solid border-neutral-700"
                >
                    Вперед
                </button>
            );
        }

        return buttons;
    };

    return (
        <>
            <Container>
                <h1 className="text-[#3B3937] font-[PermianSerifTypeface] mt-12 lg:text-[52px] text-[40px] font-bold leading-[64px] tracking-[-0.64px]">
                    Витрина товаров
                </h1>
                <div className="lg:flex lg:gap-16 md:flex md:gap-16">
                    <div>
                        <FilterNavbar />
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 mt-20">
                                {currentProducts.map((product, index) => (
                                    <ProductCard key={index} productData={product} cardWidth={225} />
                                ))}
                            </div>
                        </div>
                        <div
                            className="flex justify-center gap-4 pt-8 text-base font-bold tracking-wider leading-snug text-center uppercase text-neutral-700"
                        >
                            {renderPagination()}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Products;
