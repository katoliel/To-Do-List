import React from "react";

interface HeadingProps {
  heading: string;
}

const Heading: React.FC<HeadingProps> = ({ heading }) => {
  return <h1 className="heading">{heading}</h1>;
};

export default Heading;
