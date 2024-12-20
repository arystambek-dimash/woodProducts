import * as React from "react";

export function ContactInfo() {
    return (
        <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-5 text-sm leading-tight text-white max-md:mt-10">
                <a
                    href="tel:88005508179"
                    className="text-2xl font-bold tracking-tight leading-none max-md:mr-2.5 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Call us at 8 (800) 550-81-79"
                >
                    8 (800) 550-81-79
                </a>
                <address className="not-italic">
                    <div className="self-start mt-10 opacity-60">м. Полежаевская</div>
                    <div className="mt-4 leading-4 opacity-60">
                        123154, г. Москва, пр-т. Маршала Жукова, д. 52, "Мебельный Центр"
                    </div>
                    <a
                        href="mailto:support@sofiadoors.com"
                        className="self-start mt-4 opacity-60 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white inline-block"
                    >
                        support@sofiadoors.com
                    </a>
                </address>
            </div>
        </div>
    );
}