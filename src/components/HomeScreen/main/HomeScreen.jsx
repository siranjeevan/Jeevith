import Content from "../Content.jsx";
import ButtonNavigate from "../ButtonNavigate.jsx";
import SocialMediaIcon from "../SocialMediaIcon.jsx";
import Experiences from "../Experiences.jsx";
import ImageLayout from "../ImageLayout copy.jsx";
import HomeMap from "../HomeMap.jsx";

function HomeScreen() {
  return (
    <div
      className="flex flex-col-reverse sm:flex-row items-center mt-30
                gap-10 px-6 sm:px-10 lg:px-20 xl:px-30 
                xl:mt-40 text-white" id= "Home" >
        {/* Left Section */}
        <div className="flex ml-12 sm:ml-0 justify-center flex-col w-full lg:w-1/2">
            <Content />
            <SocialMediaIcon />
            <ButtonNavigate />
            <Experiences />
        </div>

        {/* Right Section */}
        <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
            <ImageLayout />
        </div>
    </div>
  );
}

export default HomeScreen;
