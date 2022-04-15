import ReactDOM from "react-dom";
import App from "./Components/App";
import { store } from "./Redux/Store/Store";
import { Provider } from "react-redux";


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
