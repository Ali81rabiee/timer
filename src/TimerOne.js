import React, { useEffect, useState } from "react";

const TimerOne = ({ counter1, timer1, changeTimer }) => {
  console.log("first");
  return (
    <div>
      <p>{counter1}</p>
      <button
        onClick={() => {
          if (timer1) {
            changeTimer(false, true);
          }
        }}
      >
        next
      </button>
    </div>
  );
};

export default React.memo(TimerOne);
