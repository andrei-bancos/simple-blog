"use client"
import Article from "@/app/(root)/articles/components/article";
import {useRouter, useSearchParams} from "next/navigation";

export default function Articles({categories, articles}) {
  const router = useRouter();

  const searchParams = useSearchParams()
  const selectedCategory = decodeURIComponent(searchParams.get("category"))

  if(selectedCategory !== "null")  {
    articles = articles.filter(article => article.category.name === selectedCategory)
  }

  if(articles.length === 0) articles = null

  return (
    <section className="container mx-auto">
      <div className="flex flex-col gap-[30px] mb-[50px]">
        <h1 className="text-[35px] font-medium">Articles</h1>
        <div className="flex flex-col gap-[15px]">
          <h2 className="text-[20px] font-medium">Categories</h2>
          <ul className="flex flex-wrap gap-[15px]">
            <li
              className={`p-[5px_10px] rounded-[10px] shadow-md cursor-pointer 
                         ${selectedCategory === "null" ? "selectedCategory" : "bg-white"}`}
              onClick={() => router.push("/articles")}
            >
              All
            </li>
            {
              categories &&
                categories.map(category => (
                  <li
                    key={category.id}
                    className={`p-[5px_10px] rounded-[10px] shadow-md cursor-pointer 
                         ${selectedCategory === category.name ? "selectedCategory" : "bg-white"}`}
                    onClick={() => router.push("/articles/?category=" + category.name)}
                  >
                    {category.name}
                  </li>
                ))
            }
          </ul>
        </div>
        <form className="flex mt-[15px] w-full max-w-[450px] drop-shadow-md">
          <input
            className="text-[18px] w-full max-w-[300px] h-[50px] px-[15px] rounded-[15px_0_0_15px]"
            type="search"
            placeholder="Search article.."
          />
          <button
            className="text-white text-[20px] w-[150px] h-[50px] bg-black rounded-[0_10px_10px_0]"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div className="flex flex-wrap gap-[50px]">
        { articles ?
            articles.map(article => (
              <Article key={article.id} data={article}/>
            ))
          : <p>Articles not found.</p>
        }
      </div>
    </section>
  )
}