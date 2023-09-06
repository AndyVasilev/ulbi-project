import React, { Suspense } from 'react';
// router
import { AppRouter } from 'app/providers/router';
// theme
import { useTheme } from 'app/providers/ThemeProvider';
// helpers
import { classNames } from 'shared/lib/classNames/classNames';
// widgets
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
// styles
import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="loading">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
