import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./globalStyles";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    teal: "rgb(0, 128, 128)",
    white: "rgb(255, 255, 255)",
    grey: "rgb(214, 214, 214)",
  },
  breakpoints: {
    mobile: "767",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
