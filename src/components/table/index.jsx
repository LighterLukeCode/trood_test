import React from "react";
import data from "../../data.json";
import Filter from "../FilterStatus";
const Table = () => {
  const [statusFilter, setStatusFilter] = React.useState("All");
  const [typeFilter, setTypeFilter] = React.useState("All");

  return (
    <table>
      <tr>
        <th>
          <Filter setFilterValue={setStatusFilter} filterValue={statusFilter} filterBy={"status"} /> Projects
        </th>
        <th>
          <Filter setFilterValue={setTypeFilter} filterValue={typeFilter} filterBy={"type"} /> Token type
        </th>
        <th>Conditions</th>
        <th>Volume</th>
        <th>ROI</th>
        <th>Free float</th>
        <th>Isurence hedge</th>
        <th></th>
      </tr>
      {data
        .filter(
          token =>
            (statusFilter === "All" || token.status === statusFilter) &&
            (typeFilter === "All" || token.type === typeFilter)
        )
        .map(token => (
          <tr key={token.id}>
            <td>
              {token.status}
              {token.name}
            </td>
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
