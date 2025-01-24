import { m } from "framer-motion";

interface LoadingHeadingAnimationProps {
  children?: React.ReactNode;
}

const LoadingHeadingAnimation = ({
  children,
}: LoadingHeadingAnimationProps) => {
  return (
    <m.div
      className="absolute top-0 left-0 bg-red-400 overflow-hidden"
      initial={{ height: "100%" }}
      animate={{ height: 0 }}
      transition={{ duration: 0.2, delay: 0.2 }}
    >
      {children}
    </m.div>
  );
};

export default LoadingHeadingAnimation;
