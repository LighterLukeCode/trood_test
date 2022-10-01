import React from "react";
import Table from "./components/table";
import "./scss/app.scss";
import data from "./data.json";

function App() {
  const [sort, setSort] = React.useState("");
  const [filters, setFilters] = React.useState({ status: "All", type: "All" });
  const [items, setItems] = React.useState(data);

  const onSort = column => {
    if (column === sort && !column.includes("-")) {
      const askItems = items.sort((a, b) =>
        (typeof b[column] === "number") - (typeof a[column] === "number") || a[column] > b[column] ? 1 : -1
      );
      column = "-" + column;
      setItems(askItems);
    } else {
      const descItems = items.sort((a, b) =>
        (typeof a[column] === "number") - (typeof b[column] === "number") || a[column] < b[column] ? 1 : -1
      );
      column = column.replace("-", "");
      setItems(descItems);
    }

    setSort(column);
    console.log(sort);
  };

  return (
    <>
      <div className="container">
        <Table items={data} filters={filters} onFilter={setFilters} sort={sort} onSort={onSort} />
      </div>
    </>
  );
}

export default App;
