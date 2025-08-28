import { FaInstagram, FaGithub, FaLinkedin , FaFacebook } from "react-icons/fa";

function SocialMediaIcon(){
    return(
        <>
            <div className="flex  items-center flex-row mt-7 
                text-[30px]
                sm:text-[30px] sm:gap-3
                md:text-[35px] md:gap-5
                lg:text-[40px] lg:gap-5
                xl:text-[42px] xl:gap-6 
                2xl:text-[65px] 2xl:gap-10
                ">
                <a href="https://www.instagram.com/heartless_jeevith/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-white border-1 p-2 rounded-full hover:text-red-500 transition duration-300" />
                </a>
                <a href="https://github.com/siranjeevan" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-white border-1 p-2 rounded-full   hover:text-gray-600 transition duration-300 ml-5" />
                </a>
                <a href="https://www.linkedin.com/in/siranjeevan-c-b0540b307/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-white border-1 p-2 rounded-full hover:text-blue-300 transition duration-300 ml-5" />
                </a>
                <a href="https://www.facebook.com/saralachandru.saralachandru.7/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-white border-1 p-2 rounded-full hover:text-blue-400 transition duration-300 ml-5 " />
                </a>
            </div>
        </>
    );
}
export default SocialMediaIcon;