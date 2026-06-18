import {notFound} from "next/navigation";
import {logHouses} from "@/src/mocks/log-hauses";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function LogHouses({params}: Props) {
    const {id} = await params;
    const house = logHouses.find((item) => item.id === Number(id));
    if (!house) {
        notFound();
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950">
            <div className="max-w-6xl mx-auto px-6 py-32">

                <div className="overflow-hidden rounded-[32px] shadow-2xl">
                    <img
                        src={house.image}
                        alt={house.name}
                        className="w-full h-[600px] object-cover"
                    />
                </div>

                <div className="relative -mt-16 mx-auto max-w-5xl">
                    <div className="bg-white rounded-[32px] shadow-2xl p-10">

                        <div className="flex flex-col md:flex-row justify-between gap-8">

                            <div>
                                <p className="uppercase tracking-[4px] text-gray-400 text-sm">
                                    Проект бани
                                </p>

                                <h1 className="text-5xl font-bold mt-2">
                                    {house.name}
                                </h1>

                                <p className="text-gray-600 text-lg mt-6 leading-8">
                                    {house.description}
                                </p>
                            </div>

                            <div className="bg-stone-100 rounded-3xl p-8 min-w-[280px]">
                                <p className="text-gray-500 mb-2">
                                    Стоимость проекта
                                </p>

                                <p className="text-5xl font-bold text-amber-600">
                                    {house.price.toLocaleString()} ₽
                                </p>

                                <button
                                    className="
                                mt-8
                                w-full
                                py-4
                                rounded-2xl
                                bg-amber-600
                                text-white
                                font-semibold
                                hover:bg-amber-700
                                transition
                            "
                                >
                                    Оставить заявку
                                </button>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}