import {useState} from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import {Button, ConfigProvider, Menu} from 'antd';
import {menuItems} from "../../../assets/Constants/MenuConstants.tsx";
import MainMenuStyle from './MainMenuStyle.js';

// Мас
const MainMenu: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const toggleCollapsed = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <ConfigProvider theme={MainMenuStyle}>
            <div style={{width: 256}}>
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

export default MainMenu;
