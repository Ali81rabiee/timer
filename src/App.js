import "./App.css";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import TimerOne from "./TimerOne";
import TimerTwo from "./TimerTwo";
import TimerThree from "./TimerThree";

function App() {
  const [timer1, setTimer1] = useState(true);
  const [timer2, setTimer2] = useState(false);
  const [timer3, setTimer3] = useState(false);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  // let time =null

  useEffect(() => {
    const time = timer1
      ? setInterval(() => {
          setCounter1((l) => l + 1);
        }, 1000)
      : timer2
      ? setInterval(() => {
          setCounter2((l) => l + 1);
        }, 1000)
      : timer3 &&
        setInterval(() => {
          setCounter3((l) => l + 1);
        }, 1000);
    // if (timer1) {
    //   time = setInterval(() => {
    //     setCounter1((l) => l + 1);
    //   }, 1000);
    // }
    // if (timer2) {
    //   time = setInterval(() => {
    //     setCounter2((l) => l + 1);
    //   }, 1000);
    // }
    // if (timer3) {
    //   time = setInterval(() => {
    //     setCounter3((l) => l + 1);
    //   }, 1000);
    // }
    return () => clearInterval(time);
  }, [timer1, timer2, timer3]);

  const changeTimer = useCallback((timer1, timer2, timer3) => {
    setTimer1(timer1);
    setTimer2(timer2);
    setTimer3(timer3);
  },[]);

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "1rem",
        }}
      >
        <TimerOne
          counter1={counter1}
          timer1={timer1}
          changeTimer={changeTimer}
        />
        <TimerTwo
          counter2={counter2}
          timer2={timer2}
          changeTimer={changeTimer}
        />
        <TimerThree
          counter3={counter3}
          timer3={timer3}
          changeTimer={changeTimer}
        />
      </div>
    </div>
  );
}

export default App;
