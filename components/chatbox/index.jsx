import { SlideOver } from "@components/ui/SlideOver";
import { useEffect, useState } from "react";
import { Info } from "react-feather";
import { useSelector } from "react-redux";
import { ChatSidebar } from "./ChatSidebar";
import { ChatInput } from "./Input";
import { MessageList } from "./MessagesList";

export const ChatBox = () => {
  const channel = useSelector((s) => s.chat.current_channel);

  return (
    <>
      <ChatSidebar />
      {channel ? (
        <div className="flex flex-col flex-grow">
          <ChatHeader
            title="My awesome channel"
            description="lemme think about it..."
          />
          <MessageList channel={channel} />
          <ChatInput />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

const ChatHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const channel = useSelector((s) => s.chat.current_channel);
  const title = channel?.title || "Loading...";

  return (
    <>
      <div className="flex items-center flex-shrink-0 px-5 py-3.5 bg-neutral-600">
        <div className="mr-3 -mb-1">
          <h1 className="font-bold leading-none "># {title}</h1>
        </div>
        <button className="ml-auto text-gray-400 ">
          <Info
            onClick={() => setIsOpen((p) => !p)}
            className="stroke-current"
          />
        </button>
      </div>
      <SlideOver
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        width="max-w-xs"
        overlay={false}
      />
    </>
  );
};
