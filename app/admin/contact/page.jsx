import Messages from "@/app/admin/contact/components/Messages";
import {getMessages} from "@/serverActions/contactServerAction";
import {Suspense} from "react";
import Loading from "@/app/globalComponents/Loading";

export const metadata = {
  title: "Admin panel - Contact"
}

export default async function ContactPage() {
  const messages = await getMessages()
  return(
    <Suspense fallback={<Loading />}>
      <Messages messages={messages} />
    </Suspense>
  )
}