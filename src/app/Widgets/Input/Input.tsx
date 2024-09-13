import { ConfigProvider, Input as AntInput, InputProps } from 'antd';
import inputStyles from "./InputStyles.js";
const Input: React.FC<InputProps> = (props) => {
    return (
        <ConfigProvider theme={inputStyles}>
            <AntInput {...props} />
        </ConfigProvider>
    );
};

export default Input;
