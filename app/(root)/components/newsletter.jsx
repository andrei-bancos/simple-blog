"use client"
import {useState} from "react";
import {addNewsletter} from "@/serverActions/newsletterServerAction";

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [info, setInfo] = useState("")
  const [disableBtn, setDisableBtn] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    if(/\S+@\S+\.\S+/.test(email)) {
      setDisableBtn(true)
      const res = await addNewsletter(email)
      if(res.success) {
        setInfo(res.info)
        setTimeout(() => {
          setInfo("")
          setDisableBtn(false)
          setEmail("")
        }, 3000)
      } else {
        setInfo(res.info)
        setTimeout(() => {
          setInfo("")
          setDisableBtn(false)
        }, 3000)
      }
    } else {
      setInfo("Email is invalid")
      setTimeout(() => setInfo(""), 3000)
    }
  }

  return (
    <section className="container mx-auto">
      <div className="shadow-md p-[40px_50px] rounded-[10px] bannerBackground">
        <div className="text-white mb-[30px]">
          <h3 className="text-[35px] font-medium">Newsletter</h3>
          <p className="text-[18px]">Join us as we navigate the digital world together!</p>
        </div>
        <form onSubmit={submit} className="flex gap-[15px]">
          <input
            className="max-w-[350px] w-full h-[50px] px-[10px] rounded-[10px] shadow-md"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="text-white h-[50px] px-[10px] bg-red-500 shadow-md rounded-[10px]"
            disabled={disableBtn}
          >
            Subscribe
          </button>
        </form>
        {info && <p className="text-white mt-[15px] self-center">{info}</p>}
      </div>
    </section>
  )
}