import React, { useState } from "react";
import data from "./data.json";
import { Role } from "./model";
import "./App.css";
import JobList from "./components/JobList";
import Tab from "./components/Tab";

function App() {
  // console.log(data);

  const [jobData, setJobData] = useState<Role[]>(data);
  const [filter, setFilter] = useState<string[]>([]);

  const filterItems = (filterElement: string) => {
    const res = data.filter((role) => {
      return (
        role.languages.includes(filterElement) ||
        role.level === filterElement ||
        role.role === filterElement
      );
    });
    setFilter((prev) => [...prev, filterElement]);
    setJobData(res);

    console.log(res);
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <Tab filter={filter} />
      {jobData.map((role) => (
        <JobList role={role} key={role.id} filterItems={filterItems} />
      ))}
    </div>
  );
}

export default App;
