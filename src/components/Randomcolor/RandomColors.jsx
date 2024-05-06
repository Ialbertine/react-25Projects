import React from 'react'
import { useState } from 'react'

const RandomColors = () => {
    const [typeOfColor, setTypeOfColor] = useState("hex")
    const [color, setColor] = useState("#eedbd3");

const handleCreateRandomColor = () => {
    
}

  return (
    <div className="h-screen">
      <div className='flex items-center justify-center gap-4 py-4'>
        <button className='py-2 px-6 bg-[#6c3916] text-white text-xl cursor-pointer font-medium mb-4 rounded-lg'>Create HEX Color</button>
        <button className='py-2 px-6 bg-[#6c3916] text-white text-xl cursor-pointer font-medium mb-4 rounded-lg'>Create RGB Color</button>
        <button className='py-2 px-6 bg-[#6c3916] text-white text-xl cursor-pointer font-medium mb-4 rounded-lg'>Generate Random Color</button>
      </div>
    </div>
  );
}

export default RandomColors