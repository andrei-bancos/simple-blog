import Link from "next/link";
import Image from "next/image";
import {calculateReadingTime} from "@/until/articleUtils";

export default function Article({data}) {
  return (
    <article className="w-full max-w-[450px] bg-white p-[10px_15px] rounded-[10px] shadow-md">
      <Image
        className="object-cover object-left-top rounded-[10px] mb-[15px] max-h-[250px]"
        src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload/c_scale,w_720/${data.imagePublicId}.webp`}
        width="450"
        height="250"
        alt=""
      />
      <h2 className="text-[20px] font-medium mb-[15px] line-clamp-1">{data.title}</h2>
      <p className="line-clamp-3 mb-[15px]">{data.description}</p>
      <div className="flex flex-wrap gap-[10px] justify-between">
        <div className="font-medium flex gap-[5px]">
          <span>Views: {data.views.length}</span>
          |
          <span>{calculateReadingTime(data.body)} min read</span>
        </div>
        <Link
          className="text-[17px] font-medium underline underline-offset-2"
          href={"/article/" + encodeURIComponent(data.slug)}
        >
          Read more..
        </Link>
      </div>
    </article>
  )
}