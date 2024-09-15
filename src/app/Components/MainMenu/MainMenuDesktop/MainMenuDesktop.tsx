import {useState} from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import {Button, ConfigProvider, Menu} from 'antd';
import {menuItems} from "../../../../assets/Constants/MenuConstants.tsx";
import mainMenuDesktopStyle from './MainMenuDesktopStyle.js';
import styles from './MainMenuDesktopStyle.module.scss'

// Мас
const MainMenuDesktop: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true);

    const toggleCollapsed = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <ConfigProvider theme={mainMenuDesktopStyle}>
            <div className={styles.menu}>
                <Button
                    type="primary"
                    onClick={toggleCollapsed}
                    style={{marginBottom: 16}}
                >
                    {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                </Button>
                <Menu
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    inlineCollapsed={collapsed}
                    items={menuItems}
                />
            </div>
        </ConfigProvider>
    );
};

export default MainMenuDesktop;
