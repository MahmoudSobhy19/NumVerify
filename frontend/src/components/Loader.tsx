import React from "react";
import { ImSpinner9 } from "react-icons/im";

interface IProps {
  className?: string;
}

export const Loader: React.FC<IProps> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <ImSpinner9 className={"animate-spin-slow text-5xl text-blue-600"} />
    </div>
  );
};
