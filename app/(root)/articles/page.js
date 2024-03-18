import Articles from "@/app/(root)/articles/components/articles";
import {getArticles} from "@/serverActions/articlesServerAction";
import {getCategories} from "@/serverActions/categoriesServerAction";
import {Suspense} from "react";

export const metadata = {
  title: "Articles"
}

export default async function ArticlesPage() {
  const categories = await getCategories();
  const articles = await getArticles();
  return (
    <main className="min-h-screen">
      <Suspense fallback={<>Loading..</>}>
        <Articles categories={categories} articles={articles} />
      </Suspense>
    </main>
  )
}