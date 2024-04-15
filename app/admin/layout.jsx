import Navbar from "@/app/admin/components/navbar";
import Footer from "@/app/globalComponents/footer";
import {getUserConnected, isAuthenticateAsAdmin} from "@/serverActions/authServerAction";
import {redirect} from "next/navigation";

export default async function AdminLayout({children}) {
  if(!await isAuthenticateAsAdmin()) return redirect("/api/auth/signin")
  const userConnected = await getUserConnected()

  return(
    <>
      <header>
        <Navbar user={userConnected} />
      </header>
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}