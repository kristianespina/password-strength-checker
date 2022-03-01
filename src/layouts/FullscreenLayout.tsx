import React from "react";

interface Props {
  children?: JSX.Element;
}

const FullscreenLayout = ({ children }: Props) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center px-4 md:px-0">
      {children}
    </div>
  );
};

export default FullscreenLayout;
