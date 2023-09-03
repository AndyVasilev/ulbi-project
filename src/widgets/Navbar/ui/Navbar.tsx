import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
// styles
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <AppLink theme={AppLinkTheme.PRIMARY} to={'/'}>Главная</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/About'}>О сайте</AppLink>
        </div>
    );
};
