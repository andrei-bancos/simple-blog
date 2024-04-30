"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Navbar({isAdmin}) {
  const pathname = usePathname();
  return(
    <nav className="my-[25px] p-[25px_30px] rounded-[10px] shadow-md bg-white">
      {
        isAdmin &&
        <div className="flex flex-wrap justify-center md:justify-between gap-[15px_30px] mb-[25px] p-[15px_25px]
                        backdrop-blur-sm bg-[hsla(0,0%,7%,.8)]
                        shadow-[0_-1px_3px_0_rgba(0,0,0,.35),0_3px_5px_0_rgba(0,0,0,.35)]
                        rounded-[10px]"
        >
          <p className="text-[18px] text-white text-center">You are connected as administrator</p>
          <div className="flex flex-wrap justify-center gap-[10px_15px]">
            <Link className="text-white" href="/admin">[ Admin panel ]</Link>
            <Link className="text-white" href="/api/auth/signout">[ Logout ]</Link>
          </div>
        </div>
      }
      <div className="flex flex-wrap justify-center sm:justify-between items-center gap-[30px]">
        <Link className="text-[25px] font-medium underline underline-offset-8" href="/">Simple Blog</Link>
        <ul className="flex flex-wrap justify-center gap-[5px_25px]">
          <li>
            <Link href="/" className={`text-[20px] font-medium ${pathname === "/" && "text-red-600"}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/articles" className={`text-[20px] font-medium ${pathname === "/articles" && "text-red-600"}`}>
              Articles
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`text-[20px] font-medium ${pathname === "/contact" && "text-red-600"}`}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}