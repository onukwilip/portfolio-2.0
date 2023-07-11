import React, { useRef, FC, useEffect } from "react";
import { useNProgress } from "@tanem/react-nprogress";
import css from "../styles/Loader.module.scss";
import { gsap } from "gsap";

const Loader: FC<{ isAnimating: boolean }> = ({ isAnimating }) => {
  const { progress } = useNProgress({
    isAnimating: isAnimating,
  });
  const loaderRef = useRef<HTMLDivElement>(null);
  const bubble1Ref = useRef<HTMLDivElement>(null);
  const bubble2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(loaderRef.current, {
      animationFillMode: "forwards",
      height: `${Math.round(progress * 100)}%`,
    });

    if (bubble1Ref.current && bubble2Ref.current) {
      if (Math.round(progress * 100) > 25) {
        bubble1Ref.current.classList.add("bubble1-animate");
        bubble2Ref.current.classList.add("bubble2-animate");
      }
      if (Math.round(progress * 100) > 93) {
        bubble1Ref.current.classList.remove("bubble1-animate");
        bubble2Ref.current.classList.remove("bubble2-animate");
      }
    }
  }, [progress]);

  return (
    <div className={css.loading}>
      <div className={css.battery}>
        <div ref={loaderRef}>
          <div className={css.bubble1} ref={bubble1Ref}></div>
          <div className={css.bubble2} ref={bubble2Ref}></div>
        </div>
        <span>{Math.round(progress * 100)}%</span>
      </div>
    </div>
  );
};

export default Loader;
