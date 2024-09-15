import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainMenuDesktop from './MainMenuDesktop/MainMenuDesktop';
import MainMenuMobile from './MainMenuMobile/MainMenuMobile';

const MainMenu = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/sign-in';
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (isLoginPage) {
        return null;
    }

    return (
        <>
            {isDesktop ? <MainMenuDesktop /> : <MainMenuMobile />}
        </>
    );
};

export default MainMenu;
