import Link from "next/link";
import {ReactNode} from "react";
import "./globals.css";

export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode;
}) {
    return (
        <html lang="ru">
        <body>
        <nav className="flex gap-4 p-4">
            <Link href='/'>Главное </Link>
            <Link href="/contacts">
                Контакт
            </Link>
            <Link href="/catalog">
                Каталог
            </Link>

        </nav>
        {children}
        </body>
        </html>
    );
}