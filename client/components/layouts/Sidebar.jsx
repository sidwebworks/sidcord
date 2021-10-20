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
import { clsx } from "../../lib/utils/clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import Modal from "../ui/Modal";
import * as Avatar from "@radix-ui/react-avatar";
import Button from "../ui/buttons/Button";
import { LogOut, Settings } from "react-feather";

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
    url: "/dashboard/collections",
    Icon: ArchiveIcon,
    id: "57120-0asd",
  },
  {
    label: "Code Playground",
    url: "/dashboard/playground",
    Icon: CodeIcon,
    id: "-da-f21s-da31",
  },
];

export const Sidebar = () => {
  const router = useRouter();

  const [active, setActive] = useState(0);
  const [showModal, setShowModal] = useState(false);

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

      setActive(selectedItem);
    };

    selectItem(sidebar_items);
  }, [router.pathname]);

  const handleSelect = (index) => {
    setActive(index);
  };

  return (
    <>
      <Modal
        isOpen={showModal}
        title="Logout from App?"
        setIsOpen={setShowModal}
      >
        <div className="mt-2">
          <p className="text-gray-100">We will miss you, Come back soon!</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <Button className="text-gray-50" onClick={() => setShowModal(false)}>
            Go back
          </Button>

          <Button className="text-gray-50 btn-md">Log out</Button>
        </div>
      </Modal>

      <div className="relative inset-x-0 top-0 left-0 z-10 flex flex-col flex-shrink-0 min-h-screen text-gray-700 md:w-auto bg-neutral-600">
        <div className="flex flex-col h-full">
          <nav className="flex-grow pb-4 md:block md:pb-0 md:overflow-y-auto">
            <ul className="flex flex-col items-stretch justify-center w-full px-2 pt-2 space-y-2">
              {sidebar_items.map(({ Icon, ...item }, idx) => (
                <Link key={item.id} href={item.url}>
                  <a
                    onClick={() => handleSelect(idx)}
                    className={clsx([
                      "inline-flex items-center w-full p-3 rounded-md mt-2 text-base transition duration-300 ease-in-out bg-base-200  outline-none ",
                      active === idx
                        ? "bg-base-100 text-primary bg-opacity-60"
                        : "bg-base-100  text-gray-600 hover:bg-opacity-60 bg-opacity-10 hover:text-primary ",
                    ])}
                  >
                    <Icon className="fill-current w-7 h-7" />
                  </a>
                </Link>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col px-2 space-y-2 align-stretch">
            <button
              className={clsx([
                "inline-flex items-center w-full p-3 rounded-md mt-2 text-base transition duration-300 ease-in-out   outline-none ",
                router.pathname.includes("/settings")
                  ? "text-primary "
                  : " text-gray-600   hover:text-primary ",
              ])}
            >
              <Settings className="w-6 h-6 mx-auto stroke-current" />
            </button>

            <button
              onClick={() => setShowModal(true)}
              className={clsx([
                "inline-flex items-center w-full p-2 rounded-md mt-2 text-base transition duration-300 ease-in-out outline-none ",
                "text-gray-600  hover:text-red-500 ",
              ])}
            >
              <LogOut className="w-6 h-6 mx-auto stroke-current" />
            </button>
          </div>

          <div className="flex items-center p-2 mt-2 mb-2 rounded-full ">
            <Avatar.Root className="w-12 h-12 avatar ">
              <Avatar.Image
                className="overflow-hidden rounded-full"
                alt="Colm Tuite"
                src={
                  "http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                }
              />
              <Avatar.Fallback delayMs={600}>CT</Avatar.Fallback>
            </Avatar.Root>
          </div>
        </div>
      </div>
    </>
  );
};
