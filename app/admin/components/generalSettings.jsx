import SeoSettings from "@/app/admin/components/seoSettings";
import SocialMediaSettings from "@/app/admin/components/socialMediaSettings";

export default function GeneralSettings({seoSettings, socialMedia}) {
  return (
    <section className="container mx-auto mt-[50px]">
      <h3 className="text-[35px] text-center font-medium">
        General Settings
      </h3>
      <SeoSettings seoSettings={seoSettings} />
      <SocialMediaSettings socialMedia={socialMedia} />
    </section>
  )
}