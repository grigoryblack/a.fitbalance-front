import { ConfigProvider, Switch as AntSwitch, SwitchProps } from 'antd';
import switchStyles from "./SwitchStyles.js";
const Switch: React.FC<SwitchProps> = (props) => {
    return (
        <ConfigProvider theme={switchStyles}>
            <AntSwitch {...props} />
        </ConfigProvider>
    );
};

export default Switch;
