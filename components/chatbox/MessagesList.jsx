import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Virtuoso } from "react-virtuoso";
import { Message } from "./message";
import isToday from "dayjs/plugin/isToday";
import dayjs from "dayjs";

dayjs.extend(isToday);

const START_INDEX = 0;
const INITIAL_ITEM_COUNT = 15;

export const MessageList = ({ channel }) => {
  const isCurrent = useRef(false);
  const virtuoso = useRef();
  const conversations = useSelector((s) => s.chat.conversations);
  const user = useSelector((s) => s.auth.user);

  const [visibleRange, setVisibleRange] = useState(["-", "-"]);

  const messages = useMemo(() => {
    let convo = conversations.find((el) => el.id === channel.conversation_id);
    if (!convo) return [];
    return convo.messages;
  }, [conversations]);

  useEffect(() => {
    if (messages[0]?.sender?.id === user._id) {
      return (isCurrent.current = true);
    }
    return (isCurrent.current = false);
  }, [messages]);

  const scrollToBottom = useCallback(() => {
    if (virtuoso.current) {
      virtuoso.current.scrollToIndex(messages.length - 1);
    }
  }, [virtuoso, messages, messages.length]);

  const scrollBottomOnFocus = useCallback(
    (event) => {
      if (event.target === window) {
        setTimeout(scrollToBottom, 100);
      }
    },
    [scrollToBottom]
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("focus", scrollBottomOnFocus);
    }

    return () => window.removeEventListener("focus", scrollBottomOnFocus);
  }, [scrollBottomOnFocus]);

  return (
    <Virtuoso
      followOutput={(isAtBottom) => {
        if (!isAtBottom && isCurrent.current) return "auto";
        return "smooth";
      }}
      initialTopMostItemIndex={INITIAL_ITEM_COUNT - 1}
      className="flex flex-col flex-grow py-3 overflow-auto bg-neutral-700"
      ref={virtuoso}
      itemContent={Row}
      initialTopMostItemIndex={messages.length ? messages.length - 1 : 0}
      data={messages}
      components={{
        Header: () => <div className="py-2 text-center">This is the start.</div>,
      }}
     
    />
  );
};

const Row = (i, msg) => {
  return (
    <Message
      date={msg.createdAt}
      sender={msg.sender}
      body={msg.body}
      index={i}
      key={msg._id}
    />
  );
};

const TimeDivider = ({ date }) => {
  return (
    <div className="flex flex-col items-center mt-2">
      <hr className="w-full" />
      <span className="flex items-center justify-center h-6 px-3 mx-auto -mt-3 text-xs font-semibold bg-white border rounded-full">
        {dayjs(date).format("DD/MM/YYYY")}
      </span>
    </div>
  );
};
