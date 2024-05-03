"use client"
import Image from "next/image";
import ShareArticle from "@/app/(root)/article/[slug]/components/shareArticle";
import Comments from "@/app/(root)/article/[slug]/components/comments";
import FormComments from "@/app/(root)/article/[slug]/components/formComments";
import {usePathname} from "next/navigation";
import {calculateReadingTime} from "@/until/articleUtils";

export default function ShowArticle({article, isAdmin}) {
  const pathname = usePathname()
  let adminPanel = false

  if(pathname === "/admin/articles/add" || pathname.includes("edit")) {
    adminPanel = true
  }

  if(article.postedAt) {
    article.postedAt = article.postedAt.toLocaleString()
  } else {
    article.postedAt = new Date().toLocaleDateString()
  }

  return (
    <article>
      <h1 className="text-[30px] font-medium mb-[30px]">{article.title}</h1>
      <div className="flex flex-wrap gap-[50px]">
        <div className="max-w-[1000px] text-[18px] text-justify">
          <Image
            className="object-cover object-left-top rounded-[10px] shadow-md mb-[50px] max-h-[500px]"
            src={
            adminPanel ? article.imageUrl : `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload/c_scale,w_2560/${article.imagePublicId}.webp`
            }
            width="1920"
            height="1000"
            alt=""
            priority
          />
          <div className="article" dangerouslySetInnerHTML={{__html: article.body}}>

          </div>
        </div>
        <div className="flex flex-col max-w-[300px] gap-[15px]">
          <h3 className="text-[20px] font-medium">
            Category: <span className="font-normal italic">{article.category.name}</span>
          </h3>
          <h3 className="text-[20px] font-medium">
            Posted at: <span className="font-normal italic">{article.postedAt.toLocaleString()}</span>
          </h3>
          { !adminPanel &&
            <>
              <h3 className="text-[20px] font-medium">
                Reading time: <span className="font-normal italic">{calculateReadingTime(article.body)} min</span>
              </h3>
              <h3 className="text-[20px] font-medium">
                Views: <span className="font-normal italic">{article.views.length}</span>
              </h3>
            </>
          }
          <div className="flex flex-col gap-[30px]">
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
            {
              !adminPanel &&
              <>
                <ShareArticle article={article}/>
                <FormComments articleId={article.id}/>
                <Comments comments={article.comments} isAdmin={isAdmin}/>
              </>
            }
          </div>
        </div>
      </div>
    </article>
  )
}