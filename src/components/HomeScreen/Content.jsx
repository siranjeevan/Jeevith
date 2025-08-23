import { ReactTyped } from "react-typed";
function Content(){
    return (
        <>
            <h1 className="text-[20px] 
            sm:text-[20px]
            md:text-[25px]
            lg:text-[30px]
            xl:text-[35px]
            2xl:text-[100px]
            font-serif opacity-60">Hi,
            <span className="text-[15px]
            sm:text-[15px]
            md:text-[17px]
            lg:text-[20px]
            xl:text-[25px]
            2xl:text-[60px]
             font-bold">I'm 
             <br />
            <span className="text-[23px]
            sm:text-[25px]
            md:text-[30px]
            lg:text-[35px]
            xl:text-[40px]
            2xl:text-[60px]
            "> Siranjeevan </span> </span></h1>


            <div className="mt-5">
                <h1>
                    {" "}
                    <ReactTyped
                    strings={["IOS Application Developer", "Website Developer", "Designer" , "PhotoGrapher , Editor"]}
                    typeSpeed={100}
                    loop
                    backSpeed={30}
                    cursorChar="|"
                    showCursor={true}
                    className="text-[#E46400] font-extrabold text-[22px]
                    sm:text-[23px]
                    md:text-[25px]
                    lg:text-[30px]
                    xl:text-[47px]
                    2xl:text-[70px]
                    "
                    style={{ fontFamily: "'Henny Penny', cursive" }}
                    />
                </h1>
            </div>
            {/* <h1 className="text-[#E46400] font-bold text-[20px] mt-2
            sm:text-[23px]
            md:text-[25px]
            lg:text-[30px]
            xl:text-[45px]
            2xl:text-[70px]
            ">
            <span className="text-[#E46400] text-[25px]
            sm:text-[27px]
            md:text-[30px]
            lg:text-[35px]
            xl:text-[45px]
            2xl:text-[80px]
             font-serif shadow-amber-600">FRONTEND </span>Developer</h1>  */}
        </>
    );
}
export default Content;
