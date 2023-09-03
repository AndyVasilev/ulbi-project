// libs
import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import "shared/config/i18n/i18n";
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
