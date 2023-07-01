import React, { useEffect, useState } from "react";

const TimerThree = ({ counter3, timer3, changeTimer }) => {
  console.log("third");
  return (
    <div>
      <p>{counter3}</p>
      <button
        onClick={() => {
          if (timer3) {
            changeTimer(false, true, false);
          }
        }}
      >
        prev
      </button>
    </div>
  );
};

export default React.memo(TimerThree);
