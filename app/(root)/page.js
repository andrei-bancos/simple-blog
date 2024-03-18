import LastArticles from "@/app/(root)/components/lastArticles";
import Statistics from "@/app/globalComponents/statistics";
import Banner from "@/app/(root)/components/banner";
import Newsletter from "@/app/(root)/components/newsletter";

export const metadata = {
  title: "Simple blog"
}

export default function Home() {
  return (
    <main className="flex flex-col gap-[50px] min-h-screen">
      <Banner />
      <LastArticles />
      <Newsletter />
      <Statistics />
    </main>
  );
}
