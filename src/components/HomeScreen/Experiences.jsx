function Experiences() {
    return (
        <>
            <div className="flex
            w-70 p-2 gap-1 -ml-0
            sm:flex-row sm:gap-5 sm:w-85 sm:p-2 sm:ml-0
            md:w-95
            lg:gap-10 lg:px-3 lg:h-20 lg:w-130 lg:ml-0
            items-center rounded-[7px] mt-10" style={{backgroundColor: 'rgba(189, 195, 199 ,0.15)'}}>
                <div className="flex flex-col">
                    <h1 className="text-[#E46400] text-[12px] md:text-[15px] lg:text-[18px]">1+</h1>
                    <h2 className=" text-[13px] md:text-[15px]  lg:text-[17px]">Experiences</h2>
                </div>
                <div className="border-1 h-10 md:h-15 opacity-60 "></div>
                <div>
                    <h1 className="text-[#E46400] text-[12px] md:text-[15px] lg:text-[18px]">10+</h1>
                    <h2 className=" text-[13px] md:text-[15px]  lg:text-[17px] ">Project done</h2>
                </div>
                <div className=" border-1 h-10 md:h-15 opacity-60 "></div>
                <div>
                    <h1 className="text-[#E46400] text-[12px] md:text-[15px] lg:text-[18px]">3+</h1>
                    <h2 className=" text-[13px] md:text-[15px]  lg:text-[17px]">Happy Client</h2>
                </div>
            </div>
        </>
    );
}
export default Experiences;