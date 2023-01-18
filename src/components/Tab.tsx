import React from "react";
import { ImCross } from "react-icons/im";

interface Props {
  filter: string[];
}

const Tab = ({ filter }: Props) => {
  return (
    <div className="tab">
      {filter.map((lang) => (
        <div className="tab--btn">
          {" "}
          <span className="tab--btn__text">{lang}</span>
          <span className="tab--btn__cross">
            <ImCross />
          </span>
        </div>
      ))}
    </div>
  );
};

export default Tab;
