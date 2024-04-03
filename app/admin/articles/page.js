import Articles from "@/app/admin/articles/components/articles";
import {getArticles} from "@/serverActions/articlesServerAction";
import {getCategories} from "@/serverActions/categoriesServerAction";
import {Suspense} from "react";
import Loading from "@/app/globalComponents/Loading";

export const metadata = {
  title: "Admin panel - Articles"
}

export default async function ArticlePage() {
  const articles = await getArticles()
  const categories = await getCategories()
  return(
    <Suspense fallback={<Loading />}>
      <Articles articles={articles} categories={categories} />
    </Suspense>
  )
}