import { ConfigProvider, DatePicker as AntDatePicker, DatePickerProps } from 'antd';
import datePickerStyles from "./DatePickerStyles.js";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat)
const DatePicker: React.FC<DatePickerProps> = (props) => {
    const dateFormat = 'DD.MM.YYYY';
    return (
        <ConfigProvider theme={datePickerStyles}>
            <AntDatePicker {...props} format={dateFormat} />
        </ConfigProvider>
    );
};

export default DatePicker;
