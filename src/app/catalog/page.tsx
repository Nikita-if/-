"use client";

import {useState} from "react";
import {baths} from "@/src/mocks/baths";
import {logHouses} from "@/src/mocks/log-hauses";

type Category = "baths" | "sruby" | null;

export default function CatalogPage() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [currentCategory, setCurrentCategory] = useState<Category>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);


    const openModal = (categories:Category) => {
        setCurrentCategory(categories);
        setCurrentIndex(0);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setCurrentCategory(null);
    };

    const nextItem = () => {
        const items = currentCategory === "baths" ? baths : logHouses;
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    const prevItem = () => {
        const items = currentCategory === "baths" ? baths : logHouses;
        setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    const currentItems = currentCategory === "baths" ? baths : logHouses;
    const currentItem = currentItems[currentIndex];

    return (
        <div className="min-h-screen bg-white">
            <div className="bg-black/90 py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">
                        Каталог
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Каталог проект — это составной продукт с системой поддержки RealtyMarkets
                    </p>
                </div>
            </div>

            <div className="relative -mt-16 mb-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div
                            onClick={() => openModal("baths")}
                            className="flex-1 h-64 bg-cover bg-center rounded-2xl cursor-pointer hover:scale-105 transition relative overflow-hidden shadow-xl"
                            style={{backgroundImage: "url('/images/bath1')"}}
                        >
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <h2 className="text-4xl font-bold text-white">Бани</h2>
                            </div>
                        </div>

                        <div
                            onClick={() => openModal("sruby")}
                            className="flex-1 h-64 bg-cover bg-center rounded-2xl cursor-pointer hover:scale-105 transition relative overflow-hidden shadow-xl"
                            style={{backgroundImage: "url('/images/sruby-banner.jpg')"}}
                        >
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <h2 className="text-4xl font-bold text-white">Срубы</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {modalOpen && currentItem && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={closeModal}>
                    <div className="relative max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
                        <button onClick={closeModal}
                                className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300">✕
                        </button>
                        <div className="bg-white rounded-2xl overflow-hidden">
                            <div className="relative">
                                <div
                                    className="h-[400px] bg-gray-200 flex items-center justify-center text-gray-400 text-xl">
                                    📷 Фото {currentItem.name}
                                </div>
                                <button onClick={prevItem}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full hover:bg-black/70">◀
                                </button>
                                <button onClick={nextItem}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full hover:bg-black/70">▶
                                </button>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">{currentItem.name}</h3>
                                <p className="text-gray-600 mb-4">{currentItem.description}</p>
                                <p className="text-3xl font-bold text-amber-600">{currentItem.price.toLocaleString()} ₽</p>
                            </div>
                        </div>
                        <div className="flex justify-center gap-2 mt-4">
                            {currentItems.map((_, idx) => (
                                <button key={idx} onClick={() => setCurrentIndex(idx)}
                                        className={`w-2 h-2 rounded-full transition ${idx === currentIndex ? "bg-white" : "bg-white/50"}`}/>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <footer className="bg-black/80 py-12">
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