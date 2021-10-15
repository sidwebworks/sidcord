import { ChatInput } from "./input";
import { MessageList } from "./messagesList";

export const ChatBox = () => {
  const list = [
    {
      sender: "Sidharth",
      body: "- Hello there I am Sid!!! \n  - Hello there I am Sid!!!",
      date: "01:26",
    },
    {
      sender: "Chattan",
      body: "- Hello there I am Sid!!! \n  - Hello there I am Sid!!!",
      date: "01:26",
    },
    {
      sender: "Sidharth",
      body: "- Hello there I am Sid!!! \n  - Hello there I am Sid!!!",
      date: "01:26",
    },
    {
      sender: "Chattan",
      body: "- Hello there I am Sid!!! \n  - Hello there I am Sid!!!",
      date: "01:26",
    },
    {
      sender: "Sidharth",
      body: "oaskdoasdkasd",
      date: "01:26",
    },
    {
      sender: "Chattan",
      body: "- Hello there I am Sid!!! \n  - Hello there I am Sid!!!",
      date: "01:26",
    },
    {
      sender: "Sidharth",
      body: "- Hello there I am Sid!!! \n  - Hello there I am Sid!!!",
      date: "01:26",
    },
    {
      sender: "Chattan",
      body: "- Hello there I am Sid!!! \n  - Hello there I am Sid!!!",
      date: "01:26",
    },
  ];

  return (
    <div className="flex flex-col flex-grow">
      <ChatHeader
        title="My awesome channel"
        description="lemme think about it..."
      />
      <MessageList messages={list} />
      <ChatInput />
    </div>
  );
};

const ChatHeader = ({ title, description }) => {
  return (
    <div className="flex items-center flex-shrink-0 h-16 px-4 bg-white border-b border-gray-300">
      <div>
        <h1 className="text-sm font-bold leading-none">{title}</h1>
        <span className="text-xs leading-none">{description}</span>
      </div>
    </div>
  );
};


