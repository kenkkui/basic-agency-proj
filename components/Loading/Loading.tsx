import BrandName from "./BrandName";
import TransitionBackground from "../Background/TransitionBackground";
import LoadingHeadingText from "./LoadingHeadingText";

const Loading = () => {
  return (
    <section className="w-screen h-screen">
      <TransitionBackground />

      <BrandName hidden={<LoadingHeadingText hide />}>
        <LoadingHeadingText />
      </BrandName>
    </section>
  );
};

export default Loading;
