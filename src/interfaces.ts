import { MouseEventHandler } from "react";

export interface ButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export interface MainProps {
  currentStep: number;
  handleStepChange: () => void;
  setCurrentStep: any;
}

export interface LoadingProps {
  loadingText: string;
  loadingProgress: number;
}
