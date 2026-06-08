import {useState} from "react";
import { CatalogItem } from "@/src/types";
import {BathCard} from "@/src/components/bath-card/bath-card";

interface CatalogListProps {
    title:string;
    items: CatalogItem[];
}

export const CatalogList = ({
                                title,
                                items,
                            }:CatalogListProps) => {
    const [search, setSearch] = useState<string>("");
    const [sort, setSort] = useState<string>("");

    const filteredBaths = items.filter((bath) =>
        bath.name.toLowerCase().includes(search.toLowerCase())
    );
    const sortedBaths = [...filteredBaths];

    if (sort === "cheap") {
        sortedBaths.sort((a, b) => a.price - b.price);
    }
    if (sort === "expensive") {
        sortedBaths.sort((a, b) => b.price - a.price);
    }

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-8">
                {title}
            </h1>
            <input
                className="border rounded-xl p-3 w-full mb-6"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Поиск ..."
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

            <div className="grid grid-cols-3 gap-6">
                {sortedBaths.map((items) => (
                    <BathCard
                        key={items.id}
                        bath={items}
                    />
                ))}
            </div>
        </div>
    );
};