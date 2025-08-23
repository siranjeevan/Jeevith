import Girl from "../../assets/GirlLogo.png"
function TestimonialsCards({ path, testimonialText = "Testimonial Text", authorName = "Author Name" , Post = "Post" }) {
  return (
    <div className="flex min-w-70 h-90 sm:min-w-100 md:min-w-120 sm:h-70 flex-col rounded-[22px] shadow-lg snap-center duration-300" style={{backgroundColor: 'rgba(189, 195, 199 ,0.15)'}}>
        <div className="flex flex-col items-center justify-center p-4 h-150">
            <h1 className="text-[#e46400] text-[30px] mr-50 sm:mr-70 md:mr-100">❝</h1>
            <p className="text-[#e46400] text-[14px] font-semibold px-5 ml-5"> {testimonialText}</p>
            <h1 className="text-[#e46400] text-[30px] ml-50 sm:ml-70 md:ml-100">❞</h1>
        </div>
        <div className=" flex flex-row p-3 gap-3">
            <img src={Girl} alt="" className="h-10 rounded-full object-cover " />
            <div className="flex flex-col -mt-2">
                <h2 className="text-white text-[15px] font-medium mt-2">{authorName}</h2>
                <p className="text-[#e46400] text-[12px]">{Post}</p>
            </div>
        </div>
    </div>
  );
}
export default TestimonialsCards;