import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SwapPage } from './pages/swap';
import { HomePage } from './pages/home-page';
import { Layout } from './layout';
import { AuthProvider } from './context/auth-context/AuthContext';
const data = [
  {
    'Equiv.': '$20,538.75',
  },
  {
    Rate: '17.48',
  },
  {
    Slippage: '0.00%',
  },
  {
    'Gas Estimate': '$1.23',
  },
];
const data2 = [
  {
    'Competitor"s Quote': '',
  },
  {
    Rate: '17.48',
  },
  {
    Slippage: '0.00%',
  },
  {
    'Gas Estimate': '$1.23',
  },
];

const gradientStyle = {
  background:
    'linear-gradient(196deg, #111827 11.02%, #000 58.44%), linear-gradient(196deg, #111827 11.02%, #18181B 68.27%)',
};
function App() {
  return (
    // <div className="w-screen pt-4" style={gradientStyle}>
    //   <Header />

    //   <HomePage />
    //   {/* <SwapPage /> */}
    //   <Footer />
    // </div>
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/swap"
            element={
              <Layout>
                <SwapPage />
              </Layout>
            }
          />
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
