"use client"
import {motion} from "framer-motion";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {deleteMessage} from "@/serverActions/contactServerAction";

export default function Messages({messages}) {
  const router = useRouter()
  const [openMsg, setOpenMsg] = useState()

  const deleteMsg = async (messageId) => {
    if(confirm("You want delete message?")) {
      const res = await deleteMessage(messageId)
      if(res.success) router.refresh()
    }
  }

  return(
    <section className="container mx-auto">
      <h2 className="text-[35px] text-center font-medium mb-[30px]">Messages [ {messages.length} ]</h2>
      <div className="mt-[30px] flex flex-col items-center gap-[30px]">
        {messages.length !== 0 ?
          messages.map((message) => (
            <div
              key={message.id}
              className="flex flex-wrap gap-[10px] justify-between w-full max-w-[800px] p-[15px_30px] h-fit rounded-[10px]
                         bg-white shadow-md"
            >
              <div
                className={`max-w-[550px] ${openMsg !== message.id && "cursor-pointer"}`}
                onClick={() => setOpenMsg(message.id)}
              >
                <h3 className="text-[20px] font-medium">
                  Name: <span className="font-normal">{message.fullName}</span>
                </h3>
                <h4 className="text-[18px] font-medium">
                  Email: <span className="font-normal">{message.email}</span>
                </h4>
                <h4 className="text-[18px] font-medium">
                  Sent date: <span className="font-normal">{message.sentData.toDateString()}</span>
                </h4>
                {
                  openMsg === message.id &&
                  <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 1, type: "spring"}}
                  >
                    <hr className="h-px my-5 bg-gray-600 border-0"/>
                    <h4 className="text-[18px] font-medium">
                      Subject: <span className="font-normal">{message.subject}</span>
                    </h4>
                    <h4 className="text-[18px] font-medium">
                      Message:
                    </h4>
                    <p className="break-all">
                      {message.message}
                    </p>
                  </motion.div>
                }
              </div>
              <button
                className="text-white w-[150px] h-[50px] self-center rounded-[10px] bg-red-500
                           shadow-[0_2px_4px_0_rgba(0,0,0,.35)]"
                onClick={() => deleteMsg(message.id)}
              >
                Delete
              </button>
            </div>
          ))
          : <p className="text-[18px]">No messages found.</p>
        }
      </div>
    </section>
  )
}