import React from "react";

import { ThemeProvider } from "@material-ui/styles";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import theme from "./utils/theme";
import BaseRouter from "./utils/routes";
import Layout from "./components/Layout";
import store, { persistor } from "./store";

function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Router>
            <Layout>
              <BaseRouter />
            </Layout>
          </Router>
        </ThemeProvider>
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
