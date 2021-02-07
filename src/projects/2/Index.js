import React from "react";
import "./style.css";

const Index = () => {
  // useEffect는 화면을 보여주고 변화를 주지만,
  // useLayoutEffect는 변화를 적용 시킨 후 화면을 보여준다.
  React.useLayoutEffect(() => {
    // mount 될 때 실행하는 코드
    const timer = setInterval(() => {
      setDate();
    }, 1000);

    setDate();

    return () => {
      // unmount 될 때 실행하는 코드
      clearInterval(timer);
    };
  }, []);

  const [time, setTime] = React.useState({
    hour: 0,
    minute: 0,
    second: 0,
  });
  // state로 시,분,초의 방향의 값을 계산하여, 상태를 저장한다.
  const setDate = React.useCallback(() => {
    const now = new Date();
    setTime({
      hour: (now.getHours() / 12) * 360 + 90,
      minute: (now.getMinutes() / 60) * 360 + 90,
      second: (now.getSeconds() / 60) * 360 + 90,
    });
  }, []);

  return (
    <div className="clockWrapper">
      <div className="clock">
        <div className="clock-face">
          <div
            className="hand hour-hand"
            style={{ transform: `rotate(${time.hour}deg)` }}
          ></div>
          <div
            className="hand min-hand"
            style={{ transform: `rotate(${time.minute}deg)` }}
          ></div>
          <div
            className="hand second-hand"
            style={{ transform: `rotate(${time.second}deg)` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
