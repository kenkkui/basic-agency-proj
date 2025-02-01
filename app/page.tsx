import Hero from "@/components/Hero/Hero";
import Loading from "@/components/Loading/Loading";
import LoadingHeadingText from "@/components/Loading/LoadingHeadingText";

export default function Home() {
  return (
    <>
      <Loading
        hiddenText={<LoadingHeadingText hide />}
        shownText={<LoadingHeadingText />}
      />
      <Hero />
    </>
  );
}
