import LastArticles from "@/app/(root)/components/lastArticles";
import Banner from "@/app/(root)/components/banner";
import Newsletter from "@/app/(root)/components/newsletter";

export const metadata = {
  title: "Simple blog"
}

export default async function Home() {
  return (
    <main className="flex flex-col gap-[50px] min-h-screen">
      <Banner />
      <LastArticles />
      <Newsletter />
    </main>
  );
}
