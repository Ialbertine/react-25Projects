import React, { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected((prevSelected) =>
      prevSelected === getCurrentId ? null : getCurrentId
    );
  };

  const handleMultipleSelection = (getCurrentId) => {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(copyMultiple);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#eedbd3]">
      <div className="w-80">
        <div className="flex items-center justify-center">
          <button
            onClick={() => setEnableMultiSelection(!enableMultiSelection)}
            className="py-2 px-6 bg-[#6c3916] text-white text-xl cursor-pointer font-medium mb-4 rounded-lg"
          >
            {enableMultiSelection ? "Disable" : "Enable"} Multiple Selection
          </button>
        </div>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              className="border bg-[#aa602f] mb-3 py-3 px-10"
            >
              <div
                onClick={() =>
                  enableMultiSelection
                    ? handleMultipleSelection(dataItem.id)
                    : handleSingleSelection(dataItem.id)
                }
                className="flex items-center justify-between text-white cursor-pointer"
              >
                <h3 className="font-bold">{dataItem.question}</h3>
                <span className="text-2xl">+</span>
              </div>
              {enableMultiSelection
                ? multiple.includes(dataItem.id) && (
                    <p className="text-center text-white w-[70%]">
                      {dataItem.answer}
                    </p>
                  )
                : selected === dataItem.id && (
                    <p className="text-center text-white w-[70%]">
                      {dataItem.answer}
                    </p>
                  )}
            </div>
          ))
        ) : (
          <div>No Data Available</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
