import { Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Inbox, Compass } from "react-feather";

export const ChatSidebar = () => {
  return (
    <Transition
      as={Fragment}
      show={true}
      appear={true}
      enter="ease-out duration-300"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div className="flex flex-col flex-shrink-0 w-64 bg-base-200">
        <figure className="relative flex-shrink-0 w-full h-32 overflow-hidden text-sm focus:outline-none ">
          <div className="w-full flex items-center justify-center h-full absolute z-[2] bg-black bg-opacity-0 transition-colors duration-200 ease-in-out hover:bg-opacity-30 group">
            <Compass className="w-12 h-12 transition-all duration-200 ease-in-out opacity-0 cursor-pointer stroke-current text-primary text-opacity-70 group-hover:opacity-100 " />
          </div>
          <img
            className="absolute object-cover"
            src="https://i.imgur.com/ZUsxbHK.jpeg"
          />
        </figure>

        <Options />
      </div>
    </Transition>
  );
};

const Options = () => {
  return (
    <div className="flex-grow h-0 overflow-auto">
      <div className="mt-3">
        <a
          className="flex items-center h-8 px-3 text-sm hover:bg-neutral-600 hover:text-primary"
          href="#"
        >
          <Inbox className="w-4 h-4 stroke-current" />
          <span className="ml-2 leading-none">Direct Messages</span>
        </a>
        <a
          className="flex items-center h-8 px-3 text-sm hover:bg-neutral-600 hover:text-primary"
          href="#"
        >
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
          <span className="ml-2 leading-none">Saved Items</span>
        </a>
        <a
          className="flex items-center h-8 px-3 text-sm hover:bg-neutral-600 hover:text-primary"
          href="#"
        >
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
          <span className="ml-2 leading-none">More</span>
        </a>
      </div>
      <div className="mt-4">
        <div className="flex items-center h-8 px-2 group">
          <button
            id="channels_toggle"
            className="flex items-center flex-grow focus:outline-none"
          >
            <span className="ml-2 text-sm font-medium leading-none">
              Channels
            </span>
          </button>
          <button className="items-center justify-center hidden w-6 h-6 ml-auto rounded group-hover:flex hover:bg-neutral-600 hover:text-primary">
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
          <button className="flex items-center justify-center w-6 h-6 ml-1 rounded hover:bg-neutral-600 hover:text-primary">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
        <div id="channels_list " className="pl-4">
          <a
            className="flex items-center h-8 pr-3 text-sm text-primary"
            href="#"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-2 font-bold leading-none">
              council-of-elrond
            </span>
          </a>
          <a
            className="flex items-center h-8 pr-3 text-sm hover:bg-neutral-600 hover:text-primary"
            href="#"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-2 leading-none">the-fellowship</span>
          </a>
          <a
            className="flex items-center h-8 pr-3 text-sm hover:bg-neutral-600 hover:text-primary"
            href="#"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-2 leading-none">and-another</span>
          </a>
          <a
            className="flex items-center h-8 pr-3 text-sm hover:bg-neutral-600 hover:text-primary"
            href="#"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-2 font-bold leading-none">
              second-breakfast-fans
            </span>
          </a>
          <a
            className="flex items-center h-8 pr-3 text-sm hover:bg-neutral-600 hover:text-primary"
            href="#"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-2 leading-none">anduril-smithy-club</span>
          </a>
        </div>
      </div>
    </div>
  );
};
