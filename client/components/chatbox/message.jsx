import { clsx } from "../../utils/clsx";
import Markdown from "markdown-to-jsx";

export const Message = (props) => {
  const { sender, body, date } = props;
  const userName = "Sidharth";

  return (
    <div
      className={clsx([
        "flex px-4 py-3",
        sender === userName && "flex-row-reverse",
      ])}
    >
      <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded" />
      <div className={clsx(["mx-2", sender === userName && "text-right"])}>
        <div className="-mt-1">
          <span className="text-sm font-semibold">{sender}</span>
          <span className="ml-1 text-xs text-gray-500">{date}</span>
        </div>
        <Markdown>{body}</Markdown>
        <Reactions />
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
