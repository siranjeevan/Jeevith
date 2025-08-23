function ButtonNavigate(){
    return(
        <>
            <div className="flex flex-row gap-5 mt-10">
                <button className="bg-[#E46400]  text-white font-bold rounded-[7px]  w-30 text-[12px] p-1
                sm:w-35 sm:text-[15px]
                md:w-37 md:text-[15px]
                lg:w-45 lg:text-[18px] lg:p-2
                xl:w-35 xl:text-[18px] 
                2xl:w-70 2xl:text-[25px] 2xl:px-3 transition duration-300">Hire me</button>
                <a href="/Siranjeevan_CV.pdf" download>
                <button className=" text-white font-bold rounded-[7px]
                w-30 text-[12px] p-1
                sm:w-35 sm:text-[15px]
                md:w-37 md:text-[15px]
                lg:w-45 lg:text-[18px] lg:p-2
                xl:w-45 xl:text-[18px] 
                2xl:w-70 2xl:text-[25px] 2xl:px-3 border-1 transition duration-300">
                    Download CV
                </button>
                </a>
            </div>
        </>
    );
}
export default ButtonNavigate;