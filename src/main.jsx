import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ScrollPositionProvider } from "./context/ScrollPositionContext";
import { MousePositionProvider } from "./context/MousePositionContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ScrollPositionProvider>
    <MousePositionProvider>
      <App />
    </MousePositionProvider>
  </ScrollPositionProvider>
  // </React.StrictMode>,
);
