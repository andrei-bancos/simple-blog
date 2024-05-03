"use client"

import {useState} from "react";
import {updateSocialMedia} from "@/serverActions/socialMediaServerAction";

export default function SocialMediaSettings({socialMedia}) {
  const [facebook, setFacebook] = useState(
    socialMedia.find(sm => sm.name === "socialMedia_facebook")?.value || ""
  )
  const [instagram, setInstagram] = useState(
    socialMedia.find(sm => sm.name === "socialMedia_instagram")?.value || ""
  )
  const [x, setX] = useState(
    socialMedia.find(sm => sm.name === "socialMedia_x")?.value || ""
  )
  const [linkedin, setLinkedin] = useState(
    socialMedia.find(sm => sm.name === "socialMedia_linkedin")?.value || ""
  )
  const [infoMsg, setInfoMsg] = useState("")

  const submit = async (e) => {
    e.preventDefault()

    const data = {
      facebook,
      instagram,
      x,
      linkedin
    }

    const res = await updateSocialMedia(data)

    if(res.success) {
      setInfoMsg(res.message)
      setTimeout(() => setInfoMsg(""), 3000)
    } else {
      setInfoMsg(res.message)
    }
  }

  return (
    <div className="flex flex-col items-center md:items-start gap-[30px] mt-[30px]">
      <h4 className="text-[20px] font-medium underline underline-offset-4">
        Social media
      </h4>
      <form onSubmit={submit} className="flex flex-col gap-[30px] w-full max-w-[500px]">
        <input
          className="h-[50px] px-[10px] shadow-md rounded-[10px]"
          type="url"
          placeholder="Facebook link"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
          required
        />
        <input
          className="h-[50px] px-[10px] shadow-md rounded-[10px]"
          type="url"
          placeholder="Instagram link"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
          required
        />
        <input
          className="h-[50px] px-[10px] shadow-md rounded-[10px]"
          type="url"
          placeholder="X link"
          value={x}
          onChange={(e) => setX(e.target.value)}
          required
        />
        <input
          className="h-[50px] px-[10px] shadow-md rounded-[10px]"
          type="url"
          placeholder="Linkedin link"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
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
  )
}