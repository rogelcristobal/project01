import React from "react";
const MousePositionContext = React.createContext()


export const MousePositionProvider = ({children}) => {
  const [mousePos,setMousePos] = React.useState({})
  React.useEffect(()=>{
    const handleMouseMove=(e)=>{
        setMousePos({
            x:e.clientX,y:e.clientY
        })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return()=>{
        window.removeEventListener('moousemove',handleMouseMove)
    }
  },[])
  return (
    <MousePositionContext.Provider value={{mousePos}}>
      {children}
    </MousePositionContext.Provider>
  );
}

export default MousePositionContext;
