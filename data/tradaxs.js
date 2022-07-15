import { MdDashboard } from "react-icons/md";
import { FaWallet, FaPeopleArrows } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { GiTrade } from "react-icons/gi";

export const NavigationLinks = [
  {
    name: "Dashboard",
    route: "/dashboard",
    Icon: MdDashboard,
  },
  {
    name: "Wallet",
    route: "/wallet",
    Icon: FaWallet,
  },
  {
    name: "Messages",
    route: "/messages",
    Icon: BsMessenger,
  },
  {
    name: "P2P",
    route: "/p2p",
    Icon: FaPeopleArrows,
  },
  {
    name: "Training",
    route: "/training",
    Icon: GiTrade,
  },
  {
    name: "Account mgt",
    route: "/account-mgt",
    Icon: RiAccountPinCircleFill,
  },
];

export const PublicNavLink = [
  {
    name: "About Us",
    route: "/about-us",
  },
  {
    name: "Blog",
    route: "#blog",
  },
  {
    name: "What We Offer",
    route: "#offer",
  },
  {
    name: "Create Wallet",
    route: "#wallet",
  },
  {
    name: "Login",
    route: "/login",
  },
];

export const StatsLanding = [
  {
    name: "$30B",
    subText: "Digital Currency Exchanged",
    icon: "/icons/chart.svg",
  },
  {
    name: "$30B",
    subText: "Digital Currency Exchanged",
    icon: "/icons/chart.svg",
  },
  {
    name: "$30B",
    subText: "Digital Currency Exchanged",
    icon: "/icons/chart.svg",
  },
];

export const CryptoCardData = [
  {
    logo: "/icons/bitcoin.svg",
    name: "Bitcoin",
    sub: "BTC",
    desc: "Digital currency in which a record of transactions is maintained.",
    type: "mining",
    bg: "bg-landingBlue",
  },
  {
    logo: "/icons/etherum.svg",
    name: "Ethereum",
    sub: "ETH",
    desc: "Blockchain technology to create and run decentralized digital applications.",
    type: "mining",
    bg: false,
  },
  {
    logo: "/icons/litecoin.svg",
    name: "LiteCoin",
    sub: "BTC",
    desc: "Digital currency in which a record of transactions is maintained.",
    type: "mining",
    bg: false,
  },
];

export const FooterQuickLinks = [
  {
    name: "Home",
    route: "#",
  },
  {
    name: "Products",
    route: "#",
  },
  {
    name: "About",
    route: "#",
  },
  {
    name: "Features",
    route: "#",
  },
  {
    name: "Contact",
    route: "#",
  },
];

export const FooterResourceLinks = [
  {
    name: "Download Whitepaper",
    route: "#",
  },
  {
    name: " Smart Token",
    route: "#",
  },
  {
    name: "Blockchain Explorer",
    route: "#",
  },
  {
    name: "Crypto Api",
    route: "#",
  },
  {
    name: "Interest",
    route: "#",
  },
];

export const FooterPaymentLinks = [
  { path: "/icons/visa-square.svg" },
  { path: "/icons/mastercard-square.svg" },
  { path: "/icons/bitcoin-square.svg" },
];
