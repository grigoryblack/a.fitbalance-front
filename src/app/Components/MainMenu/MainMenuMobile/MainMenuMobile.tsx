import React, { useState } from 'react';
import { ConfigProvider, Menu, MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getMenuItems } from '../../../../assets/Constants/MenuConstants.tsx';
import mainMenuMobileStyle from './MainMenuMobileStyles.js';
import Modal from "../../../Widgets/Modals/Modal.tsx";
import styles from './MainMenuMobile.module.scss';
import {useAuth} from "../../../../context/AuthContext.tsx";
import {useDispatch} from "react-redux";
import {logout} from "../../../features/auth/authSlice.ts";

const MainMenuMobile: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState<string>('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const menuItems = getMenuItems(navigate);

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        if (e.key === '5') {
            setModalContent('Вы уверены, что хотите выйти?');
            setIsModalVisible(true);
        }
    };

    const handleModalOk = () => {
        dispatch(logout());
        navigate('/sign_in');
        setIsModalVisible(false);
    };


    const handleModalCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <ConfigProvider theme={mainMenuMobileStyle}>
            <div className={styles.menu__container}>
                <Menu
                    mode="horizontal"
                    theme="dark"
                    className={styles.mobile_menu}
                    items={menuItems}
                    onClick={handleMenuClick}
                />
            </div>
            <Modal
                title="Подтверждение выхода"
                centered
                open={isModalVisible}
                onCancel={handleModalCancel}
                onOk={handleModalOk}
                okText="Выход"
                cancelText="Отмена"
            >
                {modalContent}
            </Modal>
        </ConfigProvider>
    );
};

export default MainMenuMobile;
