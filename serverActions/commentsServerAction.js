"use server"
import clientDB from "@/prisma/clientDB";

export async function getAllComments() {
  try {
    return await clientDB.comment.findMany()
  } catch (e) {
    console.error(e);
  }
}

export async function addComment(comment, articleId) {
  try {
    if(comment.fullName.length < 5) {
      return {success: false, message: "Full name must have at least 5 characters"}
    } else if(comment.message.length < 10) {
      return {success: false, message: "The message must have at least 10 characters"}
    }

    await clientDB.comment.create({
      data: {
        fullName: comment.fullName,
        email: comment.email,
        message: comment.message,
        articleId: articleId,
      }
    })

    return {success: true, message: "Comment added successfully."};
  } catch (e) {
    console.error(e);
    return {success: false, message: "Error adding the comment"}
  }
}

export async function deleteComment(commentId) {
  try {
    await clientDB.comment.delete({
      where: {
        id: commentId
      }
    })
  } catch (e) {
    console.error(e);
  }
}