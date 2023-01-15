import React from "react";
import { Role } from "../model";
import "./JobList.css";
interface Props {
  role: Role;
}

const JobList = ({ role }: Props) => {
  console.log(role.logo);

  return (
    <section className={`job-list ${role.featured ? "featured-job" : ""}`}>
      <div className="container">
        <div className="role">
          <div className="company-logo">
            <img src={role.logo} alt="company logo" />
          </div>
          <div className="role-description">
            <div className="company-description">
              <h4 className="company-name">{role.company}</h4>
              {role.new ? <div className="new">NEW!</div> : null}
              {role.featured ? <div className="featured">FEATURED</div> : null}
            </div>
            <div className="position">
              <h3 className="position__name">{role.position}</h3>
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
