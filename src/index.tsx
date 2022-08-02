import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import { ThemeManager } from "./features/ui/theme/ThemeManager";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./features/ui/globalStyle";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <ThemeManager>
        <Router>
          <Routes>
            <Route path='/*' element={<App />} />
          </Routes>
        </Router>
      </ThemeManager>
    </Provider>
  </React.StrictMode>
);
