import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from './redux/addtocart/store';
import { Provider } from 'react-redux';
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Root element not found!"); // Ye error tab aayega jab root element nahi milega
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  //</React.StrictMode>
);

reportWebVitals();
