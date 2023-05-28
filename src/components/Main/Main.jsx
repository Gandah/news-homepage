import { useState, useEffect } from 'react';
import Aside from "./Aside";
import FooterCard from "./FooterCard";

const Main = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimate((prevState) => !prevState);
    }, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleMouseEnter = () => {
    setAnimate(false);
  };

  const handleMouseLeave = () => {
    setAnimate(true);
  };

  return (
    <main className="flex flex-col gap-10 md:grid grid-cols-3 grid-rows-[minmax(0,_1fr)_250px] md:py-4 md:pl-0 xl:pl-4">
      <article className="grid gap-4 md:col-[1_/_span_2] md:row-start-1 md:row-end-2  md:grid-cols-2 md:grid-rows-[minmax(300px,_370px)_150px]">
        <div className="md:col-[1_/_span_2] row-[1_/_span_1]">
          <img
            src="images/image-web-3-mobile.jpg"
            className="block md:hidden" // Show only on mobile (hidden on desktop)
            alt="Mobile Image"
          />
          <img
            src="images/image-web-3-desktop.jpg"
            className="hidden md:block" // Show only on desktop (hidden on mobile)
            alt="Desktop Image"
          />
        </div>
        <div className="text-3xl font-bold p-4 pb-0 pl-0 md:col-[1_/_span_1] md:row-[2_/_span_1] md:font-extrabold 0.5xl:text-5xl md:p-0">
          <h1 className='w-[70%]'>
            <span className="block  sm:inline md:block">The Bright </span>
            <span className="block sm:inline">Future of <span>Web</span> </span>
            3.0?
          </h1>
        </div>

        <div className='grid gap-4 md:grid-rows-[minmax(auto,_1fr)_1fr] md:pl-3 md:gap-5 xl:gap-8'>
          <div className='md:row-[1_/_span_1]'>
            <p className="font-light text-sm leading-6 text-grayishBlue-200 md:w-full md:text-base">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is it
              really fulfilling its promise?
            </p>
          </div>
          <div
            role="button"
            tabIndex={0}
            className={`bg-softRed hover:bg-darkBlue px-4 py-3 md:py-2 h-auto w-[50%] md:w-[60%] 0.5xl:w-[40%] uppercase text-center md:grid place-items-center ${
              animate ? "animate-[wiggle_2s_ease-in-out_2]" : ""} `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a className="block text-offWhite  cursor-pointer text-xs tracking-[0.25em] font-medium md:text-sm">
              Read more
            </a>
          </div>
        </div>
      </article>
      <Aside />
      <footer className="grid gap-4 0.5xl:gap-8 md:row-[2_/_span_1] md:col-[1_/_span_3] md:grid-flow-col md:mt-5 xl:mt-10 md:py-2 0.5xl:py-5 z-10">
        <FooterCard
          numbering="01"
          heading="Reviving Retro PCs"
          text="What happens when old PCs are given modern upgrades?"
          url="/images/image-retro-pcs.jpg"
          alt="Retro PCs"
          width="100%"
        />
        <FooterCard
          numbering="02"
          heading="Top 10 Laptops of 2022"
          text="Our best picks for various needs and budgets."
          url="/images/image-top-laptops.jpg"
          alt="laptop keyboard"
          width="100%"
        />
        <FooterCard
          numbering="03"
          heading="The Growth of Gaming"
          text="How the pandemic has sparked fresh opportunities."
          url="/images/image-gaming-growth.jpg"
          alt="PS4 game controller"
          width="100%"
        />
      </footer>
    </main>
  );
};

export default Main;
