import React from "react";

interface Props {
  children?: JSX.Element;
}

// Centered container with maximum with of 6xl
const MainContainer = ({ children }: Props) => {
  return <div className="max-w-6xl mx-auto">{children}</div>;
};

export default MainContainer;
