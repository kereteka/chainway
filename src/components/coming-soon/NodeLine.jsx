import React from 'react';

const NodeLine = ({ item, index }) => {
  const { year, quarter, text } = item;

  return (
    // <div className="w-[200px]">
    <>
      <div className="mb-3">
        <div className="h-4">{year}</div>
        <div>{quarter}</div>
      </div>
      <div className="before:content-[''] before:border-[#A7F3D0] w-full relative border-b-[0.1px] border-b-[#A7F3D0] before:w-4 before:h-4 before:border-2 before:rounded-full before:absolute before:-bottom-2 before:-left-4 ml-3"></div>
      <div className="mt-3">{text}</div>
    </>
    // </div>
  );
};

export default NodeLine;
