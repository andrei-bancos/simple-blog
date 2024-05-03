import Link from "next/link";
import Image from "next/image";

export default function SocialMedia({socialMedia}) {
  const facebook = socialMedia.find(sm => sm.name === "socialMedia_facebook")?.value || "/"
  const instagram = socialMedia.find(sm => sm.name === "socialMedia_instagram")?.value || "/"
  const x = socialMedia.find(sm => sm.name === "socialMedia_x")?.value || "/"
  const linkedin = socialMedia.find(sm => sm.name === "socialMedia_linkedin")?.value || "/"

  return(
    <div className="flex flex-col gap-[30px]">
      <div>
        <h2 className="text-[20px] font-medium mb-[5px]">Email:</h2>
        <p className="text-[18px]">contact@website.com</p>
      </div>
      <div>
        <h2 className="text-[20px] font-medium mb-[15px]">Follow us on</h2>
        <div className="flex flex-wrap gap-[15px]">
          <Link href={facebook} target="_blank">
            <Image src="/social-media/facebook.png" width="50" height="50" alt="" priority />
          </Link>
          <Link href={instagram} target="_blank">
            <Image src="/social-media/instagram.png" width="50" height="50" alt="" priority />
          </Link>
          <Link href={x} target="_blank">
            <Image src="/social-media/x.png" width="50" height="50" alt="" priority />
          </Link>
          <Link href={linkedin} target="_blank">
            <Image src="/social-media/linkedin.png" width="50" height="50" alt="" priority />
          </Link>
        </div>
      </div>
    </div>
  )
}