import { clsx } from "../../../lib/utils/clsx";

const Button = ({
  colorScheme = "blue",
  children,
  isLoading,
  className,
  ...props
}) => {
  return (
    <button className={clsx(["btn", className])} {...props}>
      {children}
    </button>
  );
};
export default Button;
