import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorkerRegistration from "./utils/serviceWorkerRegistration";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();
serviceWorkerRegistration.register();
