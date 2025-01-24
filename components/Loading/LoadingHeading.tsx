import clsx from "clsx";

interface LoadingHeadingProps {
  hide?: boolean;
}

const LoadingHeading = ({ hide }: LoadingHeadingProps) => {
  return (
    <div
      className={clsx(
        "text-[128px] leading-[0.9] uppercase font-black tracking-tight",
        hide
          ? "invisible"
          : "absolute top-0 left-0 bg-red-400 h-10 overflow-hidden"
      )}
    >
      <div className="w-fit h-min">
        <div>basic</div>
        <div>/ dept®</div>
      </div>
    </div>
  );
};

export default LoadingHeading;
