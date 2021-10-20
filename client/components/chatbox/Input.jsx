import { EmojiHappyIcon } from "@heroicons/react/solid";
import "emoji-mart-virtualized/css/emoji-mart.css";
import Picker from "emoji-mart-virtualized/dist/components/picker/picker";
import { useCallback, useMemo, useRef, useState } from "react";
import { Send } from "react-feather";
import { useDispatch } from "react-redux";
import { useOnClickOutside } from "../../lib/hooks/use-outsideclick";
import { useToggle } from "../../lib/hooks/use-toggle";
import { SEND_MESSAGE } from "../../lib/redux/actions";
import { clsx } from "../../lib/utils/clsx";

export const ChatInput = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const textField = useRef(null);
  const emojiRef = useRef(null);

  const [showPicker, setShowPicker] = useState(false);

  useOnClickOutside(emojiRef, () => setShowPicker(false));

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

  const renderPicker = useMemo(() => {
    if (showPicker) {
      return (
        <Picker
          showPreview={false}
          title=""
          showSkinTones={false}
          theme="dark"
          style={{ position: "absolute", bottom: "110%", right: "5%" }}
        />
      );
    }
    return null;
  }, [showPicker]);

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

        <button
          onClick={() => setShowPicker((p) => !p)}
          className={clsx([
            "flex items-center justify-center flex-shrink mx-4 rounded",
            showPicker ? "text-primary" : " hover:text-primary text-neutral-300",
          ])}
        >
          <div ref={emojiRef}>
            {renderPicker}
            <EmojiHappyIcon className="p-0 fill-current w-7 h-7" />
          </div>
        </button>

        <button
          type="submit"
          onClick={handleSendMessage}
          className="flex items-center justify-center flex-shrink rounded hover:text-primary text-neutral-300"
        >
          <Send className="stroke-current w-7 h-7" />
        </button>
      </div>
    </div>
  );
};
