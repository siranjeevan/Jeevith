function Layout({children}) {
    return (
    <div className="w-auto">
             <div className="relative w-full overflow-hidden">

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.1,
          }}
        />

        <div className="relative z-10">
            <div className="flex justify-center items-center py-5 text-white flex-col gap-2 mt-5">
                    <h1 className="flex justify-center tracking-[1.5px] text-3xl font-bold text-center"> The People Who Powered My Progress</h1>
                    <h3 className= "text-[15px] mt-5 tracking-[0.5px] md:w-200 text-center text-gray-300 font-light" >Every milestone I’ve reached in my tech journey has been guided by mentors who shared their knowledge and experience. They didn’t just teach me code — they taught me how to think, create, and lead. </h3>
                </div>
                  {children}
            </div>
        </div>

      </div>
  );
}
export default Layout;