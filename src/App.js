// App.js
import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import TableComponent from "./Components/TableComponent";
import FilterComponent from "./Components/Filter";
import { data } from "./Json/data";

function App() {
  const [stateData,setStateData]=useState(data)

  const [filters, setFilters] = useState({
    city: [],
    category: [],
    type: [],
    active: [],
    search: "",
    address: [],
    rating: [],
  });
  useEffect(()=>{
    console.log('useeeffefcgt')
    const filterData=stateData.filter((item)=>item.mall)||[]
    const filterDatas=stateData.filter((item)=>item.city)||[]
    if(filterData?.length > 0){
      console.log('if')
      const filterData1= data.filter((item) => {
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
      if(filterData1.length===0){
        console.log('0', 0)
        setStateData([])

      }else{
console.log('1', 1)
        setStateData(filterData1)
      }
    }
    else if(filterDatas.length>0){
      console.log('elseif2')
      const filterData2=data.filter((item) => {
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
      if(filterData2.length===0){
        setStateData(filterData2)

      }else{

        setStateData(filterData2)
      }
      setStateData(filterData2)
    }else if(filterData.length===0 && filterDatas.length === 0){
  const filterData1= stateData.filter((item) => {
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
  setStateData(filterData1);
}
  },[data,filters.city,filters.search,filters.address,filters.category,filters.type,filters.active,filters.rating])
  console.log('stateData', stateData)
 
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
console.log('filters', filters)
 
  return (
    <Container>
      <FilterComponent
        filters={filters}
        datas={stateData}
        onFilterChange={handleFilterChange}
        onSearchChange={handleSearchChange}
      />
      <TableComponent datas={stateData} filters={filters}/>
    </Container>
  );
}

export default App;
