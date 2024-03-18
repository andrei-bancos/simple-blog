import Articles from "@/app/(root)/articles/components/articles";
import {getArticles} from "@/serverActions/articlesServerAction";
import {getCategories} from "@/serverActions/categoriesServerAction";

export const metadata = {
  title: "Articles"
}

export default async function ArticlesPage() {
  const categories = await getCategories();
  const articles = await getArticles();
  return (
    <main className="min-h-screen">
      <Articles categories={categories} articles={articles} />
    </main>
  )
}