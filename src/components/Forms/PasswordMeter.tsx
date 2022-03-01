import React from "react";

interface Props {
  score: number;
  maxScore: number;
}
const PasswordMeter = ({ score, maxScore }: Props) => {
  return (
    <div className="flex flex-row gap-x-1.5">
      {[...Array(maxScore + 1)].map((_, i) => (
        <PasswordMeterBar key={i} toggled={i <= score} />
      ))}
    </div>
  );
};

interface IPasswordMeterBar {
  toggled?: boolean;
}
const PasswordMeterBar = ({ toggled }: IPasswordMeterBar) => {
  return (
    <div
      className={
        "h-[11px] rounded-full w-full transition " +
        (toggled ? "bg-primary-500" : "bg-primary-50")
      }
    ></div>
  );
};

export default PasswordMeter;
