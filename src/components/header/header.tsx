import Link from "next/link";
import Image from "next/image";
import { Send } from "lucide-react";

const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.882 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const VkIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.27-1.422 2.18-3.608 2.18-3.608.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.49-.085.744-.576.744z" />
    </svg>
);

export const Header = () => {
    const menuItems = [
        { name: "Главная", href: "/" },
        { name: "Контакты", href: "/contacts" },
        { name: "Каталог", href: "/catalog" },
    ];

    return (
        <header className="absolute top-0 left-0 w-full z-30 pt-4">
            <div className="max-w-[1280px] mx-auto px-4">
                <div className="flex items-center justify-between gap-6">
                    <Link href="/" className="flex items-center shrink-0">
                        <Image src="/logo.svg" alt="Массивъ" width={110} height={32} priority />
                    </Link>

                    <div className="flex items-center gap-8 ml-auto">
                        <nav className="hidden sm:flex items-center gap-6">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-white hover:text-amber-400 transition-colors duration-300 font-medium text-sm md:text-base"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex items-center gap-4 bg-black/50 rounded-full px-4 py-2">
                            <a
                                href="https://t.me"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-amber-400 transition-colors flex items-center justify-center w-5 h-5"
                                aria-label="Telegram"
                            >
                                <Send size={18} />
                            </a>
                            <a
                                href="https://vk.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-amber-400 transition-colors flex items-center justify-center w-5 h-5"
                                aria-label="VK"
                            >
                                <VkIcon />
                            </a>
                            <a
                                href="https://wa.me"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-amber-400 transition-colors flex items-center justify-center w-5 h-5"
                                aria-label="WhatsApp"
                            >
                                <WhatsAppIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
