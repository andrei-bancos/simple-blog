import Link from "next/link";
import Image from "next/image";

export default function Article({data}) {
  return (
    <article className="w-full max-w-[330px] bg-white p-[10px_15px] rounded-[10px] shadow-md">
      <Image className="rounded-[10px] mb-[15px]" src="/article-image.png" width="320" height="220" alt="" />
      <h2 className="text-[20px] font-medium mb-[15px] line-clamp-1">{data.title}</h2>
      <p className="line-clamp-2 mb-[15px]">{data.body}</p>
      <Link className="text-[17px] font-medium underline underline-offset-2 float-right" href="/">Read more..</Link>
    </article>
  )
}