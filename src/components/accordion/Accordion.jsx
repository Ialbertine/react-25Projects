// single selection means you can select one accordion at a time
// ansd again multiple selection

import React from 'react'
import { useState } from 'react'
import data from './data'

const Accordion = () => {
    const [selected, setSelected] = useState(null)

    const handleSingleSelection = (getCurrentId) => {
        if(selected === getCurrentId){
            return setSelected(null)
        }else{
            setSelected(getCurrentId);
        }
        {/*setSelected(getCurrentId === selected ? null : getCurrentId)*/}
        
    }
   console.log(selected)
  return (
    <div className="flex items-center justify-center h-[100vh] w-full">
      <div className="w-[400px]">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="border bg-[#aa602f] h-[50%] mb-3 py-3 px-10">
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="flex items-center justify-between text-white cursor-pointer"
              >
                <h3 className="font-bold ">{dataItem.question}</h3>
                <span className="text-2xl">+</span>
              </div>
              {selected === dataItem.id ? (
                <p className="text-center text-white w-[70%]">
                  {dataItem.answer}
                </p>
              ) : null}
            </div>
          ))
        ) : (
          <div>No Data Available</div>
        )}
      </div>
    </div>
  );
}

export default Accordion