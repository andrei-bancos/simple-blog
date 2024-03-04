"use client"
import Image from "next/image";

export default function Footer() {
  const date = new Date;
  const goTop = () => {
    window.scroll({top: 0, behavior: "smooth"})
  }

  return(
    <footer className="container mx-auto my-[50px]">
      <div
        className="flex flex-wrap gap-[30px] justify-center sm:justify-between items-center p-[25px_30px]
                   rounded-[10px] shadow-md bg-white"
      >
        <p className="text-[20px] text-center">Copyright © {date.getFullYear()} Simple Blog</p>
        <Image
          className="cursor-pointer min-w-[50px] shadow-[0_-2px_4px_rgba(0,0,0,.25)_,_0_4px_4px_rgba(0,0,0,.25)]"
          src="/top.png"
          width="50"
          height="50"
          alt=""
          onClick={() => goTop()}
        />
      </div>
    </footer>
  )
}