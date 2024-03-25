"use server"

import clientDB from "@/prisma/clientDB";

export async function sendMessage(data) {
  try {
    if(data.fullName.length <= 3) {
      return {success: false, message: "The full name must have at least 3 characters"}
    }else if(data.subject.length <= 10) {
      return {success: false, message: "The subject must have at least 10 characters"}
    } else if(data.message.length <= 30) {
      return {success: false, message: "The message must have at least 30 characters"}
    }

    const message = await clientDB.contactMessage.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        subject: data.subject,
        message: data.message
      }
    })
    return {success: true, message: "Message has been sent 👌"}
  } catch (e) {
    console.error(e)
    return {success: false, message: "Error try later.."}
  }
}