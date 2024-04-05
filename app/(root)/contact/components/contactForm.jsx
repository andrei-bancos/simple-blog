"use client"
import {useState} from "react";
import {sendMessage} from "@/serverActions/contactServerAction";

export default function ContactForm() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const [infoMsg, setInfoMsg] = useState("")
  const [disableBtn, setDisableBtn] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setDisableBtn(true
    )
    const data = {
      fullName,
      email,
      subject,
      message
    }

    const res = await sendMessage(data)

    if(res.success) {
      setInfoMsg(res.message)
      setTimeout(() => {
        setInfoMsg("")
        setFullName("")
        setEmail("")
        setSubject("")
        setMessage("")
        setDisableBtn(false)
      }, 3000)
    } else {
      setInfoMsg(res.message)
      setDisableBtn(false)
      setTimeout(() => setInfoMsg(""), 3000)
    }
  }

  return(
    <form onSubmit={submit} className="flex flex-col items-center w-full max-w-[350px] gap-[30px]">
      {infoMsg && <p className="text-[18px] text-center">{infoMsg}</p>}
      <input
        className="max-w-[350px] w-full h-[50px] px-[10px] rounded-[10px] shadow-md"
        type="Text"
        placeholder="Full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
      <input
        className="max-w-[350px] w-full h-[50px] px-[10px] rounded-[10px] shadow-md"
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="max-w-[350px] w-full h-[50px] px-[10px] rounded-[10px] shadow-md"
        type="Text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <textarea
        className="max-w-[350px] w-full h-[150px] p-[10px_15px] rounded-[10px] resize-none shadow-md"
        placeholder="Message.."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button
        className="text-white text-[20px] font-medium w-[150px] h-[50px] rounded-[10px] bg-black shadow-md"
        type="submit"
        disabled={disableBtn}
      >
        {disableBtn ? "Waiting.." : "Send"}
      </button>
    </form>
  )
}