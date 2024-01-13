import React from 'react';
import NodeLine from './NodeLine';

const data = [
  {
    year: 2022,
    quarter: 'Q4',
    text: 'Test Launch',
  },
  {
    year: 2023,
    quarter: 'Q1',
    text: 'Mainnet Launch',
  },
  {
    year: '',
    quarter: 'Q2',
    text: 'Public Liquidity Pools Governance',
  },
  {
    year: '',
    quarter: 'Q3',
    text: 'TBA',
  },
];

const inlineStyles = {
  background:
    'linear-gradient(263deg, rgba(76, 29, 149, 0.10) 0%, rgba(255, 255, 255, 0.05) 100%)',
};

const ComingSoon = () => {
  return (
    <div
      className=" md:w-[70%] flex flex-col py-6 px-8 justify-center items-start gap-8 text-white mx-auto mb-16"
      style={inlineStyles}
    >
      <div className=" flex w-full justify-between items-end  ">
        <div className="w-[280px] h-28 flex flex-col justify-between gap-4 ">
          <h2 className="text-xl font-bold ">Coming Soon</h2>
          <div className="flex text-md justify-between  w-full">
            <p className=" leading-none opacity-[0.6]">
              The OFF–EX team is locked in to these targets for the unfolding of
              our story and functionality.
            </p>
          </div>
        </div>
        <svg
          width="36"
          height="36"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.8">
            <path
              d="M21 0.875C19.9617 0.875 18.9466 1.18291 18.0833 1.75978C17.2199 2.33666 16.547 3.1566 16.1496 4.11591C15.7523 5.07522 15.6483 6.13082 15.8509 7.14922C16.0535 8.16762 16.5535 9.10308 17.2877 9.83731C18.0219 10.5715 18.9574 11.0716 19.9758 11.2741C20.9942 11.4767 22.0498 11.3727 23.0091 10.9754C23.9684 10.578 24.7883 9.9051 25.3652 9.04174C25.9421 8.17839 26.25 7.16335 26.25 6.125C26.2484 4.73311 25.6947 3.39869 24.7105 2.41448C23.7263 1.43026 22.3919 0.876621 21 0.875ZM22.3099 8.827L20.0156 6.53275V2.625H21.9844V5.71725L23.7029 7.43575L22.3099 8.827Z"
              fill="#ECFDF5"
            />
            <path
              d="M5.25 14V8.75H13.125V7H5.411C5.59077 6.4896 5.92414 6.04737 6.36532 5.73403C6.80651 5.42069 7.33387 5.25161 7.875 5.25H13.125V3.5H7.875C6.7151 3.50139 5.60311 3.96277 4.78294 4.78294C3.96277 5.60311 3.50139 6.7151 3.5 7.875V18.375C3.50325 19.3155 3.81007 20.2297 4.37481 20.9818C4.93954 21.7338 5.732 22.2834 6.63425 22.5487L5.04788 26.25H6.95188L8.45163 22.75H16.0484L17.5481 26.25H19.4521L17.8657 22.5487C18.768 22.2834 19.5605 21.7338 20.1252 20.9818C20.6899 20.2297 20.9967 19.3155 21 18.375V14H5.25ZM19.25 17.5H16.625V19.25H19.089C18.9092 19.7604 18.5759 20.2026 18.1347 20.516C17.6935 20.8293 17.1661 20.9984 16.625 21H7.875C7.33387 20.9984 6.80651 20.8293 6.36532 20.516C5.92414 20.2026 5.59077 19.7604 5.411 19.25H7.875V17.5H5.25V15.75H19.25V17.5Z"
              fill="#ECFDF5"
            />
          </g>
        </svg>
      </div>
      <div className="flex w-full gap-4 text-[#A7F3D0]">
        {data.map((item, index) => (
          <div className="flex-1" key={index}>
            <NodeLine key={index} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComingSoon;
