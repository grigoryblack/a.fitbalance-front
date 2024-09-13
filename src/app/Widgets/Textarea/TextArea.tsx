import { ConfigProvider, Input, InputProps } from 'antd';
import textAreaStyles from './TextAreaStyles.js';

const { TextArea } = Input;

const ThemedTextArea: React.FC<InputProps> = (props) => {
    return (
        <ConfigProvider theme={textAreaStyles}>
            <TextArea {...props} />
        </ConfigProvider>
    );
};

export default ThemedTextArea;
