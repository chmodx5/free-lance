import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/tailwind.css";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import theme from "./theme";
// import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <CssBaseLine /> */}
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>
);
