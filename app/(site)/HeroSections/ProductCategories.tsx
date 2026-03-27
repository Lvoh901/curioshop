import { getPublishedCurations } from "@/lib/site-data";
import ProductCategoriesClient from "./ProductCategoriesClient";

export default async function ProductCategories() {
    const curations = await getPublishedCurations();

    // Map curations to categories format for the client component
    const categories = curations.map(curation => ({
        id: curation.id,
        name: curation.title,
        slug: curation.slug,
        image: curation.coverImageUrl,
        description: curation.description
    }));

    return <ProductCategoriesClient initialCategories={categories} />;
}
