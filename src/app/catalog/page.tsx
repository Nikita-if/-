import Link from "next/link";

export default function CatalogPage() {
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-8">Каталог</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                    href="/catalog/baths"
                    className="block border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                    <h2 className="text-2xl font-bold mb-2">Бани</h2>
                    <p className="text-sm text-gray-600">Все виды бань и саун</p>
                </Link>

                <Link
                    href="/catalog/dog-houses"
                    className="block border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                    <h2 className="text-2xl font-bold mb-2">Будки</h2>
                    <p className="text-sm text-gray-600">Все виды собачьих будок</p>
                </Link>

                <Link
                    href="/catalog/log-hauses"
                    className="block border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                    <h2 className="text-2xl font-bold mb-2">Срубы</h2>
                    <p className="text-sm text-gray-600">Все виды срубов будок</p>
                </Link>


            </div>
        </div>
    );
}