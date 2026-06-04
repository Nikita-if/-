"use client";
import {baths} from "@/src/mocks/baths";
import {CatalogList} from "@/src/components/catalog-list/catalog-list";

export default function PageCatalog() {


    return (
        <div>
            <CatalogList
                title={'Бани'}
                items={baths}
            />

        </div>


    );
}