// menuItems.ts
import {
    LogoutOutlined,
    UserOutlined,
    MailOutlined,
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
        label: 'Navigation One',
        icon: <MailOutlined />,
        children: [
            { key: '4', label: 'Option 5' },
        ],
    },
    { key: '5', icon: <LogoutOutlined />, label: 'Выход' },
];
