import "./globals.css";
import {Header} from "@/src/components/header/header";
import {ReactNode} from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru">
        <body>
        <Header />
        <main>{children}</main>
        </body>
        </html>
    );
}