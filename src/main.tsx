import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import { StoreProvider } from "@context/Store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
   <StoreProvider>
   <ChakraProvider>
      <App />
    </ChakraProvider>
   </StoreProvider>
  </React.StrictMode>
);
