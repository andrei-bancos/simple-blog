import {getServerSession} from "next-auth";

export async function isNotAuthenticate() {
  const session = await getServerSession()
  if(session) {
    const user = session.user
    return !user || user.email !== process.env.GOOGLE_ADMIN_EMAIL
  } else {
    return true
  }
}

export async function getUserConnected() {
  const session = await getServerSession()
  if(session) {
    return session.user
  } else {
    return {error: "User are not connected"}
  }
}