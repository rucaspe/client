import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import store, { history } from "../../store";
// CC
import Content from "../Content";
import SideBar from "../SideBar";

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <>
          <Content />
          <SideBar />
        </>
      </Router>
    </Provider>
  );
};

export default App;
