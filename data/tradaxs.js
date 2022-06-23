import { route } from "next/dist/server/router";

export const NavigationLinks = [
  {
    name: "Profile",
    route: "/profile",
    activeLogo: "/icons/profile.svg",
    logo: "/icons/inactive-profile.svg",
  },
  {
    name: "Swap",
    route: "/swap",
    activeLogo: "/icons/swap.svg",
    logo: "/icons/inactive-swap.svg",
  },
  {
    name: "Currency Ex",
    route: "/currency-ex",
    activeLogo: "/icons/currency-ex.svg",
    logo: "/icons/inactive-currency-ex.svg",
  },
  {
    name: "Partner",
    route: "/partner",
    activeLogo: "/icons/partners.svg",
    logo: "/icons/inactive-partner.svg",
  },
  {
    name: "Training",
    route: "/training",
    activeLogo: "/icons/training.svg",
    logo: "/icons/inactive-training.svg",
  },
  {
    name: "Account Mgt",
    route: "/account-mgt",
    activeLogo: "/icons/account-mgt.svg",
    logo: "/icons/inactive-account-mgt.svg",
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
