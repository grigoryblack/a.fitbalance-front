import { ConfigProvider, TimePicker as AntTimePicker, TimePickerProps } from 'antd';
import timePickerStyles from "./TimePickerStyles.js";
const TimePicker: React.FC<TimePickerProps> = (props) => {
    return (
        <ConfigProvider theme={timePickerStyles}>
            <AntTimePicker.RangePicker  {...props} />
        </ConfigProvider>
    );
};

export default TimePicker;
