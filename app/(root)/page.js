import LastArticles from "@/app/(root)/components/lastArticles";
import Banner from "@/app/(root)/components/banner";
import Newsletter from "@/app/(root)/components/newsletter";
import {getSeoSettings} from "@/serverActions/seoSettingsServerAction";

export async function generateMetadata(){
  const seoSettings = await getSeoSettings();

  if(seoSettings.length > 0) {
    return {
      title: seoSettings.find(
        setting => setting.name === "website_title"
      ).value,
      description: seoSettings.find(
        setting => setting.name === "website_description"
      ).value,
      keywords: seoSettings.find(
        setting => setting.name === "website_keywords"
      ).value
    }
  }

  return  {
    title: "Simple blog",
    description: "This is my simple blog",
    keyword: "Simple blog, web, application"
  }
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
