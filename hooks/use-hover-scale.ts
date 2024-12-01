// hooks/use-hover-scale.ts
import { useSpring } from "framer-motion";

export function useHoverScale() {
  const scale = useSpring(1, {
    stiffness: 300,
    damping: 30,
  });

  const onMouseEnter = () => scale.set(1.05);
  const onMouseLeave = () => scale.set(1);

  return { scale, onMouseEnter, onMouseLeave };
}
