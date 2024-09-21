import { ConfigProvider, Input as AntInput, InputProps, Skeleton } from 'antd';
import inputStyles from "./InputStyles.js";

interface CustomInputProps extends InputProps {
    loading?: boolean; // Добавляем пропс для состояния загрузки
}

const Input: React.FC<CustomInputProps> = (props) => {
    const { loading, ...rest } = props;

    return (
        <ConfigProvider theme={inputStyles}>
            {loading ? (
                <Skeleton.Input active={true} size="large" />
            ) : (
                <AntInput {...rest} />
            )}
        </ConfigProvider>
    );
};

export default Input;
