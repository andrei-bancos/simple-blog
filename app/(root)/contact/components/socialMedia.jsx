import Link from "next/link";
import Image from "next/image";

export default function SocialMedia() {
  return(
    <div className="flex flex-col gap-[30px]">
      <div>
        <h2 className="text-[20px] font-medium mb-[5px]">Email:</h2>
        <p className="text-[18px]">contact@website.com</p>
      </div>
      <div>
        <h2 className="text-[20px] font-medium mb-[15px]">Follow us on</h2>
        <div className="flex flex-wrap gap-[15px]">
          <Link href="https://facebook.com" target="_blank">
            <Image src="/social-media/facebook.png" width="50" height="50" alt="" />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <Image src="/social-media/instagram.png" width="50" height="50" alt="" />
          </Link>
          <Link href="https://x.com" target="_blank">
            <Image src="/social-media/x.png" width="50" height="50" alt="" />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <Image src="/social-media/linkedin.png" width="50" height="50" alt="" />
          </Link>
        </div>
      </div>
    </div>
  )
}