import {
    LogoutOutlined,
    UserOutlined,
    SettingOutlined,
    CalendarOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from "../../app/features/store.ts";

// Определяем тип для элементов меню
type MenuItem = Required<MenuProps>['items'][number];

export const getMenuItems = (navigate: ReturnType<typeof useNavigate>): MenuItem[] => {
    const user = useSelector((state: RootState) => state.auth.user);

    const isConfirmed = user?.isConfirmed;

    return [
        {
            key: '1',
            icon: <CalendarOutlined />,
            label: 'Тренировки',
            onClick: () => navigate('/calendar'),
            disabled: !isConfirmed, // Блокируем, если не подтвержден
        },
        {
            key: 'sub1',
            label: 'Профиль',
            icon: <UserOutlined />,
            theme: 'light',
            children: [
                {
                    key: '2',
                    label: 'Мой профиль',
                    onClick: () => navigate('/profile'),
                },
                {
                    key: '3',
                    label: 'Статистика',
                    onClick: () => navigate('/profile/stats'),
                    disabled: !isConfirmed,
                },
            ],
        },
        {
            key: 'sub2',
            label: 'Настройки',
            icon: <SettingOutlined />,
            theme: 'light',
            disabled: !isConfirmed,
            children: [
                {
                    key: '4',
                    label: 'Настройка приложения',
                    onClick: () => navigate('/settings'),
                    disabled: !isConfirmed,
                },
            ],
        },
        {
            key: '5',
            icon: <LogoutOutlined />,
            label: 'Выход',
        },
    ];
};
