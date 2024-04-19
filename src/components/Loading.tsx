import { LoadingProps } from "../interfaces";

const Loading = ({ loadingText, loadingProgress }: LoadingProps) => (
  <div className="flex justify-center items-center flex-col mt-10 mb-10 w-full gap-5">
    <div className="flex justify-center items-center">
      <h4 className="text-3xl">{loadingText}</h4>
    </div>
    <div className="loading-container flex justify-start w-1/2 rounded-full">
      <div
        className={`progress-bar rounded-full h-8 ${loadingProgress >= 75 && "green"}`}
        style={{ width: `${loadingProgress}%` }}
      />
    </div>
  </div>
);

export default Loading;
