"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return(
    <navbar
      className="flex flex-wrap justify-center sm:justify-between items-center my-[25px] p-[25px_30px]
                 rounded-[10px] gap-[30px] shadow-md bg-white"
    >
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
    </navbar>
  )
}