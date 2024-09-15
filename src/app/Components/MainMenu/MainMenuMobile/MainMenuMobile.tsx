import React, { useState } from 'react';
import {ConfigProvider, Menu, MenuProps} from 'antd';
import { useNavigate } from 'react-router-dom';
import { menuItems } from '../../../../assets/Constants/MenuConstants.tsx';
import mainMenuMobileStyle from './MainMenuMobileStyles.js';
import styles from './MainMenuMobile.module.scss';
import Modal from "../../../Widgets/Modals/Modal.tsx";

const MainMenuMobile: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState<string>('');    const navigate = useNavigate();

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        if (e.key === '7') {
            setModalContent('Вы уверены, что хотите выйти?');
            setIsModalVisible(true);
        } else {
        }
    };

    const handleModalOk = () => {
        navigate('/sign-in'); // Перенаправление на страницу входа
        setIsModalVisible(false); // Закрыть модалку
    };

    const handleModalCancel = () => {
        setIsModalVisible(false); // Закрыть модалку
    };

    return (
        <ConfigProvider theme={mainMenuMobileStyle}>
            <div className={styles.menu__container}>
                <Menu
                    mode="horizontal"
                    theme="dark"
                    className={styles.mobile_menu}
                    items={menuItems}
                    onClick={handleMenuClick} // Обработчик кликов
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
