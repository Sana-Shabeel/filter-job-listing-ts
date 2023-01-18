import React from "react";
import { ImCross } from "react-icons/im";

interface Props {
  filter: string[];
}

const Tab = ({ filter }: Props) => {
  const handleRemove = (e: React.MouseEvent) => {
    console.log(e.currentTarget.parentElement?.classList.toggle("remove"));
  };

  return (
    <div className="tab">
      {filter.map((lang, i) => (
        <div className="tab--btn" key={i}>
          {" "}
          <span className="tab--btn__text">{lang}</span>
          <span className="tab--btn__cross" onClick={(e) => handleRemove(e)}>
            <ImCross />
          </span>
        </div>
      ))}
    </div>
  );
};

export default Tab;
