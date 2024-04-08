"use server"

import clientDB from "@/prisma/clientDB";

export async function getCategories() {
  try {
    const categories = await clientDB.category.findMany()
    return categories
  } catch (e) {
    console.error(e)
  }
}

export async function getCountArticlesPerCategory() {
  try {
    const result = await clientDB.category.findMany({
      include: {
        _count: {
          select: {Article: true}
        }
      }
    })

    return result
  } catch (e) {
    console.error(e)
  }
}

export async function createCategory(categoryName) {
  try {
    const category = await clientDB.category.create({
      data: {
        name: categoryName
      }
    })

    return {success: true, message: "Category created successfully."};
  } catch (e) {
    console.error(e)
    return {success: false, message: "Error check console"}
  }
}

export async function deleteCategory(categoryName) {
  try {
    await clientDB.category.delete({
      where: {
        name: categoryName
      }
    })
  } catch (e) {
    console.error(e)
  }
}