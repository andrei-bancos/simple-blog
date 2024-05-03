"use client";

import Link from "next/link";
import {useState} from "react";
import {updateSeoSettings} from "@/serverActions/seoSettingsServerAction";

export default function SeoSettings({seoSettings}) {
  const [title, setTitle] = useState(
    seoSettings.find(stg => stg.name === "website_title")?.value || "Simple blog"
  )
  const [description, setDescription] = useState(
    seoSettings.find(stg => stg.name === "website_description")?.value || "This is my simple blog"
  );
  const [keywords, setKeywords] = useState(
    seoSettings.find(stg => stg.name === "website_keywords")?.value || "Simple blog, web, application"
  );
  const [infoMsg, setInfoMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault()

    const data = {
      title,
      description,
      keywords
    }

    const res = await updateSeoSettings(data)

    if(res.success === true) {
      setInfoMsg(res.message)
      setTimeout(() => setInfoMsg(""), 3000)
    } else {
      setInfoMsg(res.message)
    }
  }

  return (
    <div className="flex flex-col items-center md:items-start gap-[30px] mt-[30px]">
      <h4 className="text-[20px] font-medium underline underline-offset-4">
        SEO
      </h4>
      <div className="flex flex-wrap justify-center md:justify-start gap-[50px] md:w-full">
        <fieldset className="flex flex-col w-full max-w-[500px] items-center border h-fit border-solid border-gray-300 p-[15px]">
          <legend className="text-[18px] text-red-500 px-[10px]">Preview</legend>
          <div className="w-full bg-white rounded-[10px] p-[15px_20px]">
            <Link className="text-[20px] text-blue-900" href="/" target="_blank">{title}</Link>
            <p className="line-clamp-2">
              {description}
            </p>
          </div>
        </fieldset>
        <form onSubmit={submit} className="flex flex-col w-full max-w-[500px] gap-[30px]">
          <input
            className="h-[50px] px-[10px] shadow-md rounded-[10px]"
            type="text"
            placeholder="Website title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            className="h-[50px] px-[10px] shadow-md rounded-[10px]"
            type="text"
            placeholder="Website keywords"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            required
          />
          <textarea
            className="h-[150px] p-[10px] resize-none shadow-md rounded-[10px]"
            placeholder="Website description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          {infoMsg && <p>{infoMsg}</p>}
          <button
            className="text-white text-[20px] font-medium h-[50px] bg-black shadow-md rounded-[10px]"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  )
}