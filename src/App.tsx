import React from "react";
import data from "./data.json";
import "./App.css";
import JobList from "./components/JobList";

function App() {
  // console.log(data);

  return (
    <div className="App">
      <header className="App-header"></header>
      {data.map((role) => (
        <JobList role={role} key={role.id} />
      ))}
    </div>
  );
}

export default App;
