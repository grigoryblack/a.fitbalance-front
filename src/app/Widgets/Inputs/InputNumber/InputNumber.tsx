import { ConfigProvider, InputNumber as AntInputNumber, InputNumberProps, Skeleton } from 'antd';
import inputNumberStyles from "./InputNumberStyles.js";

interface CustomInputNumberProps extends InputNumberProps {
    loading?: boolean; // Пропс для состояния загрузки
}

const InputNumber: React.FC<CustomInputNumberProps> = (props) => {
    const { loading, ...rest } = props;

    return (
        <ConfigProvider theme={inputNumberStyles}>
            {loading ? (
                <Skeleton.Input active={true}/>
            ) : (
                <AntInputNumber {...rest} />
            )}
        </ConfigProvider>
    );
};

export default InputNumber;
