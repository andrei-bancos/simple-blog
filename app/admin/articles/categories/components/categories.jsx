"use client"
import {useState} from "react";
import {createCategory, deleteCategory} from "@/serverActions/categoriesServerAction";
import {useRouter} from "next/navigation";

export default function Categories({categories}) {
  const router = useRouter()
  const [categoryName, setCategoryName] = useState('')
  const [infoMsg, setInfoMsg] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    const res = await createCategory(categoryName)
    if(res.success) {
      setCategoryName("")
      setInfoMsg(res.message)
      setTimeout(() => setInfoMsg(""), 3000)
      router.refresh()
    } else {
      setInfoMsg(res.message)
      setTimeout(() => setInfoMsg(""), 3000)
    }
  }

  const delCategory = async (categoryName) => {
    if(confirm("Are you sure you want to delete this category, all articles associated with it will be deleted?")) {
      await deleteCategory(categoryName)
      router.refresh()
    }
  }

  return (
    <section className="container mx-auto">
      <h2 className="text-[35px] text-center font-medium mb-[30px]">Categories</h2>
      <form onSubmit={submit} className="flex justify-between gap-[15px] max-w-[500px] mx-auto mb-[30px]">
        <input
          className="w-full h-[50px] px-[10px] rounded-[10px] shadow-md"
          type="text"
          placeholder="Add new category.. (ex Security)"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          required
        />
        <button type="submit" className="text-white text-[18px] p-[10px_15px] bg-black rounded-[10px] shadow-md">
          Add
        </button>
      </form>
      {infoMsg && <p className="text-[20px] text-center mb-[30px]">{infoMsg}</p>}
      <div className="flex flex-col items-center gap-[30px]">
        {
          categories.map(category => (
            <div
              className="flex justify-between w-full max-w-[500px] items-center p-[10px_15px] bg-white shadow-md rounded-[10px]"
              key={category.id}
            >
              <h3 className="text-[20px]">
                {category.name} <span>[ {category._count.Article} ]</span>
              </h3>
              <button
                className="text-white text-[18px] p-[10px_15px] bg-red-500 shadow-md rounded-[10px]"
                onClick={() => delCategory(category.name)}
              >
                Delete
              </button>
            </div>
          ))
        }
      </div>
    </section>
  )
}