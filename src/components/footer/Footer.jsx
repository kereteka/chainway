import React from 'react';
import {
  loggedInFooterLinks,
  loggedOutFooterLinks,
  socialLinks,
} from './constants';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth-context/AuthContext';

const Footer = () => {
  const { isLogged } = useAuth();
  const inlineStyles = {
    background:
      'linear-gradient(263deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.05) 100%)',
    /* any other styles you want to add */
  };
  return (
    <>
      {isLogged ? (
        <div
          className=" flex w-[98%] h-auto justify-between items-center py-4 px-8 bg-red-200 text-white text-sm"
          style={inlineStyles}
        >
          <div className="flex w-full justify-between items-center gap-3 mr-auto">
            <span>Offex</span>
            <div className="flex gap-4 items-center">
              {loggedInFooterLinks.map((link, index) => (
                <Link key={index} to={link.path} className=" no-underline">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div
          className="flex justify-between items-center py-4 px-8 mx-auto bg-red-200 w-full lg:w-2/3 text-white text-xs "
          style={inlineStyles}
        >
          <div className="flex items-center justify-between gap-3">
            <span>Offex</span>
            {loggedOutFooterLinks.map((link, index) => (
              <Link key={index} to={link.path} className=" no-underline">
                {link.name}
              </Link>
            ))}
          </div>
          <div className=" gap-2 hidden md:flex text-white">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className=" no-underline opacity-[0.6]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
