import React from "react";
import { Provider } from "react-redux";

import Home from "./pages/Home";
import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <h1>Home</h1>
      <Home />
    </Provider>
  );
}

export default App;
