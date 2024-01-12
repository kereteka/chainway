// Layout.jsx
import React, { useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Layout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const gradientStyle = {
    background:
      'linear-gradient(196deg, #111827 11.02%, #000 58.44%), linear-gradient(196deg, #111827 11.02%, #18181B 68.27%)',
  };
  return (
    <div
      className="w-screen h-full flex flex-col justify-between pt-4"
      style={gradientStyle}
    >
      <Header isLogged />
      <main>{children}</main>
      <Footer isLogged />
    </div>
  );
};

export default Layout;
