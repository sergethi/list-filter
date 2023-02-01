/** @format */

import React, { useMemo, useRef, useState } from "react";
import "./ItemList.css";

function ItemList() {
  const [list, setList] = useState([]);
  const [query, setQuerry] = useState("");
  const inputRef = useRef();

  //useMemo is used as cache, so that filteredlist dont run unless list and query change
  const filteredList = useMemo(() => {
    return list.filter(val => {
        return val.toLowerCase().includes(query.toLowerCase());
    })
  },[list, query]) 
    
    
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = inputRef.current.value;
    if (value === "") return;
    setList((prev) => {
      return [...prev, value];
    });
    console.log("item is", list);
    inputRef.current.value = "";
  };
  const handleSearch = (event) => {
    setQuerry(event.target.value);
  };
  return (
    <div>
      <h1>List of items</h1>
      <label>
        Search
      </label>
      <input type="search" onChange={handleSearch} />
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">add</button>
      </form>
      <div className="list">
        {filteredList.map((item, i) => {
          return <h2 key={i}>{item}</h2>;
        })}
      </div>
    </div>
  );
}

export default ItemList;
