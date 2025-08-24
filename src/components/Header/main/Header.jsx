// Header.jsx
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Logo from "../Logo";
import NavigationLinks from "../NavigationLinks";
import MobileMenu from "../MobileMenu";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#" },
  { name: "About me", href: "#" },
  { name: "My project", href: "#" },
  { name: "Contact me", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-0">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Logo />
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="size-6 text-[#E46400]"
              />
            </button>
          </div>

          <div className="hidden md:flex md:gap-8 lg:gap-x-10 xl:ml-35 xl:gap-x-16 ">
            <NavigationLinks
              links={navigation}
              className="text-sm/6 xl:text-[17px] md:text-[13px] lg:text-[15px] font-serif text-white hover:text-[#E46400]"
            />
          </div>

          <div className="hidden md:flex lg:flex-1 font-black text-center font-serif">
            <a
              href="#"
              className="text-sm/6 lg:text-[17px] md:p-1 md:px-4 lg:p-2 text-white lg:ml-30 lg:w-40 rounded-[7px] bg-[#E46400]"
            >
              Hire me
            </a>
          </div>
        </nav>

        <MobileMenu
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          links={navigation}
        />
      </header>
    </div>
  );
}
