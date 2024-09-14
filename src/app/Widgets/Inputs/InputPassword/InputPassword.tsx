import { ConfigProvider, Input as AntInput, InputProps } from 'antd';
import inputPasswordStyles from "./InputPasswordStyles.js";
const InputPassword: React.FC<InputProps> = (props) => {
    return (
        <ConfigProvider theme={inputPasswordStyles}>
            <AntInput.Password {...props} />
        </ConfigProvider>
    );
};

export default InputPassword;
