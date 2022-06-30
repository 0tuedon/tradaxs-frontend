import Row from "./Row";
import Bitcoin from "../../assets/icons/Bitcoin";

const Table = () => {
  const header = [
    "advertisers",
    "price(lowest to highest)",
    "limit/available",
    "payment",
    "trade",
  ];

  let data = [
    {
      advertiser: "Rolex",
      price: 0.97,
      available: 498.6,
      limit: [200.0, 483.86],
      payment: "bank transfer",
      trade: "USDT",
    },
    {
      advertiser: "Rolex",
      price: 0.97,
      available: 498.6,
      limit: [200.0, 483.86],
      payment: "bank transfer",
      trade: "USDT",
    },
    {
      advertiser: "Rolex",
      price: 0.97,
      available: 498.6,
      limit: [200.0, 483.86],
      payment: "bank transfer",
      trade: "USDT",
    },
    {
      advertiser: "Rolex",
      price: 0.97,
      available: 498.6,
      limit: [200.0, 483.86],
      payment: "bank transfer",
      trade: "USDT",
    },
    {
      advertiser: "Rolex",
      price: 0.97,
      available: 498.6,
      limit: [200.0, 483.86],
      payment: "bank transfer",
      trade: "USDT",
    },
  ];

  return (
    <table className="w-full border-spacing-5">
      <thead className="w-full">
        <tr>
          {header.map((head, i) => {
            return (
              <th
                key={i}
                className="p-3 text-xs text-left capitalize lg:text-[0.94rem] first:pl-6"
              >
                {head}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="w-full">
        {data.map((data, i) => {
          return <Row data={data} key={i} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;
