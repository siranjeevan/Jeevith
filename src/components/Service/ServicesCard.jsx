function ServicesCard({ path, ServiceTitle = "Service Title" , ServiceText }) {
  return (
    <div className="flex w-auto px-1 h-65 flex-col items-center justify-center rounded-[22px] shadow-lg snap-center duration-300 mt-10 " style={{backgroundColor: 'rgba(189, 195, 199 ,0.15)'}}>
        <img src={path} className="h-16 mb-4" alt={ServiceTitle} />
        <h2 className="text-[#e46400] text-[17px] font-semibold">{ServiceTitle}</h2>
        <div className=" text-white p-4 flex items-center justify-center">
          <p className="text-[15px] w-65 text-center font-extralight">{ServiceText}</p>
        </div>
      </div>
  );
}

export default ServicesCard;
