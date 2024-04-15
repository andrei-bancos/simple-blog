import {getCategories} from "@/serverActions/categoriesServerAction";
import ArticleForm from "@/app/admin/articles/components/articleForm";

export const metadata = {
  title: "Admin Panel - Add article"
}

export default async function AddArticlePage() {
  const categories = await getCategories()
  return(
    <section className="container mx-auto">
      <ArticleForm categories={categories} />
    </section>
  )
}