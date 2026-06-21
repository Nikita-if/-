import {logHouses} from "@/src/mocks/log-hauses";
import {dogHouses} from "@/src/mocks/dog-houses";


const allItems = [...logHouses,...dogHouses];

export default function CatalogItemPage({ params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    const item = allItems.find(item => item.id === id);

    if (!item) {
        return <div>Товар не найден</div>;
    }

    return (
        <div>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <p>Цена: {item.price} ₽</p>
            <img src={item.image} alt={item.name} />
        </div>
    );
}