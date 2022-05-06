import React from "react";

function Filters({ list, filterItem }) {
  return (
    <div>
      {list.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              filterItem(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default Filters;
