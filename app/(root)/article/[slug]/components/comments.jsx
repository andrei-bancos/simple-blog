"use client"

import {useRouter} from "next/navigation";
import {deleteComment} from "@/serverActions/commentsServerAction";

export default function Comments({comments, isAdmin}) {
  const router = useRouter()

  const delComment = async (id) => {
    await deleteComment(id)
    router.refresh()
  }

  return(
    <div>
      <h3 className="text-[20px] font-medium">Comments</h3>
      <div className="flex flex-col gap-[15px] mt-[20px]">
        {
          comments.length ?
          comments.map((comment) => (
            <div className="flex flex-col gap-[15px] p-[10px_15px] bg-white rounded-[10px] shadow-md" key={comment.id}>
              <span className="text-[14px] text-gray-500">{comment.postedAt.toLocaleString()}</span>
              <h4 className="text-[18px] font-medium break-all">
                {comment.fullName}
                <br /> <span className="text-[16px] font-normal">( {comment.email} )</span>
              </h4>
              <p className="text-[16px] break-all">
                {comment.message}
              </p>
              {
                isAdmin &&
                <button
                  className="text-white py-[5px] bg-red-500 rounded-[10px]"
                  onClick={() => delComment(comment.id)}
                >
                  Delete comment
                </button>
              }
            </div>
          ))
          : <p>Not found comments</p>
        }
      </div>
    </div>
  )
}