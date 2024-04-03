import Navbar from "@/app/admin/components/navbar";
import Footer from "@/app/globalComponents/footer";
import {getUserConnected} from "@/serverActions/authServerAction";

export default async function AdminLayout({children}) {
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