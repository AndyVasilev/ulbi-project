// libs
import React from "react";
import {Link} from "react-router-dom";
// router
import {AppRouter} from "app/providers/router";
// theme
import { useTheme } from "app/providers/ThemeProvider";
// helpers
import {classNames} from "shared/lib/classNames/classNames";
// styles
import "./styles/index.scss";

const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>

            <Link to={'/'}>Главная</Link>
            <Link to={'/About'}>О сайте</Link>

            <AppRouter />
        </div>
    );
};

export default App;
