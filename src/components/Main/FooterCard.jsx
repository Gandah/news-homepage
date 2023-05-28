const FooterCard = (props) => {
  return (
    <section className="grid grid-flow-col grid-cols-[150px_auto] gap-6 md:gap-3 0.5xl:gap-4 scale-100 transition-all delay-[100ms] duration-800 ease-in-out hover:scale-[1.2] cursor-pointer">
      <div className={`w-[${props.width}] h-auto md:w-[90%] object-cover`} >
        <img className="block max-w-full" src={props.url} alt={props.alt}/>
      </div>
      <div className="grid gap-5 place-items-start md:h-full md:content-baseline lg:gap-7 ">
        <h3 className="font-bold text-2xl text-grayishBlue-100 md:text-4xl">{props.numbering}</h3>
        <h4 className="text-base font-bold hover:text-softOrange 2xl:text-xl">{props.heading}</h4>
        <p className="text-xs text-grayishBlue-200 break-normal 2xl:text-sm w-fit" >{props.text}</p>
      </div>
    </section>
  );
};

export default FooterCard;
