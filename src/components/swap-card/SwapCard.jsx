import React from 'react';

const SwapCard = ({ type, network, balance, networkName, tokenName }) => {
  let color;
  type === 'Buying' ? (color = 'text-[#60A5FA]') : 'text-white';
  const inlineStyles = {
    background:
      'linear-gradient(260deg, rgba(255, 255, 255, 0.10) -0.02%, rgba(255, 255, 255, 0.05) 100.02%)',
  };
  return (
    <div
      className=" flex flex-col items-start justify-between py-4 px-6 gap-4 text-white"
      style={inlineStyles}
    >
      <div className="w-[372px] flex items-end px-4 gap-4">
        <div className="flex-1">{type}</div>
        <div className="flex flex-col items-end opacity-[0.6]">
          <div className="text-xs">Network</div>

          <div className="flex items-center gap-2">
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_62_124)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7 14.5C3.13381 14.5 0 11.3662 0 7.5C0 3.63381 3.13381 0.5 7 0.5C10.8662 0.5 14 3.63381 14 7.5C14 11.3662 10.8662 14.5 7 14.5ZM10.4974 7.59581L7.21787 2.25L3.9375 7.59625L7.21787 9.50069L10.4974 7.59581ZM10.5 8.207L7.21787 10.1106L3.9375 8.20744L7.21787 12.7478L10.5 8.207Z"
                  fill="white"
                />
                <path
                  d="M7.21777 2.25V6.13063L10.4977 7.59625L7.21777 2.25ZM7.21777 10.111V12.7478L10.4999 8.207L7.21777 10.111Z"
                  fill="white"
                  fillOpacity="0.298"
                />
                <path
                  d="M7.21777 9.50069L10.4977 7.59625L7.21777 6.1315V9.50069Z"
                  fill="white"
                  fillOpacity="0.801"
                />
                <path
                  d="M3.9375 7.59625L7.21787 9.50069V6.1315L3.9375 7.59625Z"
                  fill="white"
                  fillOpacity="0.298"
                />
              </g>
              <defs>
                <clipPath id="clip0_62_124">
                  <rect
                    width="14"
                    height="14"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div className={`text-sm ${color}`}>{networkName}</div>
          </div>
        </div>
      </div>
      <div className="w-[372px] flex flex-col items-start border border-white border-opacity-20 gap-4 p-3 px-4">
        <div className="flex justify-between items-center self-stretch text-sm">
          <div className="opacity-[0.6]">
            {balance}
            {' ' + tokenName}
          </div>
          {type === 'Selling' && (
            <div className="text-[#60A5FA]">Select Max</div>
          )}
        </div>
        <div className="flex justify-between items-start self-stretch text-lg">
          <div className="flex ">
            <div>Logo</div>
            <div>ETH</div>
            <div>Dropdown</div>
          </div>

          <div>5</div>
        </div>
      </div>
    </div>
  );
};

export default SwapCard;
