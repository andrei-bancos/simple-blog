import Articles from "@/app/admin/articles/components/articles";
import {getArticles} from "@/serverActions/articlesServerAction";
import {getCategories} from "@/serverActions/categoriesServerAction";
import {Suspense} from "react";
import Loading from "@/app/globalComponents/Loading";
import {isNotAuthenticate} from "@/serverActions/authServerAction";
import {redirect} from "next/navigation";

export const metadata = {
  title: "Admin panel - Articles"
}

export default async function ArticlePage() {
  if(await isNotAuthenticate()) return redirect("/api/auth/signin")

  const articles = await getArticles()
  const categories = await getCategories()
  return(
    <Suspense fallback={<Loading />}>
      <Articles articles={articles} categories={categories} />
    </Suspense>
  )
}