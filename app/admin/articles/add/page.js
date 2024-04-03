import AddForm from "@/app/admin/articles/add/components/addForm";
import {getCategories} from "@/serverActions/categoriesServerAction";
import {isNotAuthenticate} from "@/serverActions/authServerAction";
import {redirect} from "next/navigation";

export const metadata = {
  title: "Admin Panel - Add article"
}

export default async function AddArticlePage() {
  if(await isNotAuthenticate()) return redirect("/api/auth/signin")

  const categories = await getCategories()
  return(
    <>
      <AddForm categories={categories} />
    </>
  )
}