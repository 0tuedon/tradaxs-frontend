import Link from "next/link";
import Info from "./Info";
import { socialLinks } from "../../data/static/SocialLinkData";
import UsefulLinks from "./UsefulLinks";
import Support from "./Support";

const Footer = () => {
  return (
    <footer className=" bg-accent mt-24 p-5 pt-10 md:px-10 text-white">
      <div className="flex justify-between items-stretch flex-col md:flex-row space-y-10 md:space-y-0 mb-16">
        <Info />
        <UsefulLinks />
        <Support />
      </div>
      <div className="flex justify-between items-center flex-wrap space-x-10">
        <span className="space-x-4">
          {socialLinks.map((social, index) => {
            let Icon = social.icon;
            return (
              <Link key={index} href={social.link} passHref target="_blank">
                <a className="inline-block">
                  <Icon className="w-5 h-5 text-white" />
                </a>
              </Link>
            );
          })}
        </span>
        <p>&copy; {new Date().getFullYear().toString()} Tradaxs</p>
      </div>
    </footer>
  );
};

export default Footer;
