import Image from "next/image";
import {notFound} from "next/navigation";
import {getArticleBySlug} from "@/serverActions/articlesServerAction";

export const metadata = {
  title: "Article title"
}

export default async function ArticlePage({params}) {
  const slug = decodeURIComponent(params.slug)
  const article = await getArticleBySlug(slug)

  if(article == null) return notFound();

  return(
    <article className="container mx-auto">
      <h1 className="text-[30px] font-medium mb-[30px]">{article.title}</h1>
      <div className="flex flex-wrap gap-[50px]">
        <div className="max-w-[1000px] text-[18px] text-justify">
          <Image
            className="rounded-[10px] shadow-md mb-[50px]"
            src="/article-image.png"
            width="1920"
            height="1000"
            alt=""
          />
          {article.body}
        </div>
        <div className="flex flex-col max-w-[300px] gap-[15px]">
          <h3 className="text-[20px] font-medium">
            Category: <span className="font-normal italic">{article.category.name}</span>
          </h3>
          <h3 className="text-[20px] font-medium">
            Posted at: <span className="font-normal italic">{article.postedAt.toString()}</span>
          </h3>
          <div>
            <h3 className="text-[20px] font-medium">Keywords:</h3>
            <ul className="flex flex-wrap mt-[15px] gap-[10px]">
              {
                article.keywords.split(', ').map((keyword) => (
                  <li key={keyword} className="p-[5px_10px] bg-white rounded-[10px] shadow-md">{keyword}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
}