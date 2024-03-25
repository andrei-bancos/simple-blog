import LastArticles from "@/app/(root)/components/lastArticles";
import Statistics from "@/app/globalComponents/statistics";
import Banner from "@/app/(root)/components/banner";
import Newsletter from "@/app/(root)/components/newsletter";
import {getArticles} from "@/serverActions/articlesServerAction";

export const metadata = {
  title: "Simple blog"
}

export default async function Home() {
  const articlesCount = (await getArticles()).length
  return (
    <main className="flex flex-col gap-[50px] min-h-screen">
      <Banner />
      <LastArticles />
      <Newsletter />
      <Statistics totalArticles={articlesCount} />
    </main>
  );
}
