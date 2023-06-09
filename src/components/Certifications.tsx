import React from 'react';
import { clipboard, yellowCertification } from '../assets';

const Certifications = () => {
  return (
    <div className="relative mt-10 mb-[540px] flex h-36 justify-center 2xl:mt-20 xl:mb-[370px] xl:h-48 2xl:h-56">
      <div className="absolute max-w-full">
        <div className="flex flex-col items-center rounded-[40px] border-[6px] border-white bg-gradient-to-t from-gradientLightBlueDarker to-gradientLightBlue font-openSans text-3xl font-semibold text-white xl:flex-row xl:space-x-56 xl:py-20 py-10">
          {/* img and title on the left side*/}
          <div className="xl:space-y-16 xl:pl-[99px]">
            <h1 className="text-center xl:text-start xl:text-6xl">
              Certifications
            </h1>
            <img src={clipboard} alt="clipboard img" className="2xl:w-96" />
          </div>
          {/* img and title on the left side ends */}

          {/* companies certifications on the right side */}
          <div className="px-8 xl:pr-[175px] [&>h2]:my-3 [&>h2]:xl:text-3xl [&>p]:font-atkinson [&>p]:text-base [&>p]:font-normal [&>p]:text-white/80 [&>p]:xl:w-[310px]">
            <h2>Amazon</h2>
            <p>
              We specialize in developing interactive, scalable, brand-oriented.
            </p>
            <h2>Google</h2>
            <p>
              We specialize in developing interactive, scalable, brand-oriented.
            </p>
            <h2>Facebook</h2>
            <p className="mb-0">
              We specialize in developing interactive, scalable, brand-oriented.
            </p>
          </div>
          {/* companies certifications ends */}
        </div>

        {/* offset img */}
        <img
          src={yellowCertification}
          alt="yellow form"
          className="absolute -bottom-60 -left-44 z-40 hidden w-[347px] xl:block"
        />
      </div>
    </div>
  );
};

export default Certifications;
