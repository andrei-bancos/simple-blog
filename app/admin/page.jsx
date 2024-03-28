import {getUserConnected, isNotAuthenticate} from "@/app/until/auth";
import {redirect} from "next/navigation";
import Navbar from "@/app/admin/components/navbar";
import Statistics from "@/app/globalComponents/statistics";
import {getArticles} from "@/serverActions/articlesServerAction";
import Footer from "@/app/globalComponents/footer";

export const metadata = {
  title: "Admin panel"
}

export default async function AdminPage() {
  if(await isNotAuthenticate()) return redirect("/api/auth/signin")

  const userConnected = await getUserConnected()
  const articlesCount = (await getArticles()).length

  return(
    <>
      <Navbar user={userConnected} />
      <Statistics totalArticles={articlesCount} />
      <Footer />
    </>
  )
}