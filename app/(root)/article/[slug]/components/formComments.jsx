"use client"

import {useRef, useState} from "react";
import {addComment} from "@/serverActions/commentsServerAction";
import {useRouter} from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";

export default function FormComments({articleId}) {
  const router = useRouter()

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [infoMsg, setInfoMsg] = useState("")
  const [disableBtn, setDisableBtn] = useState(false)

  const captchaRef = useRef();
  const [captcha, setCaptcha] = useState(null)

  const submit = async (e) => {
    e.preventDefault()

    const res = await addComment({fullName, email, message}, articleId)
    if(res.success) {
      setInfoMsg(res.message)
      setFullName("")
      setEmail("")
      setMessage("")
      captchaRef.current.reset()
      setCaptcha(null)
      setTimeout(() => setInfoMsg(""), 3000)

      router.refresh()
    } else {
      setInfoMsg(res.message)
    }
  }

  return (
    <div>
      <h3 className="text-[20px] font-medium">Add new comment</h3>
      <form onSubmit={submit} className="flex flex-col w-full gap-[15px] mt-[20px]">
        <input
          className="text-[18px] h-[50px] px-[10px] rounded-[10px] shadow-md"
          type="text"
          placeholder="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          className="text-[18px] h-[50px] px-[10px] rounded-[10px] shadow-md"
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          className="text-[18px] h-[130px] resize-none p-[10px] rounded-[10px] shadow-md"
          placeholder="Message.."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        {infoMsg && <p className="text-[18px]">{infoMsg}</p>}
        <ReCAPTCHA
          ref={captchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={setCaptcha}
          size="normal"
          theme="light"
        />
        <button
          className={`text-[20px] text-white h-[50px] bg-black rounded-[10px] shadow-md ${!captcha && "opacity-50"}`}
          type="submit"
          disabled={disableBtn || !captcha}
        >
          {disableBtn ? "Waiting.." : "Add comment"}
        </button>
      </form>
    </div>
  )
}