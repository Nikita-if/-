"use client";

import { useState } from "react";
import Link from "next/link";

export const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="md:hidden">
            <button
                onClick={toggleMenu}
                className="flex flex-col gap-1.5 p-2"
                aria-label="Меню"
            >
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

            <div className={`fixed top-0 left-0 w-full h-screen bg-neutral-900/95 backdrop-blur-md transition-all duration-300 z-50 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex justify-end p-4">
                    <button
                        onClick={toggleMenu}
                        className="text-white text-4xl"
                        aria-label="Закрыть меню"
                    >
                        ✕
                    </button>
                </div>

                <nav className="flex flex-col items-center justify-center h-full gap-8">
                    <Link
                        href="/"
                        onClick={toggleMenu}
                        className="text-white text-2xl font-medium hover:text-amber-400 transition"
                    >
                        Главная
                    </Link>

                    <Link
                        href="/catalog"
                        onClick={toggleMenu}
                        className="text-white text-2xl font-medium hover:text-amber-400 transition"
                    >
                        Каталог
                    </Link>

                    <Link
                        href="/contacts"
                        onClick={toggleMenu}
                        className="text-white text-2xl font-medium hover:text-amber-400 transition"
                    >
                        Контакты
                    </Link>

                    <a
                        href="tel:+79991176311"
                        onClick={toggleMenu}
                        className="text-amber-400 text-2xl font-bold mt-4"
                    >
                        +7 (999) 117 63 11
                    </a>
                </nav>
            </div>
        </div>
    );
};