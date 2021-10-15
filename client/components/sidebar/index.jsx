import { Transition } from "@headlessui/react";
import {
  CodeIcon,
  CogIcon,
  ArchiveIcon,
  ChatAlt2Icon,
  LogoutIcon,
  MenuIcon,
  HomeIcon,
} from "@heroicons/react/solid";
import { clsx } from "../../utils/clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import Modal from "../lib/modal";
import * as Avatar from "@radix-ui/react-avatar";

const sidebar_items = [
  {
    label: "Home Page",
    url: "/dashboard",
    Icon: HomeIcon,
    id: "1028-asd-ai331",
  },

  {
    label: "Chat Page",
    url: "/dashboard/chat",
    Icon: ChatAlt2Icon,
    id: "1028-asd-ai331",
  },

  {
    label: "Store",
    url: "/student/courses/addnew",
    Icon: ArchiveIcon,
    id: "57120-0asd",
  },
  {
    label: "Code Playground",
    url: "/student/learningpaths",
    Icon: CodeIcon,
    id: "-da-f21s-da31",
  },
];

export const Sidebar = () => {
  const router = useRouter();

  const [active, setActive] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const user = null;

  useEffect(() => {
    /**
     * ? Function to: Update active sidebar item based on route pathname.
     * @param {[]} sidebarItems
     */
    const selectItem = (sidebarItems) => {
      const pathName = router.pathname;

      let selectedItem = sidebarItems.findIndex((item) =>
        pathName.endsWith(item.url)
      );

      if (selectedItem === -1 && pathName.includes("search")) {
        selectedItem = sidebarItems.findIndex((item) =>
          pathName.includes(item.url)
        );
      }
      setActive(selectedItem);
    };

    selectItem(sidebar_items);
  }, [router.pathname]);

  useEffect(() => {
    const enableSidebar = () => {
      if (window.innerWidth > 767) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    enableSidebar();

    //   Show sidebar on sizes above tablets
    window.addEventListener("resize", () => {
      enableSidebar();
    });

    // Clean up function
    return () => {
      window.removeEventListener("resize", () => {
        enableSidebar();
      });
    };
  }, []);

  const handleSelect = (index) => {
    setActive(index);
    //  if on Tablet, close menu on select
    if (window.innerWidth < 767) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <>
      <Modal
        isOpen={showModal}
        title="Logout from App?"
        setIsOpen={setShowModal}
      >
        <div className="mt-2">
          <p className="text-blueGray-200 text-md">
            We will miss you, Come back soon!
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <button
            className="bg-blue-500 px-4 rounded-sm py-1.5"
            onClick={() => setShowModal(false)}
          >
            Go back
          </button>
          <button className="bg-blue-500 px-4 rounded-sm py-1.5">
            Log out
          </button>
        </div>
      </Modal>

      <div className="relative inset-x-0 left-0 z-10 flex flex-col flex-shrink-0 w-full min-h-screen border-r-2 bg-blueGray-600 border-blueGray-700 md:inset-y-0 text-blueblueGray-700 md:w-auto">
        <div className="flex items-center flex-shrink-0 py-1 border-b bg-blueGray-600 border-blueGray-600">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-1 m-2 ml-auto transition-colors duration-200 transform rounded-md outline-none md:hidden hover:bg-opacity-25 hover:bg-blueblueGray-600"
            type="button"
            aria-label="Close"
            aria-hidden="true"
          >
            <MenuIcon className="w-8 fill-current text-blueGray-100" />
          </button>
        </div>

        <Transition
          as={Fragment}
          appear
          show={isOpen}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <div className="flex flex-col h-full">
            <nav className="flex-grow pb-4 md:block md:pb-0 md:overflow-y-auto">
              <ul className="flex flex-col items-stretch justify-center w-full pt-2 space-y-2">
                {sidebar_items.map(({ Icon, ...item }, idx) => (
                  <Link key={item.id} href={item.url}>
                    <a
                      onClick={() => handleSelect(idx)}
                      className={clsx([
                        "inline-flex items-center w-full px-4 py-2 mt-2 text-base transition duration-300 ease-in-out bg-blueGray-600 border-l-4   hover:bg-blueGray-500  hover:bg-opacity-100  outline-none bg-opacity-10 focus:ring-2 focus:ring-blueGray-600 ",
                        active === idx
                          ? " border-blue-600 text-blue-600 bg-opacity-100"
                          : "border-blueGray-600 text-blueGray-400 ",
                      ])}
                    >
                      <Icon className="fill-current w-7 h-7" />
                    </a>
                  </Link>
                ))}
              </ul>
            </nav>
            <div className="flex flex-col space-y-2 align-stretch">
              <button
                className={
                  "inline-flex items-center w-full px-4 py-2  text-base text-blueGray-400 transition duration-300 ease-in-out bg-blueGray-500  hover:text-blue-600   hover:bg-opacity-100  outline-none bg-opacity-10 focus:ring-2 focus:ring-blueGray-500 "
                }
              >
                <CogIcon className="w-6 icon icon-tabler icon-tabler-users" />
              </button>

              <button
                onClick={() => setShowModal(true)}
                className={
                  "inline-flex items-center  px-4 py-2  text-base text-red-500 transition duration-300 ease-in-out bg-blueGray-500  hover:text-red-600  hover:bg-opacity-100  outline-none bg-opacity-10 focus:ring-2 focus:ring-blueGray-500 "
                }
              >
                <LogoutIcon className="w-6 icon icon-tabler icon-tabler-users" />
              </button>
            </div>

            <div className="flex items-center w-full p-4 border-t-2 border-blueGray-700 ">
              <Avatar.Root>
                <Avatar.Image alt="Colm Tuite" src={user?.userdp} />
                <Avatar.Fallback delayMs={600}>CT</Avatar.Fallback>
              </Avatar.Root>

              <div className="w-full max-w-[80%]">
                <h2 className="text-sm font-medium tracking-wide truncate text-blueGray-100 title-font">
                  {user?.username?.split("#")[0]}
                </h2>
                <p className="text-sm truncate text-blueGray-400">
                  {user?.email}
                </p>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </>
  );
};
