import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store, { history } from "../../store";
// CC
import Content from "../Content";
import SideBar from "../SideBar";
// UI
import { GlobalStyle } from "./@ui";

const theme = {
  color: "black",
};

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <Content />
            <SideBar />
          </>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default App;
