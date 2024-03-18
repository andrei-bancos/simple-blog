"use server"
import prisma from "@/prisma/clientDB";
export async function getArticles() {
  try {
    const articles = await prisma.article.findMany({
      include: {
        category: true
      },
      orderBy: {
        postedAt: 'desc'
      }
    })
    return articles
  } catch (e) {
    console.error(e)
  }
}

export async function getArticleBySlug(slug) {
  try {
    const article = await prisma.article.findUnique({
      include: {
        category: true
      },
      where: {
        slug: slug
      }
    })

    return article
  } catch (e) {
    console.log(e)
  }
}