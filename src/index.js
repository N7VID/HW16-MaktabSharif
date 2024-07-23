import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import RootContextProvider from "./context/RootContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RootContextProvider>
      <App />
    </RootContextProvider>
  </React.StrictMode>
);
