import Navbar from "@/app/globalComponents/navbar";
import Footer from "@/app/globalComponents/footer";
import {isAuthenticateAsAdmin} from "@/serverActions/authServerAction";

export default async function Layout({children}) {
  const isAdmin = await isAuthenticateAsAdmin()

  return(
    <>
      <header className="container mx-auto">
        <Navbar isAdmin={isAdmin} />
      </header>
        {children}
      <Footer />
    </>
  )
}