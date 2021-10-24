import { clsx } from "../../../lib/utils/clsx";
import Markdown from "markdown-to-jsx";
import CodeBlock from "./CodeBlock";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import ImageBlock from "./ImageBlock";

dayjs.extend(relativeTime);

const Debug = (props) => {
  console.log("props: ", props);
  return <>{props.children}</>;
};

export const Message = (props) => {
  const { sender, body, date, index } = props;

  const userName = index % 3 === 0 ? "Sidharth" : "Chattan";

  const time = dayjs(date).format("h:m a");

  return (
    <div
      className={clsx([
        "flex px-4 py-3 w-full",
        sender === userName && "flex-row-reverse ",
      ])}
    >
      <img
        src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
        width={40}
        height={40}
        className="flex-shrink-0 object-cover w-12 h-12 bg-gray-300 rounded-full avatar"
      />
      <div
        className={clsx([
          "mx-2 max-w-prose xl:max-w-3xl  flex-col",
          sender === userName && "text-right",
        ])}
      >
        <div className="-mt-1">
          <span className="text-sm font-semibold">{sender}</span>
          <span className="ml-1 text-xs text-gray-500">{time}</span>
        </div>
        <div className="py-2">
          <Markdown
            options={{
              disableParsingRawHTML: true,

              overrides: {
                code: {
                  component: CodeBlock,
                },
                link: {
                  component: Debug,
                },
                a: {
                  component: Debug,
                },

                img: {
                  component: ImageBlock,
                },
              },
            }}
          >
            {body}
          </Markdown>
        </div>
        {/* <Reactions /> */}
        {/* <Replies /> */}
      </div>
    </div>
  );
};

const Replies = () => (
  <div className="flex items-center mt-2">
    <div className="flex-shrink-0 w-6 h-6 bg-gray-300 rounded" />
    <div className="flex-shrink-0 w-6 h-6 ml-1 bg-gray-300 rounded" />
    <a className="ml-1 text-xs font-medium text-blue-600" href="#">
      4 replies
    </a>
    <span className="ml-1 text-xs text-gray-600">
      Last reply today at 03:45
    </span>
  </div>
);

const Reactions = () => (
  <div className="flex mt-1 space-x-2">
    <button className="flex items-center h-5 pl-1 pr-2 text-xs bg-gray-300 rounded-full hover:bg-gray-400">
      <span>👎</span>
      <span className="ml-1 font-medium">1</span>
    </button>
    <button className="flex items-center h-5 pl-1 pr-2 text-xs bg-gray-300 rounded-full hover:bg-gray-400">
      <span>🤔</span>
      <span className="ml-1 font-medium">3</span>
    </button>
  </div>
);
