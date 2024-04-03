import AddForm from "@/app/admin/articles/add/components/addForm";
import {getCategories} from "@/serverActions/categoriesServerAction";

export const metadata = {
  title: "Admin Panel - Add article"
}

export default async function AddArticlePage() {
  const categories = await getCategories()
  return(
    <>
      <AddForm categories={categories} />
    </>
  )
}