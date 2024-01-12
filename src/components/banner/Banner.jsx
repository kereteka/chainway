import React from 'react';
import { useAuth } from '../../context/auth-context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const { isLogged, toggleLoginStatus } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="md:w-[800px] flex justify-between items-center mx-auto py-[64px] px-10">
      <div className="flex flex-col gap-12 text-white">
        <h1 className="text-4xl ">
          <span className="text-[#A7F3D0]">Next Generation</span> <br />{' '}
          Decentralized Trading{' '}
        </h1>
        <p className="text-2xl">
          Crypto exchange office <br /> for serious traders
        </p>
      </div>
      <div
        className="rounded-full bg-[#A7F3D0] flex gap-2 items-center py-2 px-4 cursor-pointer z-10 hover:opacity-60"
        onClick={() => navigate('/swap')}
      >
        Launch App
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 15.5H7C6.73478 15.5 6.48043 15.3946 6.29289 15.2071C6.10536 15.0196 6 14.7652 6 14.5V13H7V14.5H13V2.5H7V4H6V2.5C6 2.23478 6.10536 1.98043 6.29289 1.79289C6.48043 1.60536 6.73478 1.5 7 1.5H13C13.2652 1.5 13.5196 1.60536 13.7071 1.79289C13.8946 1.98043 14 2.23478 14 2.5V14.5C14 14.7652 13.8946 15.0196 13.7071 15.2071C13.5196 15.3946 13.2652 15.5 13 15.5Z"
            fill="black"
          />
          <path
            d="M7.295 10.795L9.085 9H2V8H9.085L7.295 6.205L8 5.5L11 8.5L8 11.5L7.295 10.795Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default Banner;
// color: #A7F3D0;
// font-family: PP Mondwest;
// font-size: 48px;
// font-style: normal;
// font-weight: 700;
// line-height: 48px; /* 100% */
