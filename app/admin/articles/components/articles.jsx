"use client"
import FilterArticles from "@/app/globalComponents/filterArticles";
import {useState} from "react";
import {deleteArticle} from "@/serverActions/articlesServerAction";
import {useRouter} from "next/navigation";

export default function Articles({articles, categories}) {
  const router = useRouter()
  const [filteredArticles, setFilteredArticles] = useState(articles)

  if(articles == null) setFilteredArticles([])

  const delArticle = async (articleId) => {
    if(confirm("You want delete article?")) {
      const res = await deleteArticle(articleId)
      if(res.success) router.refresh()
    }
  }

  return(
    <section className="container mx-auto">
      <h2 className="text-[35px] text-center font-medium mb-[30px]">Articles [ {filteredArticles.length} ]</h2>
      <div className="flex flex-col gap-[30px] mb-[50px]">
        <div className="flex gap-[30px]">
          <button
            className="text-white text-[18px] p-[10px_15px] bg-black rounded-[10px] shadow-md"
            onClick={() => router.push("/admin/articles/add")}
          >
            Add new article
          </button>
          <button className="text-white text-[18px] p-[10px_15px] bg-black rounded-[10px] shadow-md">
            Categories
          </button>
        </div>
        <FilterArticles articles={articles} categories={categories} setFilteredArticles={setFilteredArticles}/>
      </div>
      <div className="flex flex-col gap-[30px]">
        {
          filteredArticles.length !== 0 ?
            filteredArticles.map((article) => (
              <div
                className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-[50px] p-[25px_30px] bg-white
                           shadow-md rounded-[10px]"
                key={article.id}
              >
                <div>
                  <h3 className="text-[20px] font-medium line-clamp-2 mb-[15px]">{article.title}</h3>
                  <p className="text-[18px] line-clamp-2">{article.description}</p>
                </div>
                <div className="flex flex-col gap-[15px] w-full max-w-[150px]">
                  <button
                    className="text-[18px] text-white font-medium p-[10px_15px] bg-black rounded-[10px] shadow-md"
                  >
                    Edit
                  </button>
                  <button
                    className="text-[18px] text-white font-medium p-[10px_15px] bg-red-500 rounded-[10px] shadow-md"
                    onClick={() => delArticle(article.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          : <p>Articles not found.</p>
        }
      </div>
    </section>
  )
}