// AboutScreen.jsx
import Image from "../Image";
import Content from "../Content";
import SkillsSection from "../SkillsSection";

function AboutScreen() {
    return (
        <>
            {/* Heading */}
            <div className="flex justify-center text-center px-3">
                <div className="text-white flex-col">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px]">About Me</h1>
                    <h3 className="text-xs sm:text-sm md:text-base text-gray-400 tracking-widest p-2">
                        Blending creativity, technology, and passion to build experiences that inspire.
                    </h3>
                </div>
            </div>
            
            {/* Image + Content */}
            <div className="flex flex-col xl:flex-row text-white justify-center lg:justify-end items-center gap-5 px-5 xl:px-20">
                <Image />
                <div className="flex flex-col">
                    <Content />
                </div>
            </div>

            {/* Skills Section */}
            <SkillsSection />
        </>
    );
}
export default AboutScreen;
