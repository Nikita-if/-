export interface CatalogItem {
    id: number;
    name: string;
    price: number;
    image: string ;
    description: string;
    category: "baths" | "log-houses" | "dog-houses";
}
