import "./SortSection.css";
import React from "react";
import { useData } from "../../contexts/DataContext";

export const SortSection = () => {
  const { setSortBy } = useData();
  const sortHandler = (e) => {
    const selectedvalue = e.target.value;
    setSortBy(selectedvalue);
  };
  return (
    <div className="sort-section">
      <h2>Sort By</h2>
      <select
        onChange={(e) => {
          sortHandler(e);
        }}
      >
        <option value="latest">Latest Posts</option>
        <option value="upvoted">Upvoted Posts</option>
      </select>
    </div>
  );
};
