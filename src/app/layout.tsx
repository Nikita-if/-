import "./globals.css";
import {Header} from "@/src/components/header/header";
import {ReactNode} from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru">
        <body>
        <Header />
        <main>{children}</main>
        <footer className="bg-stone-900 text-white py-8 mt-20">
            <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
                © 2026 Все права защищены.
            </div>
        </footer>
        </body>
        </html>
    );
}