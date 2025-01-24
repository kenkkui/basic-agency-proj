import LoadingHeadingText from "./LoadingHeadingText";
import LoadingHeadingAnimation from "./LoadingHeadingAnimation";

const Loading = () => {
  return (
    <section className="w-screen h-screen bg-white flex justify-center items-center">
      <div className=" relative text-[128px] leading-[0.9] uppercase font-black tracking-tight">
        <LoadingHeadingText hide />

        <LoadingHeadingAnimation>
          <LoadingHeadingText />
        </LoadingHeadingAnimation>
      </div>
    </section>
  );
};

export default Loading;
