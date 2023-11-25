import Image from "next/image";
import Link from "next/link";
import LandingLogo from "../../public/LandingLogo.webp";
import { Links } from "@/data/links";

const Footer = () => {
  return (
    <div className="bg-design-darkgreen flex items-center justify-center w-full">
      <div className="w-11/12 flex items-center justify-between">
        <Image
          src={LandingLogo}
          className="h-20 object-contain w-3/12"
          alt="Landing Logo"
        />

        <div className="flex gap-2">
          {Links.map((link, index) => (
            <Link
              href={link.link}
              key={index}
              className="text-white text-3xl hover:!text-design-orange"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
