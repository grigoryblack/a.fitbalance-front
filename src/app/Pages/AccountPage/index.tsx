import React, { useState, useEffect } from 'react';
import { Form, notification } from 'antd';
import Input from "../../Widgets/Inputs/Input/Input.tsx";
import Button from "../../Widgets/Button/Button.tsx";
import PhoneInput from "../../Components/PhoneInputMask/PhoneInput.tsx";
import styles from './AccountPage.module.scss';
import Table from "../../Widgets/Table/Table.tsx";
import Services from "./Services/Services.tsx";
import Students from "./Students/Students.tsx";

const AccountPage: React.FC = () => {
    const [form] = Form.useForm();
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [initialValues, setInitialValues] = useState<any>({});

    useEffect(() => {
        const initial = {
            firstName: 'Иван',
            lastName: 'Иванов',
            phone: '+7 (123) 456-78-90',
            email: 'ivanov@example.com',
        };
        setInitialValues(initial);
        form.setFieldsValue(initial);
    }, [form]);

    const checkFormChanges = () => {
        const currentValues = form.getFieldsValue(true);
        return JSON.stringify(initialValues) !== JSON.stringify(currentValues);
    };

    const handleFormChange = () => {
        setIsEditing(checkFormChanges());
    };

    const handleSubmit = (values: any) => {
        notification.success({
            message: 'Профиль обновлен',
            description: 'Ваши данные были успешно обновлены.',
        });
        setInitialValues(values);
        setIsEditing(false);
    };

    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <h1>Профиль</h1>
                <Form
                    form={form}
                    layout={"vertical"}
                    onValuesChange={handleFormChange}
                    onFinish={handleSubmit}
                    className={styles.form}
                >
                    <div className={styles.form__item}>
                        <Form.Item
                            name="firstName"
                            label="Имя"
                            rules={[{required: true, message: 'Пожалуйста, введите ваше имя!'}]}
                        >
                            <Input size={"large"}/>
                        </Form.Item>
                        <Form.Item
                            name="lastName"
                            label="Фамилия"
                            rules={[{required: true, message: 'Пожалуйста, введите вашу фамилию!'}]}
                        >
                            <Input size={"large"}/>
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            label="Номер телефона"
                            rules={[{required: true, message: 'Пожалуйста, введите ваш номер телефона!'}]}
                        >
                            <PhoneInput size={"large"}/>
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="Почта"
                            rules={[
                                {required: true, message: 'Пожалуйста, введите вашу почту!'},
                                {type: 'email', message: 'Введите корректный адрес электронной почты!'}
                            ]}
                        >
                            <Input size={"large"}/>
                        </Form.Item>
                    </div>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={!isEditing}
                            size={"large"}
                        >
                            Редактировать
                        </Button>
                    </Form.Item>
                </Form>
                <Services/>
                <Students/>
            </div>
        </section>
    );
};

export default AccountPage;
