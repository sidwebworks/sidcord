import { EmojiHappyIcon } from "@heroicons/react/solid";
import { useCallback, useRef, useState } from "react";
import { CloudLightning, Send, Zap } from "react-feather";
import { useDispatch } from "react-redux";
import { SEND_MESSAGE } from "../../lib/redux/actions";

export const ChatInput = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const textField = useRef(null);

  const handleSendMessage = () => {
    const message = {
      sender: "Sidharth",
      body: input,
      date: Date.now(),
    };

    dispatch(SEND_MESSAGE(message));
  };

  const handleUserKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSendMessage(e);
    }
  };

  const updateFieldHeight = useCallback(() => {
    const element = textField.current;
    element.style.height = "";
    element.style.height = element.scrollHeight + "px";
  }, [textField.current]);

  return (
    <div className="relative bottom-0 px-4 py-2 bg-neutral-600">
      <div className="flex items-center h-auto rounded-sm">
        <textarea
          autoFocus="on"
          ref={textField}
          autoComplete="off"
          value={input}
          onKeyPress={handleUserKeyPress}
          onInput={updateFieldHeight}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow px-3 ml-1 text-sm border-0 rounded-md max-h-32 bg-base-200 focus:ring-2 focus:ring-opacity-60 focus:ring-primary-focus textarea"
          placeholder="Message council-of-elrond"
          rows={1}
          style={{ resize: "vertical" }}
        />

        <button className="flex items-center justify-center flex-shrink w-6 h-6 mx-2 rounded hover:text-primary">
          <EmojiHappyIcon className="w-6 h-6 fill-current" />
        </button>

        <button
          type="submit"
          onClick={handleSendMessage}
          className="flex items-center justify-center flex-shrink w-6 h-6 rounded hover:text-primary"
        >
          <Send />
        </button>
      </div>
    </div>
  );
};
