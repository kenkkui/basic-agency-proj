import clsx from "clsx";

interface LoadingHeadingProps {
  hide?: boolean;
}

const LoadingHeading = ({ hide }: LoadingHeadingProps) => {
  return (
    <div
      className={clsx(
        "h-min text-[128px] leading-[0.9] uppercase font-black tracking-tight",
        hide ? "invisible" : "absolute top-0 left-0"
      )}
    >
      <div>basic</div>
      <div>/ dept®</div>
    </div>
  );
};

export default LoadingHeading;
