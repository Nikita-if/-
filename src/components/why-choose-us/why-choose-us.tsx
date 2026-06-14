import {
    Hammer,
    DraftingCompass,
    CircleDot,
    Users,
    Shield,
} from "lucide-react";

export const WhyChooseUs = () => {
    const advantages = [
        {
            title: "ИНДИВИДУАЛЬНЫЕ ПРОЕКТЫ",
            description: "Разрабатываем проекты под ваши пожелания и образ жизни",
            icon: DraftingCompass,
        },
        {
            title: "ОТБОРНОЕ БРЕВНО",
            description: "Каждое бревно проходит строгий отбор и контроль качества",
            icon: CircleDot,
        },
        {
            title: "ПРОФЕССИОНАЛЬНАЯ КОМАНДА",
            description: "Каждый проект реализуют профессионалы с большим опытом",
            icon: Users,
        },
        {
            title: "ГАРАНТИЯ КАЧЕСТВА",
            description: "Даем гарантию на материалы и все виды работ нашей компании",
            icon: Shield,
        },
        {
            title: "СОБСТВЕННОЕ ПРОИЗВОДСТВО",
            description: "Контроль качества на каждом этапе",
            icon: Hammer,
        },
    ];

    const firstRow = advantages.slice(0, 3);
    const secondRow = advantages.slice(3);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-5xl font-bold text-center text-gray-800 mb-20">
                    Наши преимущества
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
                    {firstRow.map((advantage, index) => {
                        const Icon = advantage.icon;

                        return (
                            <div key={index} className="text-center">
                                <div className="flex justify-center mb-6">
                                    <Icon
                                        size={48}
                                        className="text-green-700"
                                        strokeWidth={1.5}
                                    />
                                </div>

                                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                    {advantage.title}
                                </h3>

                                <p className="text-gray-500 leading-8 max-w-xs mx-auto">
                                    {advantage.description}
                                </p>

                                <div className="h-px bg-gray-200 mt-10" />
                            </div>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12 max-w-4xl mx-auto mt-16">
                    {secondRow.map((advantage, index) => {
                        const Icon = advantage.icon;

                        return (
                            <div key={index} className="text-center">
                                <div className="flex justify-center mb-6">
                                    <Icon
                                        size={48}
                                        className="text-green-700"
                                        strokeWidth={1.5}
                                    />
                                </div>

                                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                    {advantage.title}
                                </h3>

                                <p className="text-gray-500 leading-8 max-w-xs mx-auto">
                                    {advantage.description}
                                </p>

                                <div className="h-px bg-gray-200 mt-10" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};