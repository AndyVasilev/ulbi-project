import {Theme, useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
// icons
import LightThemeIcon from 'shared/assets/icons/sun.svg'
import DarkThemeIcon from 'shared/assets/icons/moon.svg'
// styles
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkThemeIcon /> : <LightThemeIcon />}
        </Button>
    );
};
