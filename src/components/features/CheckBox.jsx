// import React from 'react'
import { useState } from "react";

export const CheckBox = ({ userId, onSelect }) => {
  const [isChecked, setIsChecked] = useState(false);
  console.log("true", isChecked);
  
  const handleCheckBox = () => {
    const stateChange = !isChecked;
    console.log("chexhed", stateChange);
    
    setIsChecked(stateChange);
    onSelect(userId, stateChange);
  };

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={handleCheckBox} />
    </div>
  );
};
