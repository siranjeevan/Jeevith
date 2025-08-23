function Layout({children})
{
    return(
        <div className="">
             <div className="relative w-full overflow-hidden">
        <div className="relative z-10">
            <div className="flex justify-center items-center py-5 mt-5 flex-col">
                    <h1 className="flex justify-center text-white text-4xl tracking-[3px] font-bold">Testimonials</h1>
                    <h3 className="text-[15px] text-gray-400 tracking-[5px] p-2 flex text-center">What people say about my work.</h3>
                </div>
                
                {children}
            </div>
        </div>

      </div>
    )
}
export default Layout;