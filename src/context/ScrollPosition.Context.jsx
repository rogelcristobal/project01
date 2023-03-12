import React from "react";

const ScrollPositionContext = React.createContext();

export const ScrollPositionProvider = ({ children }) => {
  const [scrollingContextData, setScrollingContextData] = React.useState({
    element:null,
  });
  return (
    <ScrollPositionContext.Provider value={{ scrollingContextData,setScrollingContextData }}>
      {children}
    </ScrollPositionContext.Provider>
  );
};

export default ScrollPositionContext;
