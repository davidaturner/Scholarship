import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Counter from "./components/Counter";
import { reducer } from "../src/reducers/Counter";

export const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById("root"));
