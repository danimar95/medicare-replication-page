import { ButtonProps } from "../../interfaces";

const Button = ({text, onClick}: ButtonProps) => (
  <button  onClick={onClick} className="flex justify-center bg-green-500 hover:bg-green-500 tracking-wide text-white font-bold rounded-2xl w-3/4 mx-auto border-b-2 border-green-500 uppercase shadow-md md:py-6 py-4 md:text-2xl px-6 items-center">
    {text}
  </button>
);

export default Button;
