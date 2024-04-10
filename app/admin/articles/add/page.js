import {getCategories} from "@/serverActions/categoriesServerAction";
import {isNotAuthenticate} from "@/serverActions/authServerAction";
import {redirect} from "next/navigation";
import ArticleForm from "@/app/admin/articles/components/articleForm";

export const metadata = {
  title: "Admin Panel - Add article"
}

export default async function AddArticlePage() {
  if(await isNotAuthenticate()) return redirect("/api/auth/signin")

  const categories = await getCategories()
  return(
    <section className="container mx-auto">
      <ArticleForm categories={categories} />
    </section>
  )
}