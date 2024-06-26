"use server"
import clientDB from "@/prisma/clientDB";
import cloudinary from "@/until/cloudinary";
import {revalidatePath} from "next/cache";
import ObjectID from "bson-objectid";

export async function getArticles() {
  try {
    const articles = await clientDB.article.findMany({
      include: {
        category: true,
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
        category: true,
        comments: {
          orderBy: {
            postedAt: 'desc'
          }
        }
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

    const articleId = new ObjectID();

    await cloudinary.uploader.upload_large(
      article.articleImage,
      {
        resource_type: "image",
        folder: `simple-blog/${articleId}`
      }
    ).then(async (res) => {
      article.imagePublicId = res.public_id
      article.imageUrl = res.secure_url
    })

    await clientDB.article.create({
      data: {
        id: articleId,
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

export async function updateArticle(article) {
  try {
    let articleTitleExists = false;
    await clientDB.article.findUnique({
      where: {
        title: article.title
      }
    }).then(res => {
      if(res && res.id !== article.id) {
        articleTitleExists = true
      }
    })

    if(articleTitleExists) return {success: false, message: "Another article have this title.."}

    // if image are changed
    if(article.articleImage !== '') {
      await cloudinary.api.delete_resources([article.imagePublicId])
      await cloudinary.uploader.upload_large(
        article.articleImage,
        {
          resource_type: "image",
          folder: `simple-blog/${article.id}`
        }
      ).then(async (res) => {
        article.imagePublicId = res.public_id
        article.imageUrl = res.secure_url
      })
    }

    await clientDB.article.update({
      where: {
        id: article.id
      },
      data: {
        title: article.title,
        body: article.body,
        keywords: article.keywords,
        description: article.description,
        imagePublicId: article.imagePublicId,
        imageUrl: article.imageUrl,
        slug: article.title.replaceAll(" ", "-"),
        categoryId: article.category.id,
      }
    })

    revalidatePath("/", "layout")
    return {success: true, message: "Article has been updated"}
  } catch (e) {
    console.error(e)
    return {success: false, message: "Error check console"}
  }
}

export async function incrementNewView(articleId, ipAddress) {
  try {
    const article = await clientDB.article.findUnique({
      where: {
        id: articleId
      },
    });

    if (!article.views.includes(ipAddress)) {
      article.views.push(ipAddress);

      await clientDB.article.update({
        where: {
          id: articleId
        },
        data: {
          views: {
            set: article.views
          },
        },
      });
    }
  } catch (e) {
    console.error(e);
  }
}

export async function deleteArticle(articleId) {
  try {
    await clientDB.article.findFirst({
      where: {
        id: articleId
      }
    }).then(async (article) => {
      await clientDB.article.delete({
        where: {
          id: articleId
        }
      })
      await cloudinary.api.delete_resources([article.imagePublicId])
      await cloudinary.api.delete_folder("simple-blog/" + article.id)
    })

    revalidatePath("/", "layout")
    return {success: true, message: "Article has been deleted"}
  } catch (e) {
    console.log(e)
    return {success: false, message: "Error check console"}
  }
}