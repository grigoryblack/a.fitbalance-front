import { ConfigProvider, Modal as AntModal, ModalProps } from 'antd';
import modalStyles from './ModalStyles.js';
const Modal: React.FC<ModalProps> = (props) => {
    return (
        <ConfigProvider theme={modalStyles}>
            <AntModal {...props}>
                {props.children}
            </AntModal>
        </ConfigProvider>
    );
};

export default Modal;
