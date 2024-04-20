"use client"
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";

export default function FilterArticles({categories, articles, setFilteredArticles}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const selectedCategory = decodeURIComponent(searchParams.get("category"))
  const search = decodeURIComponent(searchParams.get("search"))
  const [searchText, setSearchText] = useState("")

  const submitSearch = (e) => {
    e.preventDefault();
    const encodeUri = encodeURIComponent(searchText)
    console.log(searchText)
    return router.push(pathname + "/?search=" + encodeUri)
  }

  useEffect(() => {
    if(selectedCategory !== "null")  {
      setSearchText("")
      let filteredArticles  = articles.filter(article => article.category.name === selectedCategory)
      setFilteredArticles(filteredArticles)
    } else if(search !== "null") {
      const searchWords = search.toLowerCase().split(" ")

      setFilteredArticles(articles.filter(article => {
        const title = article.title.toLowerCase()
        return searchWords.every(word => title.includes(word))
      }))
    } else {
      setFilteredArticles(articles)
    }
  }, [articles, search, selectedCategory, setFilteredArticles]);

  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[15px]">
        <h2 className="text-[20px] font-medium">Categories</h2>
        <ul className="flex flex-wrap gap-[15px]">
          <li
            className={`p-[5px_10px] rounded-[10px] shadow-md cursor-pointer 
                         ${selectedCategory === "null" ? "selectedCategory" : "bg-white"}`}
            onClick={() => router.push(pathname)}
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
                onClick={() => router.push(pathname + "/?category=" + category.name)}
              >
                {category.name}
              </li>
            ))
          }
        </ul>
      </div>
      <form onSubmit={submitSearch} className="flex mt-[15px] w-full max-w-[450px] drop-shadow-md">
        <input
          className="text-[18px] w-full max-w-[300px] h-[50px] px-[15px] rounded-[15px_0_0_15px]"
          type="search"
          placeholder="Search article.."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="text-white text-[20px] w-[150px] h-[50px] bg-black rounded-[0_10px_10px_0]"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  )
}