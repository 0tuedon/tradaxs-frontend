import Row from "./Row";

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
      name: <span></span>,
      marketCup: "20B",
      balance: 5000,
      price: "0000.38",
      "7d": +5,
      "30d": -10,
      "1y": +1,
      today: 7.7,
    },
  ];
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-white border-b">
          {header.map((head, i) => {
            return (
              <th
                key={i}
                className="text-sm capitalize py-3 font-medium opacity-70"
              >
                {head}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((data, i) => {
          return <Row data={data} key={i} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;
