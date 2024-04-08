import Categories from "@/app/admin/articles/categories/components/categories";
import {getCountArticlesPerCategory} from "@/serverActions/categoriesServerAction";

export const metadata = {
  title: "Admin - Categories"
}

export default async function CategoriesPage() {
  const categories = await getCountArticlesPerCategory()
  return(
    <>
      <Categories categories={categories} />
    </>
  )
}