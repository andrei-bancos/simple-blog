"use client"
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from "react-share";
import {useEffect, useState} from "react";

export default function ShareArticle({article}) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href)
  }, [url]);

  return(
    <div>
      <h3 className="text-[20px] font-medium">Share article</h3>
      <div className="flex gap-[10px] mt-[15px]">
        <FacebookShareButton url={url}>
          <FacebookIcon size="44" round />
        </FacebookShareButton>
        <WhatsappShareButton url={url}>
          <WhatsappIcon size="44" round title={article.title} />
        </WhatsappShareButton>
        <RedditShareButton url={url} title={article.title}>
          <RedditIcon size="44" round />
        </RedditShareButton>
        <LinkedinShareButton url={url} title={article.title}>
          <LinkedinIcon size="44" round />
        </LinkedinShareButton>
        <EmailShareButton url={url} subject={article.title}>
          <EmailIcon size="44" round />
        </EmailShareButton>
      </div>
    </div>
  )
}