// MobileMenu.jsx
import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";

export default function MobileMenu({ open, onClose, links }) {
  return (
    <Dialog open={open} onClose={onClose} className="sm:hidden">
      <div className="fixed inset-0 z-50" />
      <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
        <div className="flex items-center justify-between">
          <Logo />
          <button
            type="button"
            onClick={() => onClose(false)}
            className="-m-2.5 rounded-md p-2.5 text-gray-200"
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-white/10">
            <div className="space-y-2 py-6">
              <NavigationLinks
                links={links}
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
              />
            </div>
            <div className="py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold bg-[#E46400] text-white hover:bg-white/5"
              >
                Hire me
              </a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}
