import Link from "next/link";
import {WhyChooseUs} from "@/src/components/why-choose-us/why-choose-us";

export const HomePage = () => {
    return (
        <main>
            <section className="relative min-h-screen bg-cover bg-center"
                     style={{
                         backgroundImage: "url('/images/hero.jpg')",
                     }}>

                <div className="max-w-xl shrink-0">
                    <h1 className="text-6xl font-bold mb-6 text-white">
                        Бани и изделия из дерева
                    </h1>

                    <p className="text-xl mb-8 text-white">
                        Производим бани, беседки, срубы и будки
                        из качественной древесины под заказ.
                    </p>

                    <button >
                        <Link
                            href="/catalog"
                            className="border px-8 py-4 rounded-xl inline-block text-white"
                        >
                            Смотреть каталог
                        </Link>
                    </button>
                </div>
            </section>
            <WhyChooseUs />
        </main>
    );
};