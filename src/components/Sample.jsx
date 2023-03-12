import React from "react";
import Scrollbar from "smooth-scrollbar";
import ScrollPositionContext from "../context/ScrollPosition.Context";
const Sample = () => {
  const ref = React.useRef(null);
  const { setScrollingContextData, scrollingContextData } = React.useContext(
    ScrollPositionContext
  );
  React.useEffect(() => {
    if (scrollingContextData.element && ref.current) {
      const scrollbar = scrollingContextData.element;
      scrollbar.addListener((status) => {
        ref.current.style.top = status.offset.y + 140 +"px";
      });
    }
  }, [scrollingContextData.element]);
  return (
    <span ref={ref} className="sticky  text-8xl font-plus tracking-tight font-medium thin-box-divider">
      Project01
    </span>
  );
};

export default Sample;
