import Logo from "@/assets/logo.svg";
import faceBook from "@/assets/icon-facebook.svg";
import youTube from "@/assets/icon-youtube.svg";
import twitter from "@/assets/icon-twitter.svg";
import instagram from "@/assets/icon-instagram.svg";
import pinterest from "@/assets/icon-pinterest.svg";
import { IconTypes } from "@/shared/types";
import FooterIcons from "./FooterIcons";
import AnchorLink from "react-anchor-link-smooth-scroll";
import CustomBtn from "@/shared/CustomBtn";

const icons: Array<IconTypes> = [
  {
    image: faceBook,
  },
  {
    image: youTube,
  },
  {
    image: twitter,
  },
  {
    image: pinterest,
  },
  {
    image: instagram,
  },
];

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full bg-[#2d314e]">
      <div className="mx-auto w-5/6 py-10">
        <div className="flex flex-wrap items-center justify-center  gap-16 text-sm md:justify-between">
          <div className="flex flex-col items-center  justify-between gap-6">
            <img src={Logo} alt="logo" className="rounded-md bg-white p-2" />
            <div className="flex items-center justify-between">
              {icons.map((item, index) => (
                <FooterIcons key={index} image={item.image} />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-2">
            <AnchorLink
              href="about"
              className="text-white hover:text-Lime-Green"
            >
              About Us
            </AnchorLink>
            <AnchorLink
              className="text-white hover:text-Lime-Green"
              href="blog"
            >
              Blog
            </AnchorLink>
          </div>
          <div className="flex flex-col items-center justify-between gap-2">
            <AnchorLink
              href="Careers"
              className="text-white hover:text-Lime-Green"
            >
              Careers
            </AnchorLink>
            <AnchorLink
              className="text-white hover:text-Lime-Green"
              href="support"
            >
              Support
            </AnchorLink>
            <AnchorLink
              className="text-white hover:text-Lime-Green"
              href="privacypolicy"
            >
              Privacy Policy
            </AnchorLink>
          </div>
          <div className="flex flex-col items-center gap-2  text-end">
            <div className="w-full items-center justify-center md:justify-end">
              <CustomBtn>Request Invite</CustomBtn>
            </div>
            <p className="text-white">&copy; Easybank. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
