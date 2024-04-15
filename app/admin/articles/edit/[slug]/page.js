import {getArticleBySlug} from "@/serverActions/articlesServerAction";
import {notFound} from "next/navigation";
import {getCategories} from "@/serverActions/categoriesServerAction";
import ArticleForm from "@/app/admin/articles/components/articleForm";

export const metadata = {
  title: "Edit article"
}

export default async function EditPage({params}) {
  const slug = decodeURIComponent(params.slug)
  const article = await getArticleBySlug(slug)
  if(article === null) return notFound()
  const categories = await getCategories()

  return (
    <section className="container mx-auto">
      <ArticleForm article={article} categories={categories} />
    </section>
  )
}