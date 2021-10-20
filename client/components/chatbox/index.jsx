import { useSelector } from "react-redux";
import { ChatInput } from "./Input";
import { MessageList } from "./MessagesList";

export const ChatBox = () => {
  const { messages } = useSelector((state) => state.chat);
  console.log("messages: ", messages);

  return (
    <div className="flex flex-col flex-grow">
      <ChatHeader
        title="My awesome channel"
        description="lemme think about it..."
      />
      <MessageList messages={messages} />
      <ChatInput />
    </div>
  );
};

const ChatHeader = ({ title, description }) => {
  return (
    <div className="flex items-center flex-shrink-0 h-16 px-4 bg-neutral-600">
      <div>
        <h1 className="text-sm font-bold leading-none">{title}</h1>
        <span className="text-xs leading-none">{description}</span>
      </div>
    </div>
  );
};

export * from "./channels/ChannelSidebar";
