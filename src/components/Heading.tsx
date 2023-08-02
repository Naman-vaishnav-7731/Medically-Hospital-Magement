import React, { FC } from "react";

interface HeadingProps {
  headingTitle: string;
}

const Heading: FC<HeadingProps> = ({ headingTitle }) => {
  return (
    <div className="heading-box w-full p-4">
      <span className="font-Helvetica text-3xl font-bold">{headingTitle}</span>
    </div>
  );
};

export default Heading;
