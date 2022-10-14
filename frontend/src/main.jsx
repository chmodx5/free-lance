import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/tailwind.css";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <CssBaseLine /> */}
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>
);
