// menuItems.ts
import {
    LogoutOutlined,
    UserOutlined,
    SettingOutlined,
    HomeOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

// Определяем тип для элементов меню
type MenuItem = Required<MenuProps>['items'][number];

// Массив элементов меню
export const menuItems: MenuItem[] = [
    { key: '1', icon: <HomeOutlined />, label: 'Главная' },
    { key: '2', icon: <UserOutlined />, label: 'Профиль' },
    {
        key: 'sub1',
        label: 'Настройки',
        icon: <SettingOutlined />,
        theme: 'light',
        children: [
            { key: '4', label: 'Настройка приложения' },
            { key: '5', label: 'Настройка приложения' },
            { key: '6', label: 'Настройка приложения' },
        ],
    },
    { key: '7', icon: <LogoutOutlined />, label: 'Выход' },
];
