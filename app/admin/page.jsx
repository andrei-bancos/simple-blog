import Statistics from "@/app/globalComponents/statistics";
import {getArticles} from "@/serverActions/articlesServerAction";
import {getCountArticlesPerCategory} from "@/serverActions/categoriesServerAction";

export const metadata = {
  title: "Admin panel"
}

export default async function AdminPage() {
  const articles = await getArticles()
  const categories = await getCountArticlesPerCategory()

  return(
    <>
      <Statistics articles={articles} categories={categories} />
    </>
  )
}