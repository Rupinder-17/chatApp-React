// import React from 'react'
import { useState } from "react";

export const CheckBox = ({ userId, onSelect }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBox = () => {
    const stateChange = !isChecked;

    setIsChecked(stateChange);
    onSelect(userId, stateChange);
  };

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={handleCheckBox} />
    </div>
  );
};
