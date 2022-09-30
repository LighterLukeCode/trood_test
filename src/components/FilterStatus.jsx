import React from "react";

const Filter = ({ setFilterValue, filterValue, filterBy }) => {
  const filters = {
    status: ["All", "green", "yellow", "red"],
    type: ["All", "TRST", "THT", "THC", "TRST"],
  };

  //dataRows.filter(el => el.status === currentStatus && el.type === currentType)
  const toggleStatus = e => {
    setFilterValue(e.target.value);
  };

  return (
    <div>
      <select value={filterValue} onChange={toggleStatus}>
        {filters[filterBy].map((status, i) => (
          <option value={status} key={i}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
