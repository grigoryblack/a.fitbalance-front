import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Menu, MenuProps } from 'antd';
import { getMenuItems } from '../../../../assets/Constants/MenuConstants.tsx';
import mainMenuDesktopStyle from './MainMenuDesktopStyle.js';
import Modal from '../../../Widgets/Modals/Modal.tsx';
import styles from './MainMenuDesktopStyle.module.scss';
import {useDispatch} from "react-redux";
import {logout} from "../../../features/auth/authSlice.ts";

const MainMenuDesktop: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<string>('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleCollapsed = () => {
        setCollapsed(prev => !prev);
    };

    const menuItems = getMenuItems(navigate);

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        if (e.key === '5') {
            setModalContent('Вы уверены, что хотите выйти?');
            setIsModalVisible(true);
        }
    };

    const handleOk = () => {
        dispatch(logout());
        navigate('/sign_in');
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <ConfigProvider theme={mainMenuDesktopStyle}>
            <div className={styles.menu}>
                <Button
                    type="primary"
                    onClick={toggleCollapsed}
                    style={{ marginBottom: 16 }}
                >
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
                <Menu
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    inlineCollapsed={collapsed}
                    items={menuItems}
                    onClick={handleMenuClick}
                />
                <Modal
                    title="Выход"
                    open={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    okText="Да"
                    cancelText="Отмена"
                >
                    {modalContent}
                </Modal>
            </div>
        </ConfigProvider>
    );
};

export default MainMenuDesktop;
