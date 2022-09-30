import React from "react";
import data from "../../data.json";
import Filter from "../FilterStatus";
const Table = ({ sort, onSort }) => {
  const [statusFilter, setStatusFilter] = React.useState("All");
  const [typeFilter, setTypeFilter] = React.useState("All");
  const [sortField, setSortField] = React.useState("");

  const onClickSort = e => {
    let name = e.target.dataset.sort;

    if (name === sort && !name.includes("-")) {
      name = "-" + name;
    } else {
      name = name.replace("-", "");
    }

    onSort(name);
  };

  return (
    <table>
      <tr onClick={onClickSort}>
        <th data-sort="name">
          <Filter setFilterValue={setStatusFilter} filterValue={statusFilter} filterBy={"status"} /> Projects
        </th>
        <th data-sort="type">
          <Filter setFilterValue={setTypeFilter} filterValue={typeFilter} filterBy={"type"} /> Token type
        </th>
        <th data-sort="conditions">Conditions</th>
        <th data-sort="volume">Volume</th>
        <th data-sort="roi">ROI</th>
        <th data-sort="free">Free float</th>
        <th data-sort="hedge">Isurence hedge</th>
        <th></th>
      </tr>
      {data
        .filter(
          token =>
            (statusFilter === "All" || token.status === statusFilter) &&
            (typeFilter === "All" || token.type === typeFilter)
        )
        .sort((a, b) => a[sortField] - b[sortField])
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
