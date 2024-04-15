import {getServerSession} from "next-auth";

export async function isAuthenticateAsAdmin() {
  const session = await getServerSession()
  if(session) {
    const user = session.user
    if(user && user.email === process.env.GOOGLE_ADMIN_EMAIL) {
      return true;
    }
  } else {
    return false
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