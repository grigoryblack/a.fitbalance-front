import React from 'react';
import InputMask from 'react-input-mask';
import Input from "../../Widgets/Inputs/Input/Input.tsx";
import { Skeleton } from 'antd';

interface PhoneInputProps {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    loading?: boolean; // Добавляем пропс для состояния загрузки
}

const PhoneInput: React.FC<PhoneInputProps> = (props) => {
    const { loading, ...rest } = props;

    return loading ? (
        <Skeleton.Input active={true} size="large"/>
    ) : (
        <InputMask
            mask="+7 (999) 999-99-99"
            value={props.value || "+7 "}
            onChange={props.onChange}
            onBlur={props.onBlur}
            onFocus={props.onFocus}
            {...rest}
        >
            {(inputProps: any) => <Input {...inputProps} />}
        </InputMask>
    );
};

export default PhoneInput;
