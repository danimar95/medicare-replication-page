import { useEffect, useRef, useState } from "react";
import CountDown from "../Countdown";
import Loading from "../Loading";

const Congratulations = () => {
  const progress = useRef(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      progress.current += 1;
      if (progress.current === 100) {
        clearInterval(interval);
      }
      if (progress.current < 30) {
        setLoadingText("Reviewing your answers...");
      } else if (progress.current < 60) {
        setLoadingText("Matching with best options...");
      } else {
        setLoadingText("Confirming eligibility...");
      }
      setLoadingProgress(progress.current);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center">
      {loadingProgress !== 100 ? (
        <Loading loadingText={loadingText} loadingProgress={loadingProgress} />
      ) : (
        <div className="p-6 border-t-2 border-blue-500 mt-8 bg-gray-300 text-center shadow-xl flex flex-col gap-4 max-w-5xl">
          <h3 className="text-xl md:text-2xl font-bold text-green-500">
            Congratulations!
          </h3>
          <p className="text-xl md:text-2xl font-bold flex justify-center gap-1">
            You Pre-Qualify For
            <span className="text-blue-600">The Healthy Allowance Card!</span>
          </p>
          <p>
            Don't miss out - Speak to an official agent to claim your benefit
            card now.
          </p>
          <a className="flex justify-center" href="tel:+18445413519">
            <button className="pulse capitalize font-bold  bg-green-500 text-white p-5  shadow-2xl md:text-2xl text-base">
              Click to Call +1 (844) 541-3519
            </button>
          </a>
          <span>
            Due to high call volume, your official agent is only waiting for 3
            minutes... then your spot will not be held and will be given to the
            next caller.
          </span>
          <CountDown />
        </div>
      )}
    </div>
  );
};

export default Congratulations;
