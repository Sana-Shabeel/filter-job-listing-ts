import React, { useState } from "react";
import data from "./data.json";
import { Role } from "./model";
import "./App.css";
import JobList from "./components/JobList";
import Tab from "./components/Tab";

function App() {
  // console.log(data);

  const [job, setJob] = useState<Role[]>(data);
  const [filter, setFilter] = useState<string[]>([]);

  const handleClick = (lang: string) => {
    const res = data.filter((d) => d.languages.includes(lang));
    setFilter((prev) => [...prev, lang]);
    setJob(res);

    console.log(res);
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <Tab filter={filter} />
      {job.map((role) => (
        <JobList role={role} key={role.id} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default App;
