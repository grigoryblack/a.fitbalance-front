import { ConfigProvider, InputNumber as AntInputNumber, InputNumberProps } from 'antd';
import inputNumberStyles from "./InputNumberStyles.js";
const InputNumber: React.FC<InputNumberProps> = (props) => {
    return (
        <ConfigProvider theme={inputNumberStyles}>
            <AntInputNumber {...props} />
        </ConfigProvider>
    );
};

export default InputNumber;
