import Link from "next/link";
import Info from "./Info";
import { socialLinks } from "../../data/static/SocialLinkData";
import UsefulLinks from "./UsefulLinks";
import Support from "./Support";

const Footer = () => {
  return (
    <footer className="w-full p-5 pt-10 mt-24 text-white bg-accent md:px-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-stretch justify-between mb-16 space-y-10 md:flex-row md:space-y-0">
          <Info />
          <UsefulLinks />
          <Support />
        </div>
        <div className="flex flex-wrap items-center justify-between">
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
          <p className="text-sm md:text-base">
            &copy; {new Date().getFullYear().toString()} Tradaxs
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
