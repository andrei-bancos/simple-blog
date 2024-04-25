import LastArticles from "@/app/(root)/components/lastArticles";
import Banner from "@/app/(root)/components/banner";
import Newsletter from "@/app/(root)/components/newsletter";

export const metadata = {
  title: "Simple blog",
  description: "This is my simple blog",
  keyword: "Simple blog, web, application"
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
