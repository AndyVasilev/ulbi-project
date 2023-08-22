// libs
import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
// components
import App from "./app/App";
// theme
import {ThemeProvider} from "app/providers/ThemeProvider";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
