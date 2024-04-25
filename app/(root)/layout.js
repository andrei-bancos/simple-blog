import Navbar from "@/app/globalComponents/navbar";
import Footer from "@/app/globalComponents/footer";
import {isAuthenticateAsAdmin} from "@/serverActions/authServerAction";
import GoogleAnalytics from "@/app/globalComponents/googleAnalytics";
import MicrosoftClarity from "@/app/globalComponents/microsoftClarity";

export default async function Layout({children}) {
  const isAdmin = await isAuthenticateAsAdmin()

  return(
    <>
      <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
      <MicrosoftClarity ms_clarity_id={process.env.NEXT_PUBLIC_MICROSOFT_CLARITY_ID} />
      <header className="container mx-auto">
        <Navbar isAdmin={isAdmin} />
      </header>
        {children}
      <Footer />
    </>
  )
}