import {WhyChooseUs} from "@/src/components/why-choose-us/why-choose-us";

export const HomePage = () => {
    return (
        <main>
            <section className="relative">
                <img
                    src="/images/hero.jpg"
                    alt="Дома из массива"
                    className="w-full h-auto"
                />

                <div className="absolute inset-0 bg-black/30" />

                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto w-full px-4">
                        <div className="md:pl-[173px]">
                            <h1 className="text-white text-5xl md:text-7xl font-bold leading-none">
                                МассивЪ
                            </h1>

                            <p className="text-lg md:text-xl text-white max-w-[648px]">
                                Настоящие деревянные дома и бани для тех,
                                <br className="hidden sm:block" />
                                кто ценит природу и комфорт
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-20 bg-neutral-800">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-2xl md:text-[32px] font-medium text-white mb-4 font-['Raleway']">
                                Дом, в который хочется возвращаться
                            </h2>
                            <p className="text-gray-300 text-[16px] font-normal leading-[24px] font-['Raleway']">
                                Тепло натурального дерева, просторные светлые помещения и атмосфера,
                                которую невозможно создать искусственно. Здесь приятно начинать утро,
                                проводить время с близкими и отдыхать после насыщенного дня.
                                Мы строим дома, которые становятся любимым местом для жизни на долгие годы.
                            </p>
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
            </section>

            <WhyChooseUs/>
        </main>
    );
};