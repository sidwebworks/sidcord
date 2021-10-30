import { EmojiHappyIcon } from "@heroicons/react/solid";
import data from "emoji-mart-virtualized/data/twitter.json";
import NimblePicker from "emoji-mart-virtualized/dist/components/picker/nimble-picker";
import { useCallback, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Send } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { useOnClickOutside } from "../../lib/hooks/use-outsideclick";
import { clsx } from "../../lib/utils/clsx";
import { CHAT } from "lib/redux/actions";
import { nanoid } from "nanoid";

export const ChatInput = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, getValues, setValue } = useForm();
  const { user } = useSelector((state) => state.user);

  const handleSendMessage = (data, e) => {
    if (data.messageBody.trim() === "") return;

    const message = {
      sender: { name: user.username, avatar: user.avatar },
      body: data.messageBody,
      id: nanoid(),
      date: Date.now(),
    };

    dispatch(CHAT.SEND_MESSAGE(message));
    reset({ messageBody: "" });
    updateFieldHeight();
  };

  const handleUserKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit(handleSendMessage)(e);
    }
  };

  const updateFieldHeight = useCallback(() => {
    const element = document.querySelector("#message-input");
    element.style.height = "";
    element.style.height = element.scrollHeight + "px";
  }, []);

  const insertEmoji = (e) => {
    const prev = getValues();
    setValue("messageBody", (prev.messageBody += e.native));
  };

  return (
    <div className="relative bottom-0 px-4 py-2 bg-neutral-600">
      <form
        onSubmit={handleSubmit(handleSendMessage)}
        className="flex items-center h-auto rounded-sm"
      >
        <textarea
          autoFocus="on"
          id="message-input"
          autoComplete="off"
          onKeyPress={handleUserKeyPress}
          onInput={updateFieldHeight}
          {...register("messageBody")}
          className="flex-grow px-3 ml-1 text-sm border-0 rounded-md max-h-44 focus:ring-2 focus:ring-opacity-30 focus:ring-primary-focus textarea-ghost textarea bg-base-200 focus:bg-neutral-600 "
          placeholder="Start chatting..."
          style={{ resize: "vertical" }}
        />
        <EmojiPicker handler={insertEmoji} />
        <button
          type="submit"
          className="flex items-center justify-center flex-shrink rounded hover:text-primary text-neutral-300"
        >
          <Send className="w-6 h-6 stroke-current" />
        </button>
      </form>
    </div>
  );
};

const EmojiPicker = ({ handler }) => {
  const emojiRef = useRef(null);

  const [showPicker, setShowPicker] = useState(false);

  useOnClickOutside(emojiRef, () => setShowPicker(false));

  const computedChild = useMemo(() => {
    return (
      <div style={{ position: "absolute", bottom: "110%", right: "5%" }}>
        <NimblePicker
          showPreview={false}
          emojiTooltip={true}
          title=""
          onSelect={handler}
          set="twitter"
          data={data}
          showSkinTones={false}
          theme="dark"
          isNative="true"
        />
      </div>
    );
  }, []);

  return (
    <>
      <div>
        <div ref={emojiRef}>
          {showPicker && computedChild}

          <button
            onClick={() => setShowPicker((p) => !p)}
            className={clsx([
              "flex items-center justify-center focus:ring-2 outline-none focus:ring-indigo-600 flex-shrink mx-4 rounded",
              showPicker
                ? "text-primary"
                : " hover:text-primary text-neutral-300",
            ])}
          >
            <EmojiHappyIcon className="w-6 h-6 p-0 fill-current" />
          </button>
        </div>
      </div>
    </>
  );
};
