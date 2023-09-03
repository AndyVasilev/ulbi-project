// router
import {AppRouter} from "app/providers/router";
// theme
import { useTheme } from "app/providers/ThemeProvider";
// helpers
import {classNames} from "shared/lib/classNames/classNames";
// widgets
import {Navbar} from "widgets/Navbar";
// styles
import "./styles/index.scss";

const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>

            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;
