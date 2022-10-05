import React from "react";
import Table from "./components/table";
import "./scss/app.scss";
import data from "./data.json";
import { Routes, Route } from "react-router-dom";
import Project from "./components/Project";
import { Item } from "./interfaces/Item";
import { Filters } from "./components/table/index";

function App() {
  const [sort, setSort] = React.useState("");
  const [filters, setFilters] = React.useState<Filters>({ status: "All", type: "All" });
  const [items, setItems] = React.useState<Item[]>([]);

  React.useEffect(() => {
    setItems(data);
  }, []);

  const onSort = (column: string) => {
    if (column === sort && !column.includes("-")) {
      const askItems = items.sort((a, b) =>
        //@ts-ignore
        (typeof b[column] === "number") - (typeof a[column] === "number") || a[column] > b[column] ? 1 : -1
      );
      column = "-" + column;
      setItems(askItems);
    } else {
      const descItems = items.sort((a, b) =>
        //@ts-ignore
        (typeof a[column] === "number") - (typeof b[column] === "number") || a[column] < b[column] ? 1 : -1
      );
      column = column.replace("-", "");
      setItems(descItems);
    }

    setSort(column);
    console.log(sort);
  };

  const onFilter = (filters: Filters) => {
    setFilters(filters);

    setItems(
      data.filter(
        token =>
          (filters.status === "All" ? true : token.status === filters.status) &&
          (filters.type === "All" ? true : token.type === filters.type)
      )
    );
  };

  const onBuy = (id: string) => {
    setItems(data.filter(token => token.id === Number(id)));
  };

  return (
    <>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<Table items={items} filters={filters} onFilter={onFilter} onSort={onSort} onBuy={onBuy} />}
          />
          <Route path="/projects/:id" element={<Project items={data} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
