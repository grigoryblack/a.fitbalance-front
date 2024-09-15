import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, message } from 'antd';
import { RuleObject } from 'rc-field-form/lib/interface';
import { Store } from 'rc-field-form/lib/interface';
import Input from "../../Widgets/Inputs/Input/Input.tsx";
import Button from "../../Widgets/Button/Button.tsx";
import InputPassword from "../../Widgets/Inputs/InputPassword/InputPassword.tsx";
import Switch from "../../Widgets/Switch/Switch.tsx";
import { NamePath } from 'antd/es/form/interface';
import styles from './LoginPage.module.scss';

const LoginPage: React.FC = () => {
    const [isRegister, setIsRegister] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const runningText = 'a.fitbalance';

    const generateRepeatedText = (text: string, count: number) => {
        return Array(count).fill(text).join(' ');
    };

    const repeatedText = generateRepeatedText(runningText, 50);

    const onFinish = (values: Store): void => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            if (isRegister) {
                message.success('Регистрация прошла успешно!');
            } else {
                message.success('Авторизация успешна!');
            }
            navigate('/');
        }, 1000);
    };

    const onFinishFailed = (errorInfo: any): void => {
        message.error('Ошибка в форме: ' + errorInfo.errorFields[0]?.errors[0]);
    };

    const validateConfirmPassword = ({ getFieldValue }: any): RuleObject => ({
        validator(_: RuleObject, value: string) {
            if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
            }
            return Promise.reject(new Error('Пароли не совпадают!'));
        },
    });

    return (
        <section className={styles.wrapper}>
            <div className={styles.textBackground}>
                {[...Array(11)].map((_, index) => (
                    <div key={index} className={`${styles.marquee} ${index % 2 === 0 ? styles['left-to-right'] : styles['right-to-left']}`}>
                        <span>{repeatedText}</span>
                    </div>
                ))}
            </div>

            <div className={styles.form__container}>
                <h1>Добро пожаловать!</h1>
                <h2>{isRegister ? 'Регистрация' : 'Вход'}</h2>
                <p>{isRegister ? 'Уже есть аккаунт? Войдите!' : 'Нет аккаунта? Зарегистрируйтесь!'}</p>
                <Switch
                    className={styles.container__switch}
                    checked={isRegister}
                    onChange={() => setIsRegister(!isRegister)}
                    checkedChildren="Вход"
                    unCheckedChildren="Регистрация"
                />
                <Form
                    name="authForm"
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    className={styles.form}
                >
                    <Form.Item
                        label="E-mail"
                        name="email"
                        className={styles.form__items}
                        rules={[
                            {
                                required: true,
                                type: 'email',
                                message: 'Пожалуйста, введите корректный E-mail!',
                            },
                        ]}
                    >
                        <Input size={"large"} />
                    </Form.Item>

                    <Form.Item
                        label="Пароль"
                        name="password"
                        className={styles.form__items}
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста, введите пароль!',
                            },
                        ]}
                    >
                        <InputPassword size={"large"} />
                    </Form.Item>

                    {isRegister && (
                        <Form.Item
                            label="Подтвердите пароль"
                            name="confirmPassword"
                            size={"large"}
                            className={styles.form__items}
                            dependencies={['password'] as NamePath[]}
                            rules={[
                                {
                                    required: true,
                                    message: 'Пожалуйста, подтвердите пароль!',
                                },
                                validateConfirmPassword,
                            ]}
                        >
                            <InputPassword size={"large"} />
                        </Form.Item>
                    )}

                    <Form.Item className={styles.form__buttons}>
                        <Button type="primary" size={"large"} htmlType="submit" loading={loading}>
                            {isRegister ? 'Зарегистрироваться' : 'Войти'}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </section>
    );
};

export default LoginPage;
