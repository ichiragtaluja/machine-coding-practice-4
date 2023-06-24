import React, { createContext, useContext } from "react";

const DataContext = createContext();
const data = "Hi";
export const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
