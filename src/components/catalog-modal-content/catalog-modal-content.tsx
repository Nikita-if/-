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
    const [search] = useState("");
    const [sort] = useState("");

    const [emblaRef] = useEmblaCarousel({
        loop: true,
        slidesToScroll: 1,
        breakpoints: {
            '(min-width: 640px)': {
                slidesToScroll: 2,
            },
            '(min-width: 1024px)': {
                slidesToScroll: 3,
            },
        },
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

    return (
        <div className="bg-white rounded-2xl p-4 sm:p-6 w-full max-h-[90vh] flex flex-col">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">{title}</h1>

            <div className="overflow-hidden flex-1" ref={emblaRef}>
                <div className="flex h-full">
                    {sorted.map((item) => (
                        <div
                            key={item.id}
                            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33.33%] px-1 sm:px-2"
                        >
                            <Link href={`/catalog/${item.category}/${item.id}`}>
                                <BathCard bath={item} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};