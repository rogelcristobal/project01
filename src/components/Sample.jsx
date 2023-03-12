import React from "react";
import ScrollPositionContext from "../context/ScrollPositionContext";
import Label from "./Label";
import { motion, AnimatePresence } from "framer-motion";
const Sample = () => {
  const ref = React.useRef(null);
  const { scrollingContextData } = React.useContext(ScrollPositionContext);
  // testing state only
  const [state, setState] = React.useState({ pos: 0, element: null });
  React.useEffect(() => {
    if (scrollingContextData.element && ref.current) {
      const scrollbar = scrollingContextData.element;
      scrollbar.addListener((status) => {
        ref.current.style.top = status.offset.y + 120 + "px";
        setState((prev) => ({ ...prev, pos: status.offset.y }));
      });
      setState((prev) => ({ ...prev, element: ref.current }));
    }
  }, [scrollingContextData.element]);

  if (ref.current) {
    console.log(ref.current.getBoundingClientRect());
  }

  return (
    <AnimatePresence>
      <div ref={ref} className="sticky ">
        <motion.span
        initial={{
          fontSize:"6rem"
        }}
          animate={
            scrollingContextData.navbarPos >= state.element?.offsetTop &&
            scrollingContextData.navbarPos <=
              state.element?.offsetTop +
                state.element.getBoundingClientRect().height
              ? {
                  fontSize: "3.75rem",
                  color:"#9675f7"
                }
              : {
                fontSize:"6rem",
                color:"inherit"
              }
          }
          transition={{
            duration: 0.5,
          }}
          className={`relative text-8xl font-plus tracking-tight font-medium thin-box-divider `}
        >
          Project01
          {/* testing purposes */}
          <Label top text={`el_position:${state.element?.offsetTop}`}></Label>
        </motion.span>
      </div>
    </AnimatePresence>
  );
};

export default Sample;
