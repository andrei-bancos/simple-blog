"use server"

import clientDB from "@/prisma/clientDB";

export async function getSocialMedia() {
  try {
    return await clientDB.generalSetting.findMany({
      where: {
        OR: [
          {name: "socialMedia_facebook"},
          {name: "socialMedia_instagram"},
          {name: "socialMedia_x"},
          {name: "socialMedia_linkedin"}
        ]
      }
    })
  } catch (e) {
    console.log(e)
  }
}

export async function updateSocialMedia(data) {
  try {
    await clientDB.generalSetting.upsert({
      where: {
        name: "socialMedia_facebook"
      },
      create: {
        name: "socialMedia_facebook",
        value: data.facebook
      },
      update: {
        value: data.facebook
      }
    })

    await clientDB.generalSetting.upsert({
      where: {
        name: "socialMedia_instagram"
      },
      create: {
        name: "socialMedia_instagram",
        value: data.instagram
      },
      update: {
        value: data.instagram
      }
    })

    await clientDB.generalSetting.upsert({
      where: {
        name: "socialMedia_x"
      },
      create: {
        name: "socialMedia_x",
        value: data.x
      },
      update: {
        value: data.x
      }
    })

    await clientDB.generalSetting.upsert({
      where: {
        name: "socialMedia_linkedin"
      },
      create: {
        name: "socialMedia_linkedin",
        value: data.linkedin
      },
      update: {
        value: data.linkedin
      }
    })

    return {success: true, message: "Social media settings has been updated"}
  } catch (e) {
    console.error(e)
    return {success: false, message: "Error check console"}
  }
}