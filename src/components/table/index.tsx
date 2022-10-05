import { Link } from "react-router-dom";
import styles from "./table.module.scss";
import { Item } from "../../interfaces/Item";

export interface Filters {
  [key: string]: string;
}
interface Props {
  onSort: (param: string) => void;
  filters: Filters;
  onFilter: (param: Filters) => void;
  onBuy: (param: string) => void;
  items: Item[];
}
const Table = ({ onSort, filters, onFilter, items, onBuy }: Props) => {
  const onChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.dataset.filter) {
      filters[e.target.dataset.filter] = e.target.value;
    }

    onFilter(filters);
  };

  const BuyToken = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = (e.target as HTMLButtonElement).value;
    onBuy(id);
  };

  const backGround = (token: Item) => {
    if (token.status === "green") {
      return "rgba(187, 247, 193, 0.8)";
    } else if (token.status === "yellow") {
      return "rgba(247, 246, 187, 0.8)";
    } else return "rgba(247, 187, 193, 0.8)";
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
