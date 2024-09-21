import { ConfigProvider, Input as AntInput, InputProps, Skeleton } from 'antd';
import inputPasswordStyles from "./InputPasswordStyles.js";

interface CustomInputPasswordProps extends InputProps {
    loading?: boolean; // Пропс для состояния загрузки
}

const InputPassword: React.FC<CustomInputPasswordProps> = (props) => {
    const { loading, ...rest } = props;

    return (
        <ConfigProvider theme={inputPasswordStyles}>
            {loading ? (
                <Skeleton.Input active={true}/>
            ) : (
                <AntInput.Password {...rest} />
            )}
        </ConfigProvider>
    );
};

export default InputPassword;
