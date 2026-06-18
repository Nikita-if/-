"use client";

import {useState} from "react";
import {baths} from "@/src/mocks/baths";
import {logHouses} from "@/src/mocks/log-hauses";
import {CatalogModalContent} from "@/src/components/catalog-modal-content/catalog-modal-content";
import {Modal} from "@/src/components/modal/modal";

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
            <div className="bg-black/90 py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">
                        Каталог
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Каждый проект — это сочетание природной эстетики, комфорта и продуманных архитектурных решений.
                    </p>
                </div>
            </div>

            <div className="relative -mt-16 mb-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 lg:gap-10">
                        <div
                            onClick={() => openModal("baths")}
                            className="w-full md:w-[48%] h-52 sm:h-64 md:h-80 lg:h-96 xl:h-[450px] bg-cover bg-center rounded-2xl cursor-pointer hover:scale-105 transition relative overflow-hidden shadow-xl"
                            style={{backgroundImage: "url('/images/bath1.jpg')"}}
                        >
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Бани</h2>
                            </div>
                        </div>

                        <div
                            onClick={() => openModal("sruby")}
                            className="w-full md:w-[48%] h-52 sm:h-64 md:h-80 lg:h-96 xl:h-[450px] bg-cover bg-center rounded-2xl cursor-pointer hover:scale-105 transition relative overflow-hidden shadow-xl"
                            style={{backgroundImage: "url('/images/сруб-главная.jpg')"}}
                        >
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Срубы</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal open={modalOpen} onClose={closeModal}> <CatalogModalContent
                title={currentCategory === "baths" ? "Бани" : "Срубы"}
                items={currentCategory === "baths" ? baths : logHouses}/> </Modal>


            <footer className="bg-black/80 py-12 mt-auto">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

                        <div>
                            <img
                                src="/logo.svg"
                                alt="Ассивъ"
                                className="h-12 w-auto"
                            />
                        </div>

                        <div className="text-right">
                            <div className="text-3xl md:text-[48px] font-medium text-white mb-3 font-['Raleway']">
                                +7 (999) 117 63 11
                            </div>
                            <p className="text-gray-300 text-[16px] font-normal leading-[24px] font-['Raleway'] mb-2">
                                Обсудите ваш будущий проект с нашим специалистом
                            </p>
                            <p className="text-gray-300 text-[16px] font-normal leading-[24px] font-['Raleway']">
                                Консультации и предварительный расчет стоимости бесплатно.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}