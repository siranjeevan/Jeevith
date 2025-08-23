function ProjectsCard({ path = "Jeevith", ProjectTitle = "Project Title" , ProjectText = "" }){
    return(
        <>
            <div className="flex min-w-70 h-80 sm:min-w-80 sm:h-80 lg:min-w-90 lg:h-100 flex-col items-center justify-center rounded-[22px] shadow-lg snap-center"  style={{backgroundColor: 'rgba(189, 195, 199 ,0.15)'}} >
                <img src="/Jeevith.png" className=" h-30 sm:h-40 lg:h-60 mb-4" alt={ProjectTitle} />
                <h2 className="text-white text-[20px] font-semibold">{ProjectTitle}</h2>

                <div className=" text-white p-4 flex items-center justify-center">
                    <p className="text-[15px] w-auto text-center font-extralight">{ProjectText}</p>
                </div>
            </div>
        </>
    )
}
export default ProjectsCard;