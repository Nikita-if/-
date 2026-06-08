export const WhyChooseUs = () => {
    const stats = [
        { number: "18", label: "лет опыта", description: "Рубим и строим с 2008 года", icon: "🏠" },
        { number: "03", label: "собственные площадки", description: "3 производственные площадки", icon: "🏭" },
        { number: "14", label: "бригад сборщиков", description: "14 бригад / 3 бригады плотников на каждой площадке", icon: "👷" },
        { number: "35", label: "проектов в месяц", description: "Собираем от 35 проектов в месяц", icon: "📦" },
        { number: "20", label: "регионов РФ", description: "Работаем более чем в 20 регионах, включая Крым", icon: "🗺️" },
        { number: "0%", label: "негативных отзывов", description: "Ноль негативных отзывов в интернете", icon: "⭐" },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    ПОЧЕМУ ВЫБИРАЮТ НАС
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
                        >
                            <div className="text-5xl mb-4">{stat.icon}</div>

                            <div className="text-4xl font-bold text-amber-600 mb-2">
                                {stat.number}
                            </div>

                            <div className="text-xl font-semibold text-gray-800 mb-2">
                                {stat.label}
                            </div>

                            <div className="text-gray-500 text-sm">
                                {stat.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};