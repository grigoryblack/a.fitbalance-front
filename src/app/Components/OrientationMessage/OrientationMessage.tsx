import React, {useEffect, useState} from 'react';
import styles from './OrientationMessage.module.scss'; // Импорт стилей

const isMobileDevice = () => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    // Установите пороги ширины для различения мобильных устройств и планшетов
    return isTouchDevice && screenWidth <= 1000 && screenHeight <= 450;
};

const OrientationMessage = ({ children }) => {
    const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);
    const [isMobile, setIsMobile] = useState(isMobileDevice());

    const handleResize = () => {
        setIsPortrait(window.innerHeight > window.innerWidth);
        setIsMobile(isMobileDevice());
    };

    useEffect(() => {
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Debugging
    console.log('isPortrait:', isPortrait);
    console.log('isMobile:', isMobile);

    return (
        <div>
            {isMobile && !isPortrait && (
                <div className={styles.orientation__message}>
                    <p>
                        Для корректной работы приложения, пожалуйста, <br/>
                        поверните устройство вертикально.
                    </p>
                </div>
            )}
            {(isPortrait || !isMobile) && children}
        </div>
    );
};

export default OrientationMessage;
