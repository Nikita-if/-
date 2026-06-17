import { CatalogItem } from "@/src/types";

interface BathCardProps {
    bath: CatalogItem;
}

export const BathCard = ({
                             bath,
                         }: BathCardProps) => {
    return (
        <div className="border rounded-xl p-6 shadow-md">
            <img
                src={bath.image}
                alt={bath.name}
                className="w-full h-64 object-cover rounded-lg object-fit: contain"
            />

            <h2 className="text-2xl font-bold mt-4">
                {bath.name}
            </h2>

            <p className="text-xl mt-2">
                {bath.price.toLocaleString()} ₽
            </p>

            <p className="mt-4 text-gray-600">
                {bath.description}
            </p>
        </div>
    );
};