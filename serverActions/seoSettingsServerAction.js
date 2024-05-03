"use server"
import clientDB from "@/prisma/clientDB";
import {revalidatePath} from "next/cache";

export async function getSeoSettings() {
  try {
    return await clientDB.generalSetting.findMany({
      where: {
        OR: [
          {name: "website_title"},
          {name: "website_description"},
          {name: "website_keywords"}
        ]
      }
    })
  } catch (e) {
    console.log(e)
  }
}

export async function updateSeoSettings(data) {
  try {
    await clientDB.generalSetting.upsert({
      where: {
        name: "website_title"
      },
      create: {
        name: "website_title",
        value: data.title
      },
      update: {
        value: data.title
      }
    })

    await clientDB.generalSetting.upsert({
      where: {
        name: "website_description"
      },
      create: {
        name: "website_description",
        value: data.description
      },
      update: {
        value: data.description
      }
    })

    await clientDB.generalSetting.upsert({
      where: {
        name: "website_keywords"
      },
      create: {
        name: "website_keywords",
        value: data.keywords
      },
      update: {
        value: data.keywords
      }
    })

    revalidatePath("/", "layout")

    return {success: true, message: "Settings has been updated"}
  } catch (e) {
    console.log(e)
    return {success: false, message: "Error check console"}
  }
}