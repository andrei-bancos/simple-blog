"use server"

import prisma from "@/prisma/clientDB";

export async function getCategories() {
  try {
    const categories = await prisma.category.findMany()
    return categories
  } catch (e) {
    console.error(e)
  }
}

export async function getCountArticlesPerCategory() {
  try {
    const result = await prisma.category.findMany({
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