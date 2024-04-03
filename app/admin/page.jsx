import {isNotAuthenticate} from "@/serverActions/authServerAction";
import {redirect} from "next/navigation";
import Statistics from "@/app/globalComponents/statistics";
import {getArticles} from "@/serverActions/articlesServerAction";

export const metadata = {
  title: "Admin panel"
}

export default async function AdminPage() {
  if(await isNotAuthenticate()) return redirect("/api/auth/signin")

  const articlesCount = (await getArticles()).length

  return(
    <>
      <Statistics totalArticles={articlesCount} />
    </>
  )
}