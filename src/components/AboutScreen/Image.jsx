// Image.jsx
import jeevith from '../../assets/Jeevith.png';
function Image() {
    return (
        <div className="w-full flex justify-center items-center">
            <img 
                src={jeevith} 
                className="h-50 sm:h-60 md:h-80  xl:h-[800px] object-contain mt-5 md:mt-0 lg:mt-0 xl:-mt-10" 
                alt="Profile"
            />
        </div>
    );
}
export default Image;
