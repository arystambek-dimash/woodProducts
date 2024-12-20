import React, {useState} from "react";
import InfoCardsSection from "../components/cards/InfoCardsSection";
import {CatalogNavbar} from "../components/navbars/CatalogNavbar";
import ProductCard from "../components/cards/ProductCard";
import AssistanceForm from "../components/boxes/AssistanceForm";
import Container from "../components/boxes/Container";

const Main = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        "Архитектурные решения для вашего дома",
        "Дизайн интерьера для современных пространств",
        "Деревянные конструкции высочайшего качества",
        "Экологически чистые материалы для строительства",
        "Уникальный стиль для ваших проектов",
        "Современные тенденции в дизайне и строительстве",
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const products = [
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
    ];

    return (
        <div>
            <div
                className="flex flex-col font-bold leading-tight text-center text-white m-4"
                role="banner"
            >
                <div
                    className="flex relative flex-col justify-center items-center px-20 py-32 w-full min-h-[700px] max-md:px-5 max-md:py-24 max-md:max-w-full"
                >
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/90756a628bf4fec05cced90a737b13e23087729327007d01e1aa03a0bd68d4b3"
                        className="object-cover absolute inset-0 size-full"
                        alt="Wood Stile architectural background"
                        role="presentation"
                    />
                    <div
                        className="flex relative flex-col items-center px-12 pt-32 pb-6 mb-0 max-w-full bg-zinc-800 bg-opacity-50 rounded-full w-[440px] h-[440px] max-md:px-5 max-md:pt-24 max-md:mb-2.5 max-md:w-[340px] max-md:h-[340px]"
                        role="main"
                    >
                        <h1 className="text-4xl tracking-tighter">Classic Wood Stile</h1>
                        <p className="text-xl tracking-tight text-orange-200">
                            enterior-exterior
                        </p>
                        <p className="self-stretch mt-4 text-base leading-5">
                            Приглашает к сотрудничеству архитекторов, дизайнеров и строителей
                        </p>
                        <button
                            className="mt-9 px-4 py-2 max-w-full text-base
                            tracking-wider leading-5 uppercase whitespace-nowrap
                            bg-stone-500 w-[150px] hover:bg-stone-600

                            md:w-[150px]"
                            aria-label="Learn more about Wood Stile services"
                        >
                            подробнее
                        </button>
                    </div>
                </div>
            </div>

            <Container>
                <InfoCardsSection/>
                <div className="flex flex-col">
                    <div className="flex">
                        <h1 className="text-[#3B3937] font-[PermianSerifTypeface] lg:text-[52px] text-[30px] font-bold leading-[64px] tracking-[-0.64px]">
                            Витрина товаров
                        </h1>
                    </div>
                    <div>
                        <div className="pt-8">
                            <CatalogNavbar/>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 mt-10">
                                {products.map((product, index) => (
                                    <ProductCard key={index} productData={product}/>
                                ))}
                            </div>
                        </div>
                        <div
                            className="flex flex-col pt-8 text-base font-bold tracking-wider leading-snug text-center uppercase text-neutral-700">
                            <button
                                aria-label="Show more content"
                                className="px-14 py-6 w-full border border-solid border-neutral-700 border-opacity-20 max-md:px-5 max-md:max-w-full"
                            >
                                показать все
                            </button>
                        </div>
                    </div>
                    <div className="pt-14">
                        <AssistanceForm/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Main;
