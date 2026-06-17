"use client";

import { useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { CatalogItem } from "@/src/types";
import { BathCard } from "@/src/components/bath-card/bath-card";
import Link from "next/link";

interface Props {
    title: string;
    items: CatalogItem[];
}

export const CatalogModalContent = ({ title, items }: Props) => {
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");

    const [emblaRef] = useEmblaCarousel({
        loop: true,
    });

    const filtered = useMemo(() => {
        return items.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [items, search]);

    const sorted = useMemo(() => {
        const data = [...filtered];

        if (sort === "cheap") {
            data.sort((a, b) => a.price - b.price);
        }

        if (sort === "expensive") {
            data.sort((a, b) => b.price - a.price);
        }

        return data;
    }, [filtered, sort]);

    // const scrollPrev = () => emblaApi?.scrollPrev();
    // const scrollNext = () => emblaApi?.scrollNext();

    return (
        <div className="bg-white rounded-2xl p-6 w-full">

            <h1 className="text-3xl font-bold mb-6">{title}</h1>

            <input
                className="border rounded-xl p-3 w-full mb-4"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Поиск..."
            />

            <select
                className="border rounded-xl p-3 w-full mb-6"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
            >
                <option value="">Без сортировки</option>
                <option value="cheap">Сначала дешевые</option>
                <option value="expensive">Сначала дорогие</option>
            </select>

            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">

                    {sorted.map((item) => (
                        <div key={item.id} className="min-w-full px-2">
                            <Link href={`/catalog/${item.id}`}>
                                <BathCard bath={item} />
                            </Link>
                        </div>
                    ))}

                </div>
            </div>

            {/*<div className="flex justify-between mt-4">*/}
            {/*    <button*/}
            {/*        onClick={scrollPrev}*/}
            {/*        className="px-4 py-2 bg-black text-white rounded-lg"*/}
            {/*    >*/}
            {/*        ◀*/}
            {/*    </button>*/}

            {/*    <button*/}
            {/*        onClick={scrollNext}*/}
            {/*        className="px-4 py-2 bg-black text-white rounded-lg"*/}
            {/*    >*/}
            {/*        ▶*/}
            {/*    </button>*/}
            {/*</div>*/}

        </div>
    );
};