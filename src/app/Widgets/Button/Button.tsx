import { ConfigProvider, Button as AntButton, ButtonProps } from 'antd';
import buttonStyles from './ButtonStyles.js';
const Button: React.FC<ButtonProps> = (props) => {
    return (
        <ConfigProvider theme={buttonStyles}>
            <AntButton {...props}>
                {props.children}
            </AntButton>
        </ConfigProvider>
    );
};

export default Button;
