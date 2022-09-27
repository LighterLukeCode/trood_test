import data from "../../data.json";
const Table = () => {
  return (
    <table>
      <tr>
        <th>All Projects</th>
        <th>All Token type</th>
        <th>Conditions</th>
        <th>Volume</th>
        <th>ROI</th>
        <th>Free float</th>
        <th>Isurence hedge</th>
        <th></th>
      </tr>
      {data.map(token => (
        <tr key={token.id}>
          <td>{token.name}</td>
          <td>{token.type}</td>
          <td>{token.conditions}</td>
          <td>{token.volume}</td>
          <td>{token.roi}</td>
          <td>{token.free}</td>
          <td>{token.hedge}</td>
          <td>
            <button>buy</button>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
