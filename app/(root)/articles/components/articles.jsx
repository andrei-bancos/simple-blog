"use client"
import Article from "@/app/(root)/articles/components/article";
import FilterArticles from "@/app/globalComponents/filterArticles";
import {useState} from "react";

export default function Articles({categories, articles}) {
  const [filteredArticles, setFilteredArticles] = useState(articles)

  if(articles == null) setFilteredArticles([])

  return (
    <section className="container mx-auto">
      <div className="flex flex-col gap-[30px] mb-[50px]">
        <h1 className="text-[35px] font-medium">Articles</h1>
        <FilterArticles articles={articles} categories={categories} setFilteredArticles={setFilteredArticles} />
      </div>
      <div className="flex flex-wrap gap-[50px]">
        {
          filteredArticles.length !== 0 ?
          filteredArticles.map(article => (
              <Article key={article.id} data={article}/>
          ))
          : <p>Articles not found.</p>
        }
      </div>
    </section>
  )
}