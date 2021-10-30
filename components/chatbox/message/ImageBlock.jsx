import { clsx } from "../../../lib/utils/clsx";
import Image from "next/image";

const ImageBlock = (props) => {
  const { src, alt } = props;

  return (
    <img
      src={src}
      alt={alt}
      width={500}
      height={500}
      className="object-cover object-center max-w-sm p-2 rounded-lg bg-neutral-500"
      layout={"responsive"}
    />
  );
};

export default ImageBlock;
