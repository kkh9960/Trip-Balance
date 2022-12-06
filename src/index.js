import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux/es";
import store from "./redux/config/configStore";

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

// process.env.NODE_ENV === "production" &&
Sentry.init({
  dsn: "https://9aa453fb7e50441ea380ce5cdbaddf58@o4504258409005056.ingest.sentry.io/4504258414837760",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
