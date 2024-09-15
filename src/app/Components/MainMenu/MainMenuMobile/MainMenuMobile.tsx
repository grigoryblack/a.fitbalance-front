import React from 'react';
import {ConfigProvider, Menu} from 'antd';
import styles from './MainMenuMobile.module.scss';
import {menuItems} from "../../../../assets/Constants/MenuConstants.tsx";
import mainMenuMobileStyle from './MainMenuMobileStyles.js'

const MainMenuMobile = () => {
    return (
        <ConfigProvider theme={mainMenuMobileStyle}>
            <div className={styles.menu__container}>
                <Menu
                    mode="horizontal"
                    theme="dark"
                    className={styles.mobile_menu}
                    items={menuItems}
                />
            </div>
        </ConfigProvider>
    );
};

export default MainMenuMobile;
