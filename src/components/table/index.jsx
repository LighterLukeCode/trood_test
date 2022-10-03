import React from "react";
import { Link } from "react-router-dom";

const Table = ({ onSort, filters, onFilter, items, onBuy }) => {
  const onChangeFilter = e => {
    filters[e.target.dataset.filter] = e.target.value;

    onFilter(filters);
  };

  const BuyToken = e => {
    const id = e.target.value;
    onBuy(id);
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
              <Link to={`/projects/${token.id}`}>
                {token.status}
                {token.name}
              </Link>
            </td>
            <td>
              <Link to={`/projects/${token.id}`}>{token.type}</Link>
            </td>
            <td>
              <Link to={`/projects/${token.id}`}>{token.conditions.replace("x", "x ").replace(",", ", ")}</Link>
            </td>
            <td>
              <Link to={`/projects/${token.id}`}>
                {new Intl.NumberFormat("us-Us", {
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 0,
                }).format(token.volume)}
              </Link>
            </td>
            <td>
              <Link to={`/projects/${token.id}`}>
                {token.roi}
                {` %`}
              </Link>
            </td>
            <td>
              <Link to={`/projects/${token.id}`}>{token.free}</Link>
            </td>
            <td>
              <Link to={`/projects/${token.id}`}>
                {token.hedge}
                {` %`}
              </Link>
            </td>
            <td>
              <button onClick={e => BuyToken(e)} value={token.id}>
                buy
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
