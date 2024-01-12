import React, { useEffect } from 'react';
import { LoggedInHeaderLinks, LoggedOutHeaderLinks } from './constants';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth-context/AuthContext';

const Header = () => {
  const { isLogged, toggleLoginStatus } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    !isLogged && navigate('/');
  }, []);

  const gradientStyle = {
    backgroundImage:
      'linear-gradient(263deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.05) 100%)',
  };

  const handleOnClick = () => {
    toggleLoginStatus();
    navigate('/swap');
  };
  return (
    <>
      {isLogged ? (
        <div className="w-full px-4 mt-2 text-white">
          <div
            className="flex justify-between items-center py-4 px-8"
            style={gradientStyle}
          >
            <div className="flex items-center gap-3 mr-auto">
              <span>Offex</span>
              {LoggedInHeaderLinks.map((link, index) => (
                <Link key={index} to={link.path} className=" no-underline">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div
          className=" flex justify-between items-center mx-auto w-full md:w-2/3 py-4 px-8 text-white"
          style={gradientStyle}
        >
          <span className="text-[#D1FAE5]">Offex</span>
          <div className="flex items-center gap-3 ">
            {LoggedOutHeaderLinks.map((link, index) => (
              <Link key={index} to={link.path} className=" no-underline">
                {link.name}
              </Link>
            ))}
            <button
              className=" cursor-pointer rounded-full border border-[#A7F3D0] flex gap-2 items-center py-2 px-4 z-10 hover:opacity-70"
              onClick={handleOnClick}
            >
              Launch App
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.625 16.875H7.875C7.57663 16.875 7.29048 16.7565 7.07951 16.5455C6.86853 16.3345 6.75 16.0484 6.75 15.75V14.0625H7.875V15.75H14.625V2.25H7.875V3.9375H6.75V2.25C6.75 1.95163 6.86853 1.66548 7.07951 1.4545C7.29048 1.24353 7.57663 1.125 7.875 1.125H14.625C14.9234 1.125 15.2095 1.24353 15.4205 1.4545C15.6315 1.66548 15.75 1.95163 15.75 2.25V15.75C15.75 16.0484 15.6315 16.3345 15.4205 16.5455C15.2095 16.7565 14.9234 16.875 14.625 16.875Z"
                  fill="#D1FAE5"
                />
                <path
                  d="M8.20687 11.5819L10.2206 9.5625H2.25V8.4375H10.2206L8.20687 6.41812L9 5.625L12.375 9L9 12.375L8.20687 11.5819Z"
                  fill="#D1FAE5"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

// <nav
//       style={{
//         background:
//           'linear-gradient(90deg, #FFFFFF 10%, transparent 0%, transparent 5%, #FFFFFF 0%)',
//       }}
//       className="container d-flex justify-content-between align-items-center p-2 bg-dark mx-auto "
//     >
//       <span className="fs-3 fw-bold">Offex</span>
//       <div className=" text-white d-flex align-items-center gap-3">
//         {LoggedOutHeaderLinks.map((link, index) => (
//           <Link key={index} to={link.path} className="text-decoration-none">
//             {link.name}
//           </Link>
//         ))}
//         <WalletMultiButton />
//       </div>
//     </nav>
