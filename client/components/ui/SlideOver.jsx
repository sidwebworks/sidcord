import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { clsx } from "lib/utils/clsx";
import { useOnClickOutside } from "lib/hooks/use-outsideclick";

export const SlideOver = ({
  children,
  title,
  setIsOpen,
  isOpen = false,
  width = "max-w-sm",
  overlay = true,
}) => {
  const onClose = () => setIsOpen(false);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={onClose}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay
              className={clsx([
                "fixed inset-0 transition-opacity duration-500 ease-in-out bg-gray-900",
                overlay ? " bg-opacity-75" : " bg-opacity-0",
              ])}
            />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className={clsx(["relative w-screen", width])}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      className="rounded-md text-base-100 hover:text-primary focus:outline-none focus:ring-2 focus:ring-base-100"
                      onClick={onClose}
                    >
                      <span className="sr-only">Close panel</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex flex-col h-full py-6 overflow-y-scroll shadow-xl bg-neutral-700">
                  <div className="px-4 sm:px-6">
                    <Dialog.Title className="text-lg font-medium text-gray-900">
                      {title}
                    </Dialog.Title>
                  </div>
                  <div className="relative flex-1 px-4 mt-6 sm:px-6">
                    {children}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
