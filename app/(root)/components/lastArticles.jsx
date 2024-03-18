import Article from "@/app/(root)/articles/components/article";
import {getArticles} from "@/serverActions/articlesServerAction";

export default async function LastArticles() {
  const articles = await getArticles();

  return(
    <section className="flex flex-col items-center container mx-auto">
      <h2 className="text-[35px] font-medium mb-[30px]">Last articles</h2>
      <div className="flex justify-center flex-wrap gap-[50px]">
        {
          articles ?
            articles.slice(3).map(article => (
              <Article key={article.id} data={article} />
            ))
          : <p>Articles not found.</p>
        }
      </div>
    </section>
  )
}