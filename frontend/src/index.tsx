import "babel-polyfill";
import "react-app-polyfill/ie11";

import { createRoot } from "react-dom/client";
import * as serviceWorker from "./serviceWorker";
import App from "App";
// Provider
import GlobalProvider from './context/GlobalProvider';
import { Provider } from 'react-redux';
import store from './redux/store';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <GlobalProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </GlobalProvider>
);

serviceWorker.unregister();
