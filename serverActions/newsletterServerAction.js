"use server"
import clientDB from "@/prisma/clientDB";

export async function addNewsletter(emailAddress) {
  try {
    const existNewsletter = await clientDB.newsletter.findUnique({
      where: {
        email: emailAddress
      }
    })

    if(!existNewsletter) {
      await clientDB.newsletter.create({
        data: {
          email: emailAddress
        }
      })
      return {success: true, info: "You are subscribed now!"}
    } else {
      return {success: false, info: "You are already subscribed."}
    }
  } catch (e) {
    console.error(e)
  }
}