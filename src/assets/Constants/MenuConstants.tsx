// menuItems.ts
import {
    LogoutOutlined,
    UserOutlined,
    SettingOutlined,
    HomeOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

// Определяем тип для элементов меню
type MenuItem = Required<MenuProps>['items'][number];

// Функция, которая генерирует массив элементов меню
export const getMenuItems = (navigate: ReturnType<typeof useNavigate>): MenuItem[] => [
    {
        key: '1',
        icon: <HomeOutlined />,
        label: 'Главная',
        onClick: () => navigate('/') // Редирект на главную
    },
    {
        key: 'sub1',
        label: 'Профиль',
        icon: <UserOutlined />,
        theme: 'light',
        children: [
            {
                key: '2',
                label: 'Редактировать профиль',
                onClick: () => navigate('/profile')
            },
            {
                key: '3',
                label: 'Статистика',
                onClick: () => navigate('/profile/stats')
            },
        ],
    },
    {
        key: 'sub2',
        label: 'Настройки',
        icon: <SettingOutlined />,
        theme: 'light',
        children: [
            {
                key: '4',
                label: 'Настройка приложения',
                onClick: () => navigate('/settings')
            },
        ],
    },
    {
        key: '5',
        icon: <LogoutOutlined />,
        label: 'Выход',
    },
];
