import Navbar from "@/app/globalComponents/navbar";
import Footer from "@/app/globalComponents/footer";

export default function Layout({children}) {
  return(
    <>
      <header className="container mx-auto">
        <Navbar />
      </header>
        {children}
      <Footer />
    </>
  )
}