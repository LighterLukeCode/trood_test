import React from "react";
import { Link } from "react-router-dom";
import styles from "./table.module.scss";

const Table = ({ onSort, filters, onFilter, items, onBuy }) => {
  const onChangeFilter = e => {
    filters[e.target.dataset.filter] = e.target.value;

    onFilter(filters);
  };

  const BuyToken = e => {
    const id = e.target.value;
    onBuy(id);
  };

  const backGround = token => {
    let backColor;
    if (token.status === "green") {
      backColor = "rgba(187, 247, 193, 0.8)";
      console.log(backColor);
      return backColor;
    } else if (token.status === "yellow") {
      backColor = "rgba(247, 246, 187, 0.8)";
      return backColor;
    } else backColor = "rgba(247, 187, 193, 0.8)";
    return backColor;
  };

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          <th className={styles.th}>
            <select data-filter="status" onChange={e => onChangeFilter(e)}>
              <option value="All">All</option>
              <option value="green">green</option>
              <option value="yellow">yellow</option>
              <option value="red">red</option>
            </select>
            <label onClick={() => onSort("name")}>Projects</label>
          </th>
          <th className={styles.th}>
            <select data-filter="type" onChange={e => onChangeFilter(e)}>
              <option value="All">All</option>
              <option value="THT">THT</option>
              <option value="THC">THC</option>
              <option value="TRST">TRST</option>
            </select>
            <label onClick={() => onSort("type")}>Token type</label>
          </th>
          <th className={styles.th}>
            <label onClick={() => onSort("conditions")}>Conditions</label>
          </th>
          <th className={styles.th}>
            <label onClick={() => onSort("volume")}>Volume</label>
          </th>
          <th className={styles.th}>
            <label onClick={() => onSort("roi")}>ROI</label>
          </th>
          <th className={styles.th}>
            <label onClick={() => onSort("free")}>Free float</label>
          </th>
          <th className={styles.th}>
            <label onClick={() => onSort("hedge")}>Insurence hedge</label>
          </th>
          <th className={styles.th}></th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {items.map(token => (
          <tr className={styles.tr} key={token.id}>
            <td style={{ backgroundColor: backGround(token) }} className={styles.td}>
              <Link to={`/projects/${token.id}`}>
                <div className={`${styles.sphere} ${styles[token.status]}`}></div>
                {token.name}
              </Link>
            </td>
            <td style={{ backgroundColor: backGround(token) }} className={styles.td}>
              <Link to={`/projects/${token.id}`}>{token.type}</Link>
            </td>
            <td style={{ backgroundColor: backGround(token) }} className={styles.td}>
              <Link to={`/projects/${token.id}`}>{token.conditions.replace("x", "x ").replace(",", ", ")}</Link>
            </td>
            <td style={{ backgroundColor: backGround(token) }} className={styles.td}>
              <Link to={`/projects/${token.id}`}>
                {new Intl.NumberFormat("us-Us", {
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 0,
                }).format(token.volume)}
              </Link>
            </td>
            <td style={{ backgroundColor: backGround(token) }} className={styles.td}>
              <Link to={`/projects/${token.id}`}>
                {token.roi}
                {` %`}
              </Link>
            </td>
            <td style={{ backgroundColor: backGround(token) }} className={styles.td}>
              <Link to={`/projects/${token.id}`}>{token.free}</Link>
            </td>
            <td style={{ backgroundColor: backGround(token) }} className={styles.td}>
              <Link to={`/projects/${token.id}`}>
                {token.hedge}
                {` %`}
              </Link>
            </td>
            <td style={{ backgroundColor: backGround(token) }} className={styles.td}>
              <button className={styles.button} onClick={e => BuyToken(e)} value={token.id}>
                Buy
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
