import React from "react";

const Table = ({ onSort, filters, onFilter, items }) => {
  const onChangeFilter = e => {
    filters[e.target.dataset.filter] = e.target.value;

    onFilter(filters);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>
            <select data-filter="status" onChange={e => onChangeFilter(e)}>
              <option value="All">All</option>
              <option value="green">green</option>
              <option value="yellow">yellow</option>
              <option value="red">red</option>
            </select>
            <label onClick={() => onSort("name")}>Projects</label>
          </th>
          <th>
            <select data-filter="type" onChange={e => onChangeFilter(e)}>
              <option value="All">All</option>
              <option value="THT">THT</option>
              <option value="THC">THC</option>
              <option value="TRST">TRST</option>
            </select>
            <label onClick={() => onSort("type")}>Token type</label>
          </th>
          <th>
            <label onClick={() => onSort("conditions")}>Conditions</label>
          </th>
          <th>
            <label onClick={() => onSort("volume")}>Volume</label>
          </th>
          <th>
            <label onClick={() => onSort("roi")}>ROI</label>
          </th>
          <th>
            <label onClick={() => onSort("free")}>Free float</label>
          </th>
          <th>
            <label onClick={() => onSort("hedge")}>Insurence hedge</label>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items.map(token => (
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
      </tbody>
    </table>
  );
};

export default Table;
