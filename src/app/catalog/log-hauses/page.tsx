"use client"
import {CatalogList} from "@/src/components/catalog-list/catalog-list";
import {logHouses} from "@/src/mocks/log-hauses";


export default function LogHouses() {

    return (
        <div>
            <CatalogList
                title={'Срубы'}
                items={logHouses}
            />
        </div>
    );
}