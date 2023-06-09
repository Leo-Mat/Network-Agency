import React from 'react';
import { heroPurple, arrows, eye } from '../assets';
import CustomButton from './CustomButton';

const Hero = () => {
  return (
    <div className="my-6 max-w-7xl relative">
      {/* hero main title */}
      <div className="z-50 font-openSans text-5xl font-extrabold text-mainBlue md:flex md:justify-end lg:text-8xl">
        <h1 className="block md:inline-block">
          We develope the{' '}
          <img
            src={eye}
            alt="eye-like image"
            className="inline-block w-10 align-baseline lg:w-24"
          />{' '}
          eye{' '}
          <span>
            {' '}
            <img
              src={arrows}
              alt="arrows image"
              className="inline-block w-12 align-middle lg:w-28"
            />{' '}
            catching
          </span>{' '}
          brands
        </h1>
        <img
          src={heroPurple}
          alt="abstract form"
          className="absolute -right-[600px] -z-50 hidden w-96 md:block"
        />
      </div>
      {/* hero main title ends */}

      {/* hero subtext and button */}
      <div className="my-3 max-w-sm space-y-8">
        <h3 className="font-atkinson text-xl text-mainBlue">
          Empower your franchisees and locations to grow with our intelligent
          dashboards and tools.
        </h3>
        <div className="md:max-w-[164px]">
          <CustomButton
            displayText="Contact Us"
            isTransparent={false}
            textColor="text-white"
          />
        </div>
      </div>
      {/* hero subtext and button ends */}

      {/* purple background img */}
      <div className='overflow-x-hidden'>
        <img
          src={heroPurple}
          alt="abstract form"
          className="absolute -right-14 w-28 md:hidden overflow-x-hidden"
        />
      </div>
    </div>
  );
};

export default Hero;
