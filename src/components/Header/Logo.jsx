// Logo.jsx
import logoImg from "../../assets/Logo.png";
export default function Logo() {
  return (
    <a href="#" className="-m-1.5 p-1.5">
      <span className="sr-only text-black">Your Company</span>
      <img
        className="h-15 sm:ml-5 sm:h-15 md:h-16 xl:h-20 2xl:h-35 mx-auto rounded-full"
        src={logoImg}
        alt="logo"
      />
    </a>
  );
}
