import Row from "./Row";

const Table = ({
  type = "",
  header = [],
  data = [],
  handleToggle = () => {},
}) => {
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
          return (
            <Row data={data} key={i} type={type} handleToggle={handleToggle} />
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
