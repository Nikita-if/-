import Link from "next/link";

export default function CatalogPage() {
    return (
        <section
            className="relative min-h-screen bg-cover bg-center bg-no-repeat p-8"
            style={{backgroundImage: "url('/images/catalog.jpg')"}}
        >
            <div className="absolute inset-0 bg-black/40"/>

            <div className="relative z-10">
                <h1 className="text-4xl font-bold mb-8 text-white">Каталог</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Бани */}
                    <Link
                        href="/catalog/baths"
                        className="group block aspect-square rounded-2xl overflow-hidden relative"
                    >
                        {/* Фото */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{backgroundImage: "url('/images/bath1.jpg')"}}
                        />
                        {/* Затемнение */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"/>
                        {/* Текст */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-3xl font-bold text-white">Бани</h2>
                        </div>
                    </Link>

                    <Link
                        href="/catalog/dog-houses"
                        className="group block aspect-square rounded-2xl overflow-hidden relative"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{backgroundImage: "url('/images/dog-house.jpg')"}}
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"/>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-3xl font-bold text-white">Будки</h2>
                        </div>
                    </Link>

                    <Link
                        href="/catalog/log-houses"
                        className="group block aspect-square rounded-2xl overflow-hidden relative"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{backgroundImage: "url('/images/log-house.jpg')"}}
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"/>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-3xl font-bold text-white">Срубы</h2>

                        </div>

                    </Link>
                    <Link
                        href="/catalog/gazebos"
                        className="group block aspect-square rounded-2xl overflow-hidden relative  items-center "                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{backgroundImage: "url('/images/gazebo.jpg')"}}
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"/>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-3xl font-bold text-white">Беседки</h2>
                        </div>
                    </Link>

                </div>
            </div>
        </section>
    );
}