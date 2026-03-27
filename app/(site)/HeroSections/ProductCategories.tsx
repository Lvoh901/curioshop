import { getPublishedCurations } from "@/lib/site-data";
import ProductCategoriesClient from "./ProductCategoriesClient";

export default async function ProductCategories() {
    try {
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
    } catch (error) {
        console.error("Failed to fetch product categories:", error);
        // Return with empty array to trigger fallback categories in the client component
        return <ProductCategoriesClient initialCategories={[]} />;
    }
}
