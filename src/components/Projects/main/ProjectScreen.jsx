import ProjectsCardGroup from "../ProjectScreenCardGroup";
import ProjectsCard from "../ProjectCard";

function ProJectsScreen(){
    return(
        <>
            <div className="flex flex-col ">
            <div className="flex justify-center text-center flex-col">
                <div className=" text-[white] flex-col">
                    <h1 className="text-[40px]">What I’ve Built</h1>
                    <h3 className="text-[15px] text-gray-400 tracking-widest p-2 flex justify-center items-center text-center">Showcasing my proudest work — built with passion, precision, and modern technology. </h3>
                </div>
                <div>
                    <ProjectsCardGroup >
                        <ProjectsCard
                        path="/project1.png"
                        ProjectTitle="Project One"
                        ProjectText="A comprehensive web application that streamlines project management and collaboration."
                    />
                    <ProjectsCard
                        path="/project2.png"
                        ProjectTitle="Project Two" 
                        ProjectText="An innovative e-commerce platform that enhances user experience and boosts sales."
                    />
                    <ProjectsCard
                        path="/project3.png"
                        ProjectTitle="Project Three"
                        ProjectText="A cutting-edge mobile app that connects users with local services seamlessly."
                    />
                    <ProjectsCard
                        path="/project4.png"
                        ProjectTitle="Project Four"
                        ProjectText="A dynamic portfolio website that showcases creative works and professional achievements."
                    />
                    </ProjectsCardGroup>  
                </div>
                <div>
                    <ProjectsCardGroup >
                        <ProjectsCard
                        path="/project1.png"
                        ProjectTitle="Project One"
                        ProjectText="A comprehensive web application that streamlines project management and collaboration."
                    />
                    <ProjectsCard
                        path="/project2.png"
                        ProjectTitle="Project Two" 
                        ProjectText="An innovative e-commerce platform that enhances user experience and boosts sales."
                    />
                    <ProjectsCard
                        path="/project3.png"
                        ProjectTitle="Project Three"
                        ProjectText="A cutting-edge mobile app that connects users with local services seamlessly."
                    />
                    <ProjectsCard
                        path="/project4.png"
                        ProjectTitle="Project Four"
                        ProjectText="A dynamic portfolio website that showcases creative works and professional achievements."
                    />
                    </ProjectsCardGroup>  
                </div>
            </div>
            </div>
        </>
    )
}
export default ProJectsScreen;