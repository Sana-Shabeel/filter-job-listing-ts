import React from "react";
import { Role } from "../model";
import "./JobList.css";
interface Props {
  job: Role;
  filter: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
}

const JobList = ({ job, filter, setFilter }: Props) => {
  const addItemsToFilter = (item: string) => {
    // check if the item is already in the list
    const itemExists = [...filter].includes(item);
    if (itemExists) return;

    // if the item is not in the list add to the list
    setFilter((prevData) => {
      return [...prevData, item];
    });
    console.log("activated addItemsToFilter func ");
  };

  const {
    company,
    logo,
    new: isNew,
    featured: isFeatured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;
  return (
    <section className={`job-list ${isFeatured ? "featured-job" : ""}`}>
      <div className="container">
        <div className="role">
          <div className="company-logo">
            <img src={logo} alt="company logo" />
          </div>
          <div className="role-description">
            <div className="company-description">
              <h4 className="company-name">{company}</h4>
              {isNew ? <div className="new">NEW!</div> : null}
              {isFeatured ? <div className="featured">FEATURED</div> : null}
            </div>
            <div className="position">
              <h3 className="position__name">{position}</h3>
            </div>
            <div className="job-type flex">
              <span>{postedAt}</span>
              <span className="dot"></span>
              <span>{contract}</span>
              <span className="dot"></span>
              <span>{location}</span>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="tags">
          <div className="tag" onClick={() => addItemsToFilter(role)}>
            {role}
          </div>
          <div className="tag" onClick={() => addItemsToFilter(level)}>
            {level}
          </div>
          {languages.map((language, idx) => (
            <div
              className="tag"
              key={idx}
              onClick={() => addItemsToFilter(language)}
            >
              {language}
            </div>
          ))}
          {tools.map((tool, idx) => (
            <div
              className="tag"
              key={idx}
              onClick={() => addItemsToFilter(tool)}
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobList;
