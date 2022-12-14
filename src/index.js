import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App/App.js";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-d51zxacvp344rhqs.us.auth0.com"
    clientId="uuzXt6PBE2q7FWcEOU2lgdq0qdgUWlez"
    redirectUri={window.location.origin}
    audience="https://dev-d51zxacvp344rhqs.us.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
