import React, { useEffect, useState } from "react";

const TimerTwo = ({ counter2, timer2, changeTimer }) => {
  console.log("second");
  return (
    <div>
      <p>{counter2}</p>
      <button
        onClick={() => {
          if (timer2) {
            changeTimer(true, false, false);
          }
        }}
      >
        prev
      </button>
      <button
        onClick={() => {
          if (timer2) {
            changeTimer(false, false, true);
          }
        }}
      >
        next
      </button>
    </div>
  );
};

export default React.memo(TimerTwo);
