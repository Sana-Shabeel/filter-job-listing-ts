import React from "react";
import { ImCross } from "react-icons/im";

interface Props {
  filter: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
}

const Tab = ({ filter, setFilter }: Props) => {
  const handleRemove = (e: React.MouseEvent, idx: number) => {
    setFilter((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleRemoveAll = () => {
    setFilter([]);
  };

  return (
    <div className="tab">
      <div className="filters">
        {" "}
        {filter.map((lang, i) => (
          <div className="tab--btn" key={i}>
            {" "}
            <span className="tab--btn__text">{lang}</span>
            <span
              className="tab--btn__cross"
              onClick={(e) => handleRemove(e, i)}
            >
              <ImCross />
            </span>
          </div>
        ))}
      </div>
      <span className="clear" onClick={handleRemoveAll}>
        clear
      </span>
    </div>
  );
};

export default Tab;
