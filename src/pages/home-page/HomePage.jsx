import React from 'react';
import { Card } from '../../components/card';
import { ComingSoon } from '../../components/coming-soon';
import Banner from '../../components/banner/Banner';
// import EthIcon from '../../assets/eth.svg';

const HomePage = () => {
  const gradientStyle = {
    background:
      'linear-gradient(196deg, #111827 11.02%, #000 58.44%), linear-gradient(196deg, #111827 11.02%, #18181B 68.27%)',
  };
  const inlineStyles = {
    background:
      'linear-gradient(263deg, rgba(129, 140, 248, 0.10) 0%, rgba(255, 255, 255, 0.05) 100%)',
    backdropFilter: 'blur(4px)',
  };
  return (
    <div
      className=" mx-auto h-auto flex flex-col gap-48 "
      style={gradientStyle}
    >
      <svg
        className="absolute w-screen -mt-36 -z"
        width="1728"
        height="638"
        viewBox="0 0 1728 638"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          d="M0 637L363 421L798 560.5L1011 341L1267.5 377.5L1423.5 176.5L1566.5 196L1728 0"
          stroke="#A7F3D0"
        />
      </svg>
      <div className="flex flex-col gap-3 pt-20">
        <div className="pt-[64px]">
          <Banner />
        </div>
        <div className=" flex flex-col items-center">
          <div className="flex items-start gap-2">
            <div className="flex flex-col md:flex-row gap-1">
              <Card
                title="How It Works"
                text="Our DeFi-native RFQ system gets cryptographically-signed quotes from leading market makers."
              />
              <Card
                title="Result"
                text="Guaranteed price execution. Maximum value on every trade."
              />
            </div>
          </div>
          <div className="flex justify-center w-full md:w-3/4 mx-auto scale-[0.8] -mt-3">
            <div className="flex flex-col md:flex-row gap-2 items-start">
              <Card
                title="How It Works"
                text="Our DeFi-native RFQ system gets cryptographically-signed quotes from leading market makers."
              />
              <Card
                title="How It Works"
                text="Our DeFi-native RFQ system gets cryptographically-signed quotes from leading market makers."
              />
              <Card
                title="How It Works"
                text="Our DeFi-native RFQ system gets cryptographically-signed quotes from leading market makers."
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-rows-2 grid-flow-col gap-4 bg-slate-400 p-4 lg:w-3/5 mx-auto">
        <div className="row-span-2 col-span-2 bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-2">01</h2>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-2">02</h2>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-2">03</h2>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-2">04</h2>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-2">05</h2>
        </div>
      </div> */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-2 mx-auto">
        <div
          className="w-[360px] h-[208px] flex flex-col justify-between items-start self-stretch py-4 px-6 text-white "
          style={inlineStyles}
        >
          <div className="flex flex-col items-start gap-2">
            <span>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.75 19.25C22.127 19.2531 21.5164 19.4242 20.9825 19.7453L15.2373 14L20.9834 8.25388C21.5168 8.57533 22.1272 8.74674 22.75 8.75C23.4422 8.75 24.1189 8.54473 24.6945 8.16015C25.2701 7.77556 25.7187 7.22894 25.9836 6.58939C26.2485 5.94985 26.3178 5.24612 26.1828 4.56719C26.0477 3.88825 25.7144 3.26461 25.2249 2.77513C24.7354 2.28564 24.1118 1.9523 23.4328 1.81725C22.7539 1.6822 22.0502 1.75152 21.4106 2.01642C20.7711 2.28133 20.2244 2.72993 19.8399 3.30551C19.4553 3.88108 19.25 4.55777 19.25 5.25C19.2532 5.87282 19.4246 6.48319 19.7461 7.01663L14 12.7628L8.25475 7.0175C8.57581 6.4836 8.7469 5.87299 8.75 5.25C8.75 4.55777 8.54473 3.88108 8.16015 3.30551C7.77556 2.72993 7.22894 2.28133 6.58939 2.01642C5.94985 1.75152 5.24612 1.6822 4.56719 1.81725C3.88825 1.9523 3.26461 2.28564 2.77513 2.77513C2.28564 3.26461 1.9523 3.88825 1.81725 4.56719C1.6822 5.24612 1.75152 5.94985 2.01642 6.58939C2.28133 7.22894 2.72993 7.77556 3.30551 8.16015C3.88108 8.54473 4.55777 8.75 5.25 8.75C5.87299 8.7469 6.4836 8.57581 7.0175 8.25475L12.7628 14L7.01663 19.7461C6.48318 19.4247 5.87281 19.2533 5.25 19.25C4.55777 19.25 3.88108 19.4553 3.30551 19.8399C2.72993 20.2244 2.28133 20.7711 2.01642 21.4106C1.75152 22.0502 1.6822 22.7539 1.81725 23.4328C1.9523 24.1118 2.28564 24.7354 2.77513 25.2249C3.26461 25.7144 3.88825 26.0477 4.56719 26.1828C5.24612 26.3178 5.94985 26.2485 6.58939 25.9836C7.22894 25.7187 7.77556 25.2701 8.16015 24.6945C8.54473 24.1189 8.75 23.4422 8.75 22.75C8.74678 22.1272 8.57537 21.5168 8.25388 20.9834L14 15.2373L19.7453 20.9825C19.4242 21.5164 19.2531 22.127 19.25 22.75C19.25 23.4422 19.4553 24.1189 19.8399 24.6945C20.2244 25.2701 20.7711 25.7187 21.4106 25.9836C22.0502 26.2485 22.7539 26.3178 23.4328 26.1828C24.1118 26.0477 24.7354 25.7144 25.2249 25.2249C25.7144 24.7354 26.0477 24.1118 26.1828 23.4328C26.3178 22.7539 26.2485 22.0502 25.9836 21.4106C25.7187 20.7711 25.2701 20.2244 24.6945 19.8399C24.1189 19.4553 23.4422 19.25 22.75 19.25ZM22.75 3.5C23.0961 3.5 23.4345 3.60264 23.7223 3.79493C24.01 3.98722 24.2343 4.26053 24.3668 4.58031C24.4992 4.90008 24.5339 5.25194 24.4664 5.59141C24.3989 5.93088 24.2322 6.2427 23.9874 6.48744C23.7427 6.73218 23.4309 6.89885 23.0914 6.96638C22.7519 7.0339 22.4001 6.99924 22.0803 6.86679C21.7605 6.73434 21.4872 6.51004 21.2949 6.22225C21.1026 5.93446 21 5.59612 21 5.25C21.0005 4.78602 21.185 4.34116 21.5131 4.01308C21.8412 3.68499 22.286 3.50046 22.75 3.5ZM5.25 24.5C4.90388 24.5 4.56554 24.3974 4.27775 24.2051C3.98997 24.0128 3.76567 23.7395 3.63321 23.4197C3.50076 23.0999 3.4661 22.7481 3.53363 22.4086C3.60115 22.0691 3.76782 21.7573 4.01256 21.5126C4.25731 21.2678 4.56913 21.1012 4.90859 21.0336C5.24806 20.9661 5.59993 21.0008 5.9197 21.1332C6.23947 21.2657 6.51278 21.49 6.70507 21.7778C6.89737 22.0655 7 22.4039 7 22.75C6.99954 23.214 6.81502 23.6588 6.48693 23.9869C6.15884 24.315 5.71399 24.4995 5.25 24.5Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>Cross-chain Integrations</span>
          </div>
          <span className="opacity-[0.6]">
            Seamlessly swap assets across chains within minutes without going
            through bridges.
          </span>
        </div>
        <div className="w-[360px] flex flex-col justify-center items-start gap-2 text-white">
          <div className="flex items-start gap-2 self-stretch">
            <div
              className="flex flex-col items-start py-4 px-6 gap-4 flex-grow flex-shrink-0 flex-basis-0 "
              style={inlineStyles}
            >
              <div>ICON</div>
              <div>Ethereum</div>
            </div>
            <div
              className="flex flex-col items-start py-4 px-6 gap-4 flex-grow flex-shrink-0 flex-basis-0"
              style={inlineStyles}
            >
              <div>ICON</div>
              <div>Ethereum</div>
            </div>
          </div>
          <div className="flex items-start gap-2 self-stretch ">
            <div
              className="flex flex-col items-start py-4 px-6 gap-4 flex-grow flex-shrink-0 flex-basis-0"
              style={inlineStyles}
            >
              <div>ICON</div>
              <div>Ethereum</div>
            </div>
            <div
              className="flex flex-col items-start py-4 px-6 gap-4 flex-grow flex-shrink-0 flex-basis-0"
              style={inlineStyles}
            >
              <div>ICON</div>
              <div>Ethereum</div>
            </div>
          </div>
        </div>
      </div>
      <ComingSoon />
    </div>
  );
};

export default HomePage;
