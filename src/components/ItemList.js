/** @format */

import React, { useMemo, useRef, useState } from "react";
import "./ItemList.css";
import { FaSearch, FaPlusCircle } from "react-icons/fa";

function ItemList() {
  const [list, setList] = useState([]);
  const [query, setQuerry] = useState("");
  const inputRef = useRef();

  //useMemo is used as cache, so that filteredlist dont run unless list and query change
  const filteredList = useMemo(() => {
    return list.filter((val) => {
      return val.toLowerCase().includes(query.toLowerCase());
    });
  }, [list, query]);

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
    <div className="filter">
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          type="search"
          onChange={handleSearch}
          placeholder="Type to search"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} placeholder="Type to add"/>
        <button type="submit"><FaPlusCircle id="add-icon"/></button>
      </form>
      <hr></hr>
      <div className="list">
        {filteredList.map((item, i) => {
          return <h3 key={i}>{item}</h3>;
        })}
      </div>
    </div>
  );
}

export default ItemList;
