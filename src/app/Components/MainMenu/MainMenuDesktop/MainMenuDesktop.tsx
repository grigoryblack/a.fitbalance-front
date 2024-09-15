import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Menu, MenuProps } from 'antd';
import { menuItems } from '../../../../assets/Constants/MenuConstants.tsx';
import mainMenuDesktopStyle from './MainMenuDesktopStyle.js';
import styles from './MainMenuDesktopStyle.module.scss';
import Modal from '../../../Widgets/Modals/Modal.tsx';

const MainMenuDesktop: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<string>('');
    const navigate = useNavigate();

    const toggleCollapsed = () => {
        setCollapsed(prev => !prev);
    };

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        if (e.key === '7') {
            setModalContent('Вы уверены, что хотите выйти?');
            setIsModalVisible(true);
        } else {
        }
    };

    const handleOk = () => {
        navigate('/sign-in');
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
