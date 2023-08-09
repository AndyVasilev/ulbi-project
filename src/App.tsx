// libs
import React, { Suspense } from "react";
import {Link, Route, Routes} from "react-router-dom";
// pages
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
// styles
import "./index.scss";

const App = () => {
    return (
        <div className="app">
            <Link to={'/'}>Главная</Link>
            <Link to={'/About'}>О сайте</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
