import { ConfigProvider, Checkbox as AntCheckbox, CheckboxProps } from 'antd';
import checkboxStyles from "./checkboxStyles.js";

const Checkbox: React.FC<CheckboxProps> = (props) => {
    return (
        <ConfigProvider theme={checkboxStyles}>
            <AntCheckbox {...props} />
        </ConfigProvider>
    );
};

export default Checkbox;
