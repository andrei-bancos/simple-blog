import {notFound} from "next/navigation";
import {getArticleBySlug, incrementNewView} from "@/serverActions/articlesServerAction";
import ShowArticle from "@/app/globalComponents/showArticle";
import {isAuthenticateAsAdmin} from "@/serverActions/authServerAction";
import {headers} from "next/headers";

export async function generateMetadata({params}) {
  const slug = decodeURIComponent(params.slug)
  const article = await getArticleBySlug(slug)
  if(article === null) return null
  return {
    title: article.title,
    keywords: article.keywords,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url: '',
      images: [
        {
          url: article.imageUrl,
          width: '',
          height: '',
        }
      ],
      siteName: 'Simple-Blog',
      locale: 'en_US',
      type: 'article',
      publishedTime: article.postedAt
    },
  }
}

export default async function ArticlePage({params}) {
  const slug = decodeURIComponent(params.slug)
  const article = await getArticleBySlug(slug)

  if(article == null) return notFound();

  const header = headers();
  const ipAddress = header.get("x-forwarded-for")
  await incrementNewView(article.id, ipAddress)

  const isAdmin = await isAuthenticateAsAdmin()

  return(
    <section className="container mx-auto">
      <ShowArticle article={article} isAdmin={isAdmin} />
    </section>
  )
}