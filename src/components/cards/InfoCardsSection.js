import React from 'react';
import InfoCard from './InfoCard';
import ImageFeature from "../images/ImageFeature";

const doorImage
    = 'https://cdn.builder.io/api/v1/image/assets/TEMP/619a27ec1914bc8614234fed8b55b1084d990543f6e4f97a356802e33c16ec63?placeholderIfAbsent=true&apiKey=16603df5d5d944c0a2f195bca3358cf0';
const frezImage = 'https://cdn.builder.io/api/v1/image/assets/TEMP/619a27ec1914bc8614234fed8b55b1084d990543f6e4f97a356802e33c16ec63?placeholderIfAbsent=true&apiKey=16603df5d5d944c0a2f195bca3358cf0';

const InfoCardsSection = () => {
    return (
        <section className="py-12">
            <div>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                        <InfoCard
                            imageSrc={doorImage}
                            title="Двери на заказ"
                            description="На собственной фабрике мы создаем красивые, безопасные и практически вечные двери, межкомнатные перегородки, стеновые панели и другие решения для вашего интерьера."
                            buttonText="Заказать уникальную дверь"
                            onButtonClick={() => console.log('Нажали на кнопку заказа двери')}
                        />
                    </div>

                    <div className="w-full md:w-1/2 px-4">
                        <InfoCard
                            imageSrc={frezImage}
                            title="3D фрезеровка"
                            description="Изделия, которые создают фрезерный оттиск, управляемый компьютером, отличаются высочайшим качеством, абсолютной детализацией и идеальной точностью."
                            buttonText="Выбрать из каталога"
                            onButtonClick={() => console.log('Нажали на кнопку выбора из каталога')}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoCardsSection;
