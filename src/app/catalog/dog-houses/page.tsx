"use client";
import {CatalogList} from "@/src/components/catalog-list/catalog-list";
import {dogHouses} from "@/src/mocks/dog-houses";

export default function DogHouses() {

    return (
    <div>
        <CatalogList
            title={'Собачьи будки'}
            items={dogHouses}
        />
    </div>
    );
}