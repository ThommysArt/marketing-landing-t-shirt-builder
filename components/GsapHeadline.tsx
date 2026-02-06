"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export function GsapHeadline({ text }: { text: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { y: 40, opacity: 0, filter: "blur(8px)" },
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "power4.out" },
    );
  }, []);

  return (
    <h1 ref={ref} className="text-balance text-5xl font-semibold leading-tight text-white md:text-7xl">
      {text}
    </h1>
  );
}
