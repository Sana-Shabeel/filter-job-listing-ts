import React from "react";
import { Role } from "../model";
// import Img from "../images/photosnap.svg";

interface Props {
  role: Role;
}

const JobList = ({ role }: Props) => {
  console.log(role.logo);

  return (
    <div>
      <div className="company-logo">
        <img src={role.logo} alt="company logo" />
        <div className="job-description">
          <div className="company-name">
            <p className="company-name">{role.company}</p>
            <button className="new">NEW!</button>
            <button className="featured">FEATURED</button>
          </div>

          <div>Senior frontend developer</div>
          <div className="job-type">
            <span>1day</span>
            <span className="dot"></span>
            <span>1day</span>
            <span className="dot"></span>
            <span>1day</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobList;
