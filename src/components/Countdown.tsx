import { useEffect, useState } from "react";

const CountDown = () => {
  const [counter, setCounter] = useState('3:00');

  useEffect(() => {
    const interval = setInterval(() => {
        const [min, sec] = counter.split(':');
        let time = '';

        if (sec === '00') {
            time = (Number(min) - 1) + ':59'
        } else {
            const newSec = Number(sec) - 1;
            time = min + ':' + (newSec < 10 ? '0' : '') + newSec;
        }

        setCounter(time);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  return (
    <div className="border-2 border-red-500 border-dashed w-max px-6 py-2 mx-auto">
      <span className="text-red-500" id="time">
        {counter}
      </span>
    </div>
  );
};

export default CountDown;
