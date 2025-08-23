import ServicesCard from "../ServicesCard";
import Web from "../../../assets/Web.png"
import Swift from "../../../assets/Swift.png"
import Mysql from "../../../assets/Mysql.png"
import Maintain2 from "../../../assets/Maintain2.png"
import UIUX from "../../../assets/UIUX.png"
import Fire from "../../../assets/Fire.png"
// import Web from "../../../assets/Web.png"

function ServiceScreen(){
    return(
        <>
            <div className="text-white flex justify-center text-center flex-col">
                <div>
                    <h1 className="text-[40px]">Service</h1>
                    <h3 className="text-[15px] text-gray-400 tracking-widest p-2">Modern, responsive websites built with React, Tailwind CSS, and Bootstrap for a seamless experience across all devices.</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center p-10 -mt-10">
                    <ServicesCard 
                        path= {Web}
                        ServiceTitle="Web Design & Development" 
                        ServiceText="Designing pixel-perfect and intuitive user interfaces that enhance engagement and usability." 
                    />
                    <ServicesCard 
                        path={Swift} 
                        ServiceTitle="IOS App Development" 
                        ServiceText="Connecting your app to powerful backend services like Firebase, REST APIs, and cloud storage." 
                    />
                    <ServicesCard 
                        path={Mysql}  
                        ServiceTitle="Backend Development with MySQL"  
                        ServiceText="MySQL database integration for storing and managing data effectively." 
                    />
                    <ServicesCard 
                        path={Maintain2} 
                        ServiceTitle="Maintenance & Support" 
                        ServiceText="Providing ongoing updates, security patches, and reliable support after launch." 
                    />
                    <ServicesCard 
                        path={UIUX} 
                        ServiceTitle="UI / UX" 
                        ServiceText="Designing pixel-perfect and intuitive user interfaces that enhance engagement and usability." 
                    />
                    <ServicesCard 
                        path={Fire}
                        ServiceTitle="Firebase" 
                        ServiceText="Connecting your app to powerful backend services like Firebase, REST APIs, and cloud storage." 
                    />
                </div>
            </div>
        </>
    )


}
export default ServiceScreen;