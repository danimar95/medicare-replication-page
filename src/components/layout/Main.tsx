import { MainProps } from "../../interfaces";
import Button from "../primitive/Button";

const Main = ({currentStep, handleStepChange, setCurrentStep}: MainProps) => {
  const handleNo = () => {
   window.location.href='https://nationalcareoptions.com/lp/sca-aca';
  }

  return (
    <div className="flex flex-col mx-auto md:pt-4 pt-1 px-4 md:px-0 max-w-5xl text-center container">
      <h1 className="font-black text-center break-normal text-2xl md:text-3xl mx-auto mt-4 mb-2 px-2">
        See If You Qualify Below!
      </h1>
      <img
        className="mt-2 mb-3 mx-auto w-full md:w-3/4"
        alt="seniors"
        src="https://goldenyearsbenefits.com/medicarev3/assets/images/hero.jpg"
      />
      <div className="gap-3 flex flex-col">
        <p className="md:text-xl text-justify">
          Many elderly Americans are quickly updating their 2024 Medicare plans to
          obtain a $2,500 spending card. This card allows them to <b>purchase goods
          at numerous stores</b> nationwide.
        </p>
        <p className="md:text-xl text-justify">
          Unfortunately, a large number of seniors
          might lose the opportunity to secure this card as the registration
          period is drawing to a close. Ensure you're eligible by responding to
          two questions below <b>before it's too late.</b>
        </p>
      </div>
      <div>
        <h3 className="font-bold text-center md:text-4xl text-3xl my-8">{currentStep === 1 ? "What is your age range?" : "Are You On Medicare or Medicaid?"}</h3>
        <div className="flex flex-col gap-6">
          {currentStep === 1 && (
            <Button text="Under 64" onClick={() =>setCurrentStep(3)}/>
          )}
          <Button text={currentStep === 1 ? "64-75" : "Yes"} onClick={() => setCurrentStep(currentStep === 1 ? 2 : 4)}/>
          <Button text={currentStep === 1 ? "76 AND OLDER" : "No"} onClick={currentStep === 1 ? handleStepChange : handleNo}/>
        </div>
      </div>
    </div>
  );
};

export default Main;
