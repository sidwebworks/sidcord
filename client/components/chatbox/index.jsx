import { SlideOver } from "@components/ui/SlideOver";
import { useState } from "react";
import { Info } from "react-feather";
import { useSelector } from "react-redux";
import { ChatSidebar } from "./ChatSidebar";
import { ChatInput } from "./Input";
import { MessageList } from "./MessagesList";

export const ChatBox = () => {
  const { messages } = useSelector((state) => state.chat);

  return (
    <>
      <ChatSidebar />
      <div className="flex flex-col flex-grow">
        <ChatHeader
          title="My awesome channel"
          description="lemme think about it..."
        />
        <MessageList messages={messages} />
        <ChatInput />
      </div>
    </>
  );
};

const ChatHeader = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center flex-shrink-0 px-5 py-3.5 bg-neutral-600">
        <div className="mr-3 -mb-1">
          <h1 className="text-sm font-bold leading-none">{title}</h1>
          <span className="text-xs leading-none">{description}</span>
        </div>
        <Info
          onClick={() => setIsOpen((p) => !p)}
          className="ml-auto stroke-current"
        />
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
