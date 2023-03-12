import React from "react";
import Scrollbar from "smooth-scrollbar";
import ScrollPositionContext from "../context/ScrollPosition.Context";
import Label from "./Label";
const Sample = () => {
  const ref = React.useRef(null);
  const {scrollingContextData } = React.useContext(
    ScrollPositionContext
  );
  // testing state only
  const [state,setState] = React.useState({pos:0,element:null})
  React.useEffect(() => {
    if (scrollingContextData.element && ref.current) {
      const scrollbar = scrollingContextData.element;
      scrollbar.addListener((status) => {
        ref.current.style.top = status.offset.y + 90 +"px";
        setState(prev=>({...prev,pos:status.offset.y}))
      });
      setState(prev=>({...prev, element: ref.current}))
    }
  }, [scrollingContextData.element]);

   if(ref.current){
    console.log(ref.current.getBoundingClientRect())
   }

  return (
    <div ref={ref}  className="sticky ">
    <span className={`relative text-8xl font-plus tracking-tight font-medium thin-box-divider ${scrollingContextData.navbarPos >= state.element?.offsetTop &&  scrollingContextData.navbarPos <= state.element?.offsetTop + state.element.getBoundingClientRect().height ? "text-blue-500":null}`}>
      Project01
      {/* testing purposes */}
      <Label top text={`el_position:${state.element?.offsetTop}`}></Label>
    </span>
    </div>
  );
};

export default Sample;
