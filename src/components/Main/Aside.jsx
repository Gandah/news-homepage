

const Aside = () => {
  return (
    <aside className='bg-darkBlue text-offWhite p-4 min-w-[300px] md:col-start-3 col-end-3 row-start-1 row-end-2 w-auto h-full md:p-6 z-10'>
      <div className="flex flex-col gap-2 justify-center items-start md:gap-10">
        <div className='grid place-items-center'>
          <h2 className='font-bold text-lg text-softOrange md:text-5xl'>New</h2>
        </div>
        <div className='divide-y divide-grayishBlue-200 flex flex-col gap-8 justify-center items-start'>
          <div className='grid gap-2'>
            <h3 className="font-bold hover:text-softOrange cursor-pointer md:text-xl">Hydrogen VS Electric Cars</h3>
            <p className='text-sm text-grayishBlue-100 md:text-base'>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <div className='grid gap-2 pt-8'>
            <h3 className="font-bold hover:text-softOrange cursor-pointer md:text-xl">The Downsides of AI Artistry</h3>
            <p className='text-sm text-grayishBlue-100 md:text-base'>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className='grid gap-2 pt-8'>
            <h3 className="font-bold hover:text-softOrange cursor-pointer md:text-xl">Is VC Funding Drying Up?</h3>
            <p className='text-sm text-grayishBlue-100 md:text-base'>
              Private funding by VC firms is down 50% YOY. We take a look at what
              that means
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
