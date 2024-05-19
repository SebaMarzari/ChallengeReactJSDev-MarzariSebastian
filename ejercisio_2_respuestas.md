# 2.1

La solucion ya esta implementada en el proyecto donde se definio un RootReducer el cual agrupa los reducers de `usuario` y `clientes/bots` para luego ser pasado al store.

# 2.2

Para agregar una nueva ruta a la aplicacion implementaria React Router, donde se deberia reestructurar el index para envolver la aplicacion en un BrowserRouter, para poder acceder a las diferentes rutas, luego de agregar el BrowseRouter se deberian definir las nuevas rutas de la App.

El index.tsx quedaria de la siguiente manera:

```Code
import "babel-polyfill";
import "react-app-polyfill/ie11";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import \* as serviceWorker from "./serviceWorker";
import App from "App";
import GlobalProvider from './context/GlobalProvider';
import { Provider } from 'react-redux';
import store from './redux/store';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <GlobalProvider>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </GlobalProvider>
);

serviceWorker.unregister();

```
