import {getArticleBySlug} from "@/serverActions/articlesServerAction";
import {notFound, redirect} from "next/navigation";
import {getCategories} from "@/serverActions/categoriesServerAction";
import ArticleForm from "@/app/admin/articles/components/articleForm";
import {isNotAuthenticate} from "@/serverActions/authServerAction";

export const metadata = {
  title: "Edit article"
}

export default async function EditPage({params}) {
  if(await isNotAuthenticate()) return redirect("/api/auth/signin")

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