import Highlight, { defaultProps } from "prism-react-renderer";
import { clsx } from "../../../lib/utils/clsx";
import theme from "prism-react-renderer/themes/nightOwl";

const CodeBlock = (props) => {
  const language = props.className?.replace("lang-", "") || "plaintext";

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={props.children?.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          style={{
            ...style,
            borderRadius: "6px",
            padding: "0.7em",
          }}
          className={clsx([
            className,
            "rounded-md whitespace-pre-wrap break-normal  text-left",
          ])}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <code {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
