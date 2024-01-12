import React from 'react';

const TransactionInfo = ({ data }) => {
  const inlineStyles = {
    background:
      'linear-gradient(243deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.03) 100%)',
    backdropFilter: 'blur(4px)',
  };
  return (
    <div
      className="flex flex-col w-60 py-6 px-8 items-start text-white"
      style={inlineStyles}
    >
      {data.map((data, index) => (
        <div key={index} className="flex flex-col items-start  self-stretch">
          <div
            className={`flex justify-between items-center self-stretch ${
              index === 0 ? 'text-[#E5E7EB]' : 'text-[#9CA3AF]'
            }  text-xs`}
          >
            {console.log(Object.values(data))}
            <div>{Object.keys(data)}</div>
            <div
              className={`${
                index > 1 && Object.values(data)[0] !== '-' && 'text-[#6EE7B7]'
              }`}
            >
              {Object.values(data)}
            </div>
          </div>
        </div>
      ))}
      {/* <div>
        <div></div>
        <div></div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div> */}
    </div>
  );
};

export default TransactionInfo;
