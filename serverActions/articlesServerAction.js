"use server"
import clientDB from "@/prisma/clientDB";
import cloudinary from "@/until/cloudinary";
import {revalidatePath} from "next/cache";

export async function getArticles() {
  try {
    const articles = await clientDB.article.findMany({
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
    const article = await clientDB.article.findUnique({
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

export async function createArticle(article) {
  try {
    const existsArticle = await clientDB.article.findUnique({
      where: {
        title: article.title
      }
    })

    if(existsArticle) {
      return {success: false, message: "Another article have this title.."}
    }

    await cloudinary.uploader.upload_large(
      article.articleImage,
      {
        resource_type: "image",
        folder: `simple-blog/${article.title}`
      }
    ).then(async (res) => {
      article.imagePublicId = res.public_id
      article.imageUrl = res.secure_url
    })

    await clientDB.article.create({
      data: {
        title: article.title,
        body: article.body,
        categoryId: article.category.id,
        description: article.description,
        keywords: article.keywords,
        imagePublicId: article.imagePublicId,
        imageUrl: article.imageUrl,
        slug: article.title.replaceAll(" ", "-")
      }
    })
    revalidatePath("/", "layout")
    return {success: true, message: "Article has been created"}
  } catch (e) {
    console.error(e)
    return {success: false, message: "Error check console"}
  }
}

export async function deleteArticle(articleId) {
  try {
    await clientDB.article.delete({
      where: {
        id: articleId
      }
    })

    revalidatePath("/", "layout")
    return {success: true, message: "Article has been deleted"}
  } catch (e) {
    console.log(e)
    return {success: false, message: "Error check console"}
  }
}