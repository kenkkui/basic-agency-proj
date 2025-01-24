import clsx from "clsx";
import LoadingHeadingText from "./LoadingHeadingText";
import LoadingHeadingAnimation from "./LoadingHeadingAnimation";

const Loading = () => {
  // 1. make invisible none movable skeleton heading in the center of the screen
  // 2. make it twice to show the effect of the heading in the center using absolute position
  // 3.

  return (
    <section className="w-screen h-screen bg-white flex justify-center items-center">
      <div className="bg-yellow-200 relative text-[128px] leading-[0.9] uppercase font-black tracking-tight">
        <LoadingHeadingText hide />

        <LoadingHeadingAnimation>
          <LoadingHeadingText />
        </LoadingHeadingAnimation>
      </div>
    </section>
  );
};

export default Loading;
