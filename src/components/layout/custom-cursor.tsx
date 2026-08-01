"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const x = useMotionValue(-40);
  const y = useMotionValue(-40);
  const springX = useSpring(x, { stiffness: 500, damping: 36 });
  const springY = useSpring(y, { stiffness: 500, damping: 36 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (event: MouseEvent) => {
      x.set(event.clientX - 7);
      y.set(event.clientY - 7);
      const target = event.target as HTMLElement;
      setActive(Boolean(target.closest("a, button, input, textarea")));
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="custom-cursor"
      style={{ x: springX, y: springY }}
      animate={{ scale: active ? 2.25 : 1, opacity: active ? 0.55 : 0.9 }}
    />
  );
}
