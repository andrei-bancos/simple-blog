"use client"
import ShowArticle from "@/app/globalComponents/showArticle";
import {useRef, useState} from "react";
import TextEditor from "@/app/admin/articles/components/textEditor";
import {createArticle} from "@/serverActions/articlesServerAction";

export default function AddForm({categories}) {
  const [articleTitle, setArticleTitle] = useState("Article title")
  const [articleDescription, setArticleDescription] = useState("")
  const [articleKeywords, setArticleKeywords] = useState("blog, web, dev")
  const [articleCategory, setArticleCategory] = useState({id: "0", name: "Category"})
  const [articleBody, setArticleBody] = useState("Write article content")
  const [articlePreviewImage, setArticlePreviewImage] = useState("/article-image.png")
  const [articleImage, setArticleImage] = useState("")
  const [infoMsg, setInfoMsg] = useState("")
  const [disableBtn, setDisableBtn] = useState(false)

  const fileInputRef= useRef(null)

  const data = {
    title: articleTitle.trim(),
    body: articleBody,
    category: articleCategory,
    description: articleDescription,
    keywords: articleKeywords,
    imageUrl: articlePreviewImage,
    articleImage: articleImage
  }

  const onChangeArticleCategory = (e) => {
    const cat = categories.find((cat) => cat.id === e.target.value)
    setArticleCategory(cat)
  }

  const onChangeImage = (e) => {
    const file = e.target.files ? e.target.files[0] : null;

    if(file) {
      if(!file.type.startsWith('image/')) {
        setArticlePreviewImage("/article-image.png")
        fileInputRef.current.value = ''
        return setInfoMsg("Please select an image file")
      } else if(file.size > 10485760) {
        setArticlePreviewImage("/article-image.png")
        fileInputRef.current.value = ''
        return setInfoMsg("File size is too large")
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = function() {
          if(typeof reader.result == "string") {
            setArticleImage(reader.result)
          }
        };
        setArticlePreviewImage(URL.createObjectURL(file))
        setInfoMsg("")
      }
    }
  }

  const submit = async (e) => {
    e.preventDefault()
    setInfoMsg("")
    setDisableBtn(true)

    if(articleCategory.id === "0") {
      setDisableBtn(false)
      return setInfoMsg("Choose a category..")
    }

    const res = await createArticle(data)

    if(res.success) {
      setArticlePreviewImage("/article-image.png")
      setArticleTitle("Article title")
      setArticleDescription("")
      setArticleKeywords("blog, web, dev")
      setArticleCategory({id: "0", name: "Category"})
      fileInputRef.current.value = ""
      setArticleBody("Write article content");
      setInfoMsg(res.message)
      setTimeout(() => setInfoMsg(""), 3000)
    } else {
      setInfoMsg(res.message)
    }

    setDisableBtn(false)
  }

  return(
    <section className="container mx-auto">
      <h2 className="text-[25px] font-medium mb-[20px]">Add article</h2>
      <fieldset className="border border-solid border-gray-300 p-[15px] mb-[30px]">
        <legend className="text-[18px] text-red-500 font-medium px-[10px]">Preview</legend>
        <ShowArticle article={data} />
      </fieldset>
      <form onSubmit={submit} className="flex flex-col w-full max-w-[1000px] gap-[20px]">
        <input
          className="h-[50px] px-[10px] rounded-[10px] shadow-md"
          type="text"
          placeholder="Article title"
          value={articleTitle}
          onChange={(e) => setArticleTitle(e.target.value)}
          required
        />
        <textarea
          className="h-[100px] p-[10px] resize-none rounded-[10px] shadow-md"
          placeholder="Article description"
          value={articleDescription}
          onChange={(e) => setArticleDescription(e.target.value)}
          required
        />
        <input
          className="h-[50px] px-[10px] rounded-[10px] shadow-md"
          type="text"
          placeholder="Keywords ex: blog, web, dev"
          value={articleKeywords}
          onChange={(e) => setArticleKeywords(e.target.value)}
          required
        />
        <select
          className="h-[50px] px-[10px] rounded-[10px] bg-white shadow-md"
          value={articleCategory.id}
          onChange={onChangeArticleCategory}
          required
        >
          <option key="0" value="0">Category</option>
          {
            categories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))
          }
        </select>
        <input
          type="file" accept="image/*"
          onChange={onChangeImage}
          ref={fileInputRef}
          required
        />
        <TextEditor currentHtmlContent={articleBody} setHtmlContent={setArticleBody} />
        {infoMsg && <p className="text-[20px] font-medium">{infoMsg}</p>}
        <button
          className="text-white text-[20px] h-[50px] bg-black rounded-[10px] shadow-md"
          type="submit"
          disabled={disableBtn}
        >
          {disableBtn ? "Waiting.." : "Add"}
        </button>
      </form>
    </section>
  )
}