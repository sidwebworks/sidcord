import { useGetChannelChatQuery } from "lib/redux/api";
import { fetchChannelChat } from "lib/redux/api/chat.thunks";
import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Message } from "./message";

export const MessageList = ({ channel }) => {
  const scrollRef = useRef();
  const containerRef = useRef();
  const conversations = useSelector((s) => s.chat.conversations);

  const messages = useMemo(() => {
    let convo = conversations.find((el) => el.id === channel.conversation_id);
    if (!convo) return [];
    return convo.messages;
  }, [conversations]);

  useEffect(() => {
    if (scrollRef) {
      console.log(containerRef.current.scrollBottom);
      scrollRef.current.scrollIntoView({
        behavior: containerRef.current.scrollBottom < 20 ? "smooth" : "auto",
        block: "nearest",
        inline: "end",
      });
    }
  }, [messages]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col flex-grow py-3 overflow-auto bg-neutral-700"
    >
      {messages.map((msg, i) => (
        <Message
          date={msg.createdAt}
          sender={msg.sender}
          body={msg.body}
          index={i}
          key={msg._id}
        />
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
