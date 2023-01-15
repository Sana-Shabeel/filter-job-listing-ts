import React from "react";
import { Role } from "../model";
import "./JobList.css";
interface Props {
  role: Role;
}

const JobList = ({ role }: Props) => {
  console.log(role.logo);

  return (
    <section className="job-list">
      <div className="container">
        <div className="role">
          <div className="company-logo">
            <img src={role.logo} alt="company logo" />
          </div>
          <div className="role-description">
            <div className="company-description flex">
              <p className="company-name">{role.company}</p>
              <div className="job-status">
                <button className="new">NEW!</button>
                <button className="featured">FEATURED</button>
              </div>
            </div>
            <div className="position">
              <h4 className="position__name">{role.position}</h4>
            </div>
            <div className="job-type flex">
              <span>{role.postedAt}</span>
              <span className="dot"></span>
              <span>{role.contract}</span>
              <span className="dot"></span>
              <span>{role.location}</span>
            </div>
          </div>
        </div>

        <div className="languages"></div>
      </div>
    </section>
  );
};

export default JobList;
