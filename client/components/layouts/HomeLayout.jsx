/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { clsx } from "lib/utils/clsx";
import { Fragment } from "react";

const HomeLayout = ({ children }) => {
  return (
    <div className="w-full min-h-screen">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;

const Navigation = () => {
  return (
    <Popover className="relative bg-neutral-800 ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="w-auto h-8 sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none ">
              <a
                href="#"
                className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary whitespace-nowrap "
              >
                Sign Up
              </a>
            </Popover.Button>
          </div>

          <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary whitespace-nowrap "
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </Popover>
  );
};

const Footer = () => {
  return (
    <div className="items-center bg-neutral-700">
      <footer className="w-full px-8 rounded-b-lg bg-neutral-700">
        <div className="container inline-flex flex-col flex-wrap items-center px-5 py-6 mx-auto sm:flex-row">
          <h2 className="mx-auto text-xs font-medium tracking-widest capitalize text-primary title-font">
            © Sidwebworks | All rights reserved
          </h2>
        </div>
      </footer>
    </div>
  );
};
