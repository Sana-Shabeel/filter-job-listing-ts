import React, { useEffect, useState } from "react";
import data from "./data.json";
import { Role } from "./model";
import "./App.css";
import JobList from "./components/JobList";
import Tab from "./components/Tab";

function App() {
  const [filter, setFilter] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<Role[]>(data);

  const findJob = (array: Role[], filterArr: string[]) => {
    return array.filter((item) => {
      return filterArr.every((filterElement) => {
        return (
          item.languages.includes(filterElement) ||
          item.tools.includes(filterElement) ||
          item.level === filterElement ||
          item.role === filterElement
        );
      });
    });
  };

  useEffect(() => {
    console.log(filter);

    const filteredResults = findJob(data, filter);
    console.log(filteredResults);

    setFilteredData(filteredResults);
  }, [filter]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <Tab filter={filter} />
      {filteredData.map((role) => (
        <JobList
          job={role}
          key={role.id}
          filter={filter}
          setFilter={setFilter}
        />
      ))}
    </div>
  );
}

export default App;
