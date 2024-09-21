import { ConfigProvider, Select as AntSelect, SelectProps } from 'antd';
import selectStyles from "./SelectStyles.js";
const Select: React.FC<SelectProps> = (props) => {
    return (
        <ConfigProvider theme={selectStyles}>
            <AntSelect {...props}/>
        </ConfigProvider>
    );
};

export default Select;
