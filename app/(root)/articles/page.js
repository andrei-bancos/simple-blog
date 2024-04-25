import Articles from "@/app/(root)/articles/components/articles";
import {getArticles} from "@/serverActions/articlesServerAction";
import {getCategories} from "@/serverActions/categoriesServerAction";
import {Suspense} from "react";
import Loading from "@/app/globalComponents/Loading";

export const metadata = {
  title: "Articles",
  description: "See our articles about technology and start discovering new things",
  keyword: "Simple blog, web, application, articles"
}

export default async function ArticlesPage() {
  const categories = await getCategories();
  const articles = await getArticles();
  return (
    <main className="min-h-screen">
      <Suspense fallback={<Loading />}>
        <Articles categories={categories} articles={articles} />
      </Suspense>
    </main>
  )
}