import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Message } from "./message";

export const MessageList = () => {
  const { messages } = useSelector((state) => state.chat);

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "end",
      });
    }
  }, [messages]);

  return (
    <div className="flex flex-col flex-grow py-3 overflow-auto bg-neutral-700">
      {messages.map((msg, i) => (
        <Message {...msg} index={i} key={msg.id} />
      ))}
      <span ref={scrollRef} />
    </div>
  );
};

const TimeDivider = ({ date }) => {
  return (
    <div className="flex flex-col items-center mt-2">
      <hr className="w-full" />
      <span className="flex items-center justify-center h-6 px-3 mx-auto -mt-3 text-xs font-semibold bg-white border rounded-full">
        {date}
      </span>
    </div>
  );
};
