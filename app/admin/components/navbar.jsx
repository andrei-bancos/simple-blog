"use client"
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/navigation";

export default function Navbar({user}) {
  const router = useRouter()
  return(
    <nav className="container mx-auto my-[50px]">
      <div className="flex flex-col p-[25px_30px] gap-[30px] bg-white rounded-[10px] shadow-md">
        <div className="flex justify-center sm:justify-between flex-wrap gap-[30px] items-center">
          <Link className="text-[25px] font-medium underline underline-offset-8" href="/">Simple Blog</Link>
          <div className="flex flex-wrap justify-center gap-[30px] items-center">
            <Image src={user.image} width="56" height="56" alt="" className="shadow-md rounded-[10px]" />
            <div>
              <h3 className="text-[18px] font-medium">{user.name}</h3>
              <p className="break-all">{user.email}</p>
            </div>
            <button
              className="text-white p-[10px_15px] bg-black rounded-[10px] shadow-md"
              onClick={() => router.push("/api/auth/signout")}
            >
              Logout
            </button>
          </div>
        </div>
        <hr className="h-[2px] border-none bg-black opacity-[15%]"/>
        <div className="flex justify-center sm:justify-between flex-wrap items-center gap-[30px]">
          <h1 className="text-[25px] font-medium">Admin panel</h1>
          <ul className="flex flex-wrap justify-center gap-[10px_30px]">
            <li className="text-[20px] font-medium">
              <Link href="/admin">Home</Link>
            </li>
            <li className="text-[20px] font-medium">
              <Link href="/admin/articles">Articles</Link>
            </li>
            <li className="text-[20px] font-medium">
              <Link href="/admin/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}