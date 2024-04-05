import {isNotAuthenticate} from "@/serverActions/authServerAction";
import {redirect} from "next/navigation";
import Statistics from "@/app/globalComponents/statistics";
import {getArticles} from "@/serverActions/articlesServerAction";
import {getCountArticlesPerCategory} from "@/serverActions/categoriesServerAction";

export const metadata = {
  title: "Admin panel"
}

export default async function AdminPage() {
  if(await isNotAuthenticate()) return redirect("/api/auth/signin")

  const articles = await getArticles()
  const categories = await getCountArticlesPerCategory()

  return(
    <>
      <Statistics articles={articles} categories={categories} />
    </>
  )
}