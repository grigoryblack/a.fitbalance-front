import React from 'react';
import InputMask from 'react-input-mask';
import Input from "../../Widgets/Inputs/Input/Input.tsx";

const PhoneInput = (props: any) => (
    <InputMask
        mask="+7 (999) 999-99-99"
        value={props.value || "+7 "}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        {...props}
    >
        {(inputProps: any) => <Input {...inputProps} />}
    </InputMask>
);

export default PhoneInput;
