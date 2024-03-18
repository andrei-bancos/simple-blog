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