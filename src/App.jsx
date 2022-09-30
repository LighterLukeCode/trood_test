import React from "react";
import Table from "./components/table";
import "./scss/app.scss";

function App() {
  const [sort, setSort] = React.useState("");

  return (
    <>
      <div className="container">
        <Table sort={sort} onSort={setSort} />
      </div>
    </>
  );
}

export default App;
