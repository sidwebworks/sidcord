import { EmojiHappyIcon } from "@heroicons/react/solid";
import "emoji-mart-virtualized/css/emoji-mart.css";
import Picker from "emoji-mart-virtualized/dist/components/picker/picker";
import { useCallback, useContext, useMemo, useRef, useState } from "react";
import { Send } from "react-feather";
import { useDispatch } from "react-redux";
import { MessageContext } from ".";
import { useOnClickOutside } from "../../lib/hooks/use-outsideclick";
import { SEND_MESSAGE } from "../../lib/redux/actions";
import { clsx } from "../../lib/utils/clsx";

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
          className="flex-grow px-3 ml-1 text-sm border-0 rounded-md max-h-44 focus:ring-2 focus:ring-opacity-30 focus:ring-primary-focus textarea-ghost textarea bg-base-200 focus:bg-neutral-600 "
          placeholder="Message council-of-elrond"
          style={{ resize: "vertical" }}
        />
        <EmojiPicker />
        <button
          type="submit"
          onClick={handleSendMessage}
          className="flex items-center justify-center flex-shrink rounded hover:text-primary text-neutral-300"
        >
          <Send className="w-6 h-6 stroke-current" />
        </button>
      </div>
    </div>
  );
};

const EmojiPicker = () => {
  const emojiRef = useRef(null);

  const [showPicker, setShowPicker] = useState(false);

  useOnClickOutside(emojiRef, () => setShowPicker(false));

  const computedChild = useMemo(() => {
    return (
      <div
        ref={emojiRef}
        style={{ position: "absolute", bottom: "110%", right: "5%" }}
      >
        <Picker
          showPreview={false}
          title=""
          showSkinTones={false}
          theme="dark"
        />
      </div>
    );
  }, []);

  return (
    <>
      {showPicker && computedChild}

      <button
        onClick={() => setShowPicker((p) => !p)}
        className={clsx([
          "flex items-center justify-center flex-shrink mx-4 rounded",
          showPicker ? "text-primary" : " hover:text-primary text-neutral-300",
        ])}
      >
        <EmojiHappyIcon className="w-6 h-6 p-0 fill-current" />
      </button>
    </>
  );
};
