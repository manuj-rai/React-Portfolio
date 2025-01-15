import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiGithubLine,
  RiPinterestLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/manujrai/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Instagram",
    link: "https://instagram.com/manuj_rai_official",
    Icon: RiInstagramLine,
  },
  {
    name: "YouTube",
    link: "https://youtube.com/@manuj_rai",
    Icon: RiYoutubeLine,
  },
  {
    name: "Facebook",
    link: "https://facebook.com",
    Icon: RiFacebookLine,
  },
  {
    name: "Pinterest",
    link: "https://pinterest.com",
    Icon: RiPinterestLine,
  },
  {
    name: "Github",
    link: "https://github.com/manuj-rai/",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
