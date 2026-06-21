"use client";

import { useState } from "react";
import { baths } from "@/src/mocks/baths";
import { logHouses } from "@/src/mocks/log-hauses";
import { CatalogModalContent } from "@/src/components/catalog-modal-content/catalog-modal-content";
import { Modal } from "@/src/components/modal/modal";

type Category = "baths" | "sruby" | null;

export default function CatalogPage() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [currentCategory, setCurrentCategory] = useState<Category>(null);

    const openModal = (categories: Category) => {
        setCurrentCategory(categories);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setCurrentCategory(null);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <div className="bg-black/90 py-12 sm:py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
                        Каталог
                    </h1>
                    <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-2">
                        Каждый проект — это сочетание природной эстетики, комфорта и продуманных архитектурных решений.
                    </p>
                </div>
            </div>

            <div className="relative -mt-8 sm:-mt-12 md:-mt-16 mb-8 sm:mb-12 md:mb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col md:flex-row justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                        <div
                            onClick={() => openModal("baths")}
                            className="w-full md:w-[48%] h-48 sm:h-56 md:h-64 lg:h-80 xl:h-[450px] bg-cover bg-center rounded-2xl cursor-pointer hover:scale-105 transition relative overflow-hidden shadow-xl"
                            style={{ backgroundImage: "url('/images/bath1.jpg')" }}
                        >
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                                    Бани
                                </h2>
                            </div>
                        </div>

                        <div
                            onClick={() => openModal("sruby")}
                            className="w-full md:w-[48%] h-48 sm:h-56 md:h-64 lg:h-80 xl:h-[450px] bg-cover bg-center rounded-2xl cursor-pointer hover:scale-105 transition relative overflow-hidden shadow-xl"
                            style={{ backgroundImage: "url('/images/сруб-главная.jpg')" }}
                        >
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                                    Срубы
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal open={modalOpen} onClose={closeModal}>
                <CatalogModalContent
                    title={currentCategory === "baths" ? "Бани" : "Срубы"}
                    items={currentCategory === "baths" ? baths : logHouses}
                />
            </Modal>

            <footer className="bg-black/80 py-8 sm:py-10 md:py-12 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-6 md:gap-0">
                        <div>
                            <img
                                src="/logo.svg"
                                alt="Ассивъ"
                                className="h-10 sm:h-12 w-auto"
                            />
                        </div>

                        <div className="text-center md:text-right">
                            <a
                                href="tel:+79991176311"
                                className="text-2xl sm:text-3xl md:text-[48px] font-medium text-white mb-2 sm:mb-3 font-['Raleway'] hover:text-amber-400 transition block"
                            >
                                +7 (999) 117 63 11
                            </a>
                            <p className="text-gray-300 text-sm sm:text-[16px] font-normal leading-[20px] sm:leading-[24px] font-['Raleway']">
                                Обсудите ваш будущий проект с нашим специалистом
                            </p>
                            <p className="text-gray-300 text-sm sm:text-[16px] font-normal leading-[20px] sm:leading-[24px] font-['Raleway'] mt-1">
                                Консультации и предварительный расчет стоимости бесплатно.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}