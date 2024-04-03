import Image from "next/image";
import {notFound} from "next/navigation";
import {getArticleBySlug} from "@/serverActions/articlesServerAction";
import ShowArticle from "@/app/globalComponents/showArticle";

export const metadata = {
  title: "Article title"
}

export default async function ArticlePage({params}) {
  const slug = decodeURIComponent(params.slug)
  const article = await getArticleBySlug(slug)

  if(article == null) return notFound();

  return(
    <section className="container mx-auto">
      <ShowArticle article={article} />
    </section>
  )
}