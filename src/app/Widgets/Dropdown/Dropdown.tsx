import { ConfigProvider, Dropdown as AntDropdown, DropdownProps } from 'antd';
import dropdownStyles from "./DropdownStyles.js";
const Dropdown: React.FC<DropdownProps> = (props) => {
    return (
        <ConfigProvider theme={dropdownStyles}>
            <AntDropdown {...props} />
        </ConfigProvider>
    );
};

export default Dropdown;
