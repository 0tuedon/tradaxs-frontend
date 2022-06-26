import Row from "./Row";
import Bitcoin from "../../assets/icons/Bitcoin";

const Table = () => {
  const header = [
    "name",
    "marketcup",
    "balance",
    "price",
    "7D",
    "30D",
    "1Y",
    "today",
  ];

  let data = [
    {
      name: (
        <span className="space-x-2 flex items-center">
          <Bitcoin className="w-6 h-6" />
          <h2>Bitcoin</h2>
        </span>
      ),
      marketCup: "20B",
      balance: 5000,
      price: "0000.38",
      "7d": "+5",
      "30d": "-10",
      "1y": "+1",
      today: "+7.7",
    },
    {
      name: (
        <span className="space-x-2 flex items-center">
          <Bitcoin className="w-6 h-6" />
          <h2>Bitcoin</h2>
        </span>
      ),
      marketCup: "20B",
      balance: 5000,
      price: "0000.38",
      "7d": "+5",
      "30d": "-10",
      "1y": "+1",
      today: "+7.7",
    },
    {
      name: (
        <span className="space-x-2 flex items-center">
          <Bitcoin className="w-6 h-6" />
          <h2>Bitcoin</h2>
        </span>
      ),
      marketCup: "20B",
      balance: 5000,
      price: "0000.38",
      "7d": "+5",
      "30d": "-10",
      "1y": "+1",
      today: "+7.7",
    },
    {
      name: (
        <span className="space-x-2 flex items-center">
          <Bitcoin className="w-6 h-6" />
          <h2>Bitcoin</h2>
        </span>
      ),
      marketCup: "20B",
      balance: 5000,
      price: "0000.38",
      "7d": "+5",
      "30d": "-10",
      "1y": "+1",
      today: "+7.7",
    },
    {
      name: (
        <span className="space-x-2 flex items-center">
          <Bitcoin className="w-6 h-6" />
          <h2>Bitcoin</h2>
        </span>
      ),
      marketCup: "20B",
      balance: 5000,
      price: "0000.38",
      "7d": "+5",
      "30d": "-10",
      "1y": "+1",
      today: "+7.7",
    },
    {
      name: (
        <span className="space-x-2 flex items-center">
          <Bitcoin className="w-6 h-6" />
          <h2>Bitcoin</h2>
        </span>
      ),
      marketCup: "20B",
      balance: 5000,
      price: "0000.38",
      "7d": "+5",
      "30d": "-10",
      "1y": "+1",
      today: "+7.7",
    },
  ];
  return (
    <table className="w-full bg-white">
      <thead className="w-full">
        <tr className=" border-b">
          {header.map((head, i) => {
            return (
              <th
                key={i}
                className="text-xs capitalize text-left py-3 font-medium opacity-70  first:pl-3"
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
