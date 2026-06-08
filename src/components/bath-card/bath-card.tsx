import { CatalogItem } from "@/src/types";

interface BathCardProps {
    bath: CatalogItem;
}

export const BathCard = ({
                             bath,
                         }: BathCardProps) => {
    return (
        <div className="border rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold">
                {bath.name}
            </h2>

            <p className="text-xl mt-2">
                {bath.price.toLocaleString()} ₽
            </p>

            <p className="mt-4 text-gray-600">
                {bath.description}
            </p>

            <button className="mt-4 border rounded px-4 py-2">
                Подробнее
            </button>
        </div>
    );
};