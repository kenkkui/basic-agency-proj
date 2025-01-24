import clsx from "clsx";

interface LoadingHeadingProps {
  hide?: boolean;
}

const LoadingHeadingText = ({ hide }: LoadingHeadingProps) => {
  return (
    <div className={clsx("w-fit h-min", hide && "invisible")}>
      <div>basic</div>
      <div>/ dept®</div>
    </div>
  );
};

export default LoadingHeadingText;
