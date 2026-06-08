import Link from "next/link";

export const Header = () => {
    const menuItems = [
        { name: "ГЛАВНАЯ", href: "/" },
       // { name: "ДОСТАВКА И УСТАНОВКА", href: "/delivery" },
       // { name: "НАШИ РАБОТЫ", href: "/projects" },
        //{ name: "ВИДЕО", href: "/video" },
        //{ name: "ФУНДАМЕНТЫ", href: "/foundations" },
        { name: "КАТАЛОГ", href: "/catalog" },
        { name: "ОТЗЫВЫ", href: "/reviews" },
        { name: "КОНТАКТЫ", href: "/contacts" },
    ];

    return (
        <header className="bg-stone-900 text-white w-full" >


            <div className="py-4 w-full">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                    <div>
                        <div className="text-2xl font-bold tracking-wide mi-auto">
                            WOODHOUSE
                        </div>
                        <div className="text-sm text-gray-400">
                            дома и бани из дерева под ключ
                        </div>
                    </div>

                    <nav className="hidden lg:flex gap-6">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative text-gray-300 hover:text-white transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
<div className="flex gap-5">
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
                        СДЕЛАТЬ ЗАКАЗ
                    </button>
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
                        ОБРАТНЫЙ ЗВОНОК
                    </button>
                </div>
                </div>
            </div>
        </header>
    );
};