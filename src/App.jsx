import React from "react";
import ScrollPositionContext from "./context/ScrollPosition.Context";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Sample from "./components/Sample";
import Scrollbar from "smooth-scrollbar";
import Label from "./components/Label";
const App = () => {
  const scrollEl = React.useRef(null);
  const navbarFixed = React.useRef(null);
  const item1Fixed = React.useRef(null)
  const {  scrollingContextData , setScrollingContextData} = React.useContext(ScrollPositionContext);
  

  const options = {
    damping: 0.03,
  };

  React.useEffect(() => {
    const scrollbar = Scrollbar.init(scrollEl.current, options);
    setScrollingContextData(prev=>({...prev, element:scrollbar}))
    const listen = scrollbar.addListener((status) => {
      if (navbarFixed.current) {
        navbarFixed.current.style.top = status.offset.y + "px";
      }
      setScrollingContextData(prev=>({...prev, navbarPos:status.offset.y}));
    });
   return()=>{
     scrollbar.removeListener(listen)
   }
    
  }, [scrollEl]);



  

  return (
    <div
      ref={scrollEl}
      className="h-screen bg-[#ffffff] relative text-gray-900 font-plus"
    >
      {/* banner */}
      {/* <div className=" w-full sticky h-8 bg-[#9675f7] z-[40]">
        <div className="h-full w-full container mx-auto relative flex justify-between items-center text-xs font-mori tracking-tight  text-white font-semibold ">
          <span className=" cursor-pointer">@rogel_cristobal</span>
          <span className=" cursor-pointer">Buy me a coffe</span>
        </div>
      </div> */}
      {/* nav */}
      <div
        ref={navbarFixed}
        className="h-[4.5rem] w-full sticky thin-box-divider top-0 z-[40] flex items-end justify-center "
      >
        <div className="container h-12 mx-auto flex thin-box-divider items-center relative justify-between  px-16">
          <div className="flex  w-full items-center justify-end gap-14 ">

            <span className="uppercase text-sm font-semibold"></span>
           {/* <div className="text-[1.3rem]  cursor-pointer w-fit p-1">
              <HiMagnifyingGlass />
            </div> */}
            <div className="flex  gap-16 capitalize  font-semibold tracking-tight font-plus text-sm">
              <span className=" cursor-pointer">docs</span>
              <span className=" cursor-pointer">tools</span>
            </div>
           
          </div>
          {/* search */}
        </div>
        <Label left text={`scrolling_position:${scrollingContextData.navbarPos}`}></Label>
      </div>
      {/* content */}
      <div className="thin-box-divider mt-12 container mx-auto px-8 h-auto min-h-[300vh]  relative box-border">
        <div className=" h-[70rem] w-fit thin-box-divider pt-40">
          <Sample></Sample>
        </div>
        
      </div>
    </div>
  );
};

export default App;
