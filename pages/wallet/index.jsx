
import React from "react";
import Cookies from "cookies";
import AuthLayout from "../../components/Layouts/AuthLayout";
import Transactions from "../../components/Dashboard/Transactions";
import Link from "next/link";
import { getAllAssets } from "../../services/walletServices";

const Wallet = (props) => {
  return (
    <AuthLayout>
      <section className="w-full max-w-full text-white md:pt-4">
        <Transactions />
        <div className="space-y-[1.375rem] max-w-[35.8rem] mb-24">
          {["btc", "eth", "ltc", "doge", "bnb", "busdt", "usdt"].map(
            (item, i) => {
              return <WalletCard key={i} item={item} />;
            }
          )}
        </div>
      </section>
    </AuthLayout>
  );
};

const WalletCard = ({ item }) => {
  return (
    <Link href={`/wallet/${item}`} passHref>
      <a className="flex items-center justify-between bg-landingBlue rounded-[0.625rem] pt-6 pl-[1.0625rem] pr-[0.75rem]">
        <span className="mb-[0.375rem]">
          <h2 className="text-base uppercase md:text-lg">{item}</h2>
          <p className="text-xs text-[#50E3C2]">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(40000)}
          </p>
        </span>
        <h2 className="text-base md:text-lg">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(25000)}
        </h2>
      </a>
    </Link>
  );
};

export default Wallet;


export async function getServerSideProps(context) {
  // getting Cookies 
  const cookies = new Cookies(context.req,context.res)
  const Router = context.params
  const coinType = Router?.crypto || ""
  const tokenId = cookies.get("accessToken")
  const values = {
    userId:cookies.get("userId") || null,
    coin_type:coinType.toUpperCase()
  }
  // request for userWallet

  const {data,err}  = await getAllAssets(tokenId) 
  console.log(data) 
  return {
    props: {
      assets:data?.data || {}
    }, // will be passed to the page component as props
  }
}
