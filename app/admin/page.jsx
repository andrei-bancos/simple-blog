import Statistics from "@/app/admin/components/statistics";
import {getArticles} from "@/serverActions/articlesServerAction";
import {getCountArticlesPerCategory} from "@/serverActions/categoriesServerAction";
import {getMessages} from "@/serverActions/contactServerAction";
import {getAllComments} from "@/serverActions/commentsServerAction";

export const metadata = {
  title: "Admin panel"
}

export default async function AdminPage() {
  const articles = await getArticles()
  const categories = await getCountArticlesPerCategory()
  const messagesCount = (await getMessages()).length
  const commentsCount = (await getAllComments()).length

  return(
    <>
      <Statistics
        articles={articles}
        categories={categories}
        messagesCount={messagesCount}
        commentsCount={commentsCount}
      />
    </>
  )
}