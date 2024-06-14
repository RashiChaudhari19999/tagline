// App.js
import React, { useState } from "react";
import { Container } from "@mui/material";
import TableComponent from "./Components/TableComponent";
import FilterComponent from "./Components/Filter";
import { data } from "./Json/data";

function App() {
  const [filters, setFilters] = useState({
    city: [],
    category: [],
    type: [],
    active: [],
    search: "",
    address: [],
    rating: [],
  });
  const handleFilterChange = (name, value, isChecked) => {
    setFilters((prevFilters) => {
      const newFilterValues = isChecked
        ? [...prevFilters[name], value]
        : prevFilters[name].filter((item) => item !== value);

      return {
        ...prevFilters,
        [name]: newFilterValues,
      };
    });
  };
  const handleSearchChange = (searchValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      search: searchValue,
    }));
  };

  const jsonData = data.filter((item) => item?.mall) || [];
  const anotherData = data.filter((item) => {
    const matchesCity =
      filters.address.length === 0 || filters.address.includes(item.address);
    const matchesCategory =
      filters.category.length === 0 || filters.category.includes(item.category);
    const matchesType =
      filters.rating.length === 0 || filters.rating.includes(item.rating);
    const matchesSearch =
      filters.search === "" ||
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(filters.search.toLowerCase())
      );

    return matchesCity && matchesCategory && matchesType && matchesSearch;
  });
  const filteredData = data.filter((item) => {
    const matchesCity =
      filters.city.length === 0 || filters.city.includes(item.city);
    const matchesCategory =
      filters.category.length === 0 || filters.category.includes(item.category);
    const matchesType =
      filters.type.length === 0 || filters.type.includes(item.type);
    const matchesActive =
      filters.active.length === 0 || filters.active.includes(item.active);
    const matchesSearch =
      filters.search === "" ||
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(filters.search.toLowerCase())
      );

    return (
      matchesCity &&
      matchesCategory &&
      matchesType &&
      matchesActive &&
      matchesSearch
    );
  });
  return (
    <Container>
      <FilterComponent
        filters={filters}
        data={jsonData.length > 0 ? anotherData : filteredData}
        onFilterChange={handleFilterChange}
        onSearchChange={handleSearchChange}
      />
      <TableComponent data={jsonData.length > 0 ? anotherData : filteredData} />
    </Container>
  );
}

export default App;
