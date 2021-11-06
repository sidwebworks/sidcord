import { Dialog, Transition } from "@headlessui/react";
import { CHAT, UI } from "lib/redux/actions";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { PlusSquare } from "react-feather";
const ServersModal = ({ servers }) => {
  const isOpen = useSelector((state) => state.ui.chat.show_channel_modal);

  const dispatch = useDispatch();

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => dispatch(UI.TOGGLE_CHANNEL_MODAL(false))}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl bg-neutral-600 rounded-xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-semibold leading-6 capitalize"
              >
                <h2>Switch Current Server:</h2>
              </Dialog.Title>
              {/*  */}

              <main className="grid grid-cols-4 grid-rows-2 gap-4 py-4 sm:grid-cols-6 ">
                {servers?.length &&
                  servers.map((el) => (
                    <ServerButton server={el} key={el._id} src={el.image} />
                  ))}

                <AddNewButton />
              </main>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

const ServerButton = React.memo((props) => {
  const server = props.server;
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(CHAT.JOIN_SERVER({ server }))}
      className="relative p-2 overflow-hidden border-2 rounded-md border-primary "
    >
      <img
        src={props.src}
        loading="eager"
        layout="responsive"
        className="object-cover"
      />
    </div>
  );
});

const AddNewButton = (props) => {
  return (
    <div className="relative order-last p-3">
      <PlusSquare className="w-full h-full stroke-current text-primary" />
    </div>
  );
};

export default ServersModal;
