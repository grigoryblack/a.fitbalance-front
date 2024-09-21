import React, {useState, useEffect} from 'react';
import {Form, notification} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import Input from "../../Widgets/Inputs/Input/Input.tsx";
import Button from "../../Widgets/Button/Button.tsx";
import PhoneInput from "../../Components/PhoneInputMask/PhoneInput.tsx";
import styles from './AccountPage.module.scss';
import Services from "./Services/Services.tsx";
import Students from "./Students/Students.tsx";
import {RootState} from '../../features/store.ts';
import {axiosPut, axiosGet} from '../../../api/apiService.ts';
import {updateUser} from "../../features/user/userSlices.ts";

const AccountPage: React.FC = () => {
    const [form] = Form.useForm();
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const user = useSelector((state: RootState) => state.auth.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserData = async () => {
            if (user?.id) {
                try {
                    setLoading(true);
                    const userData = await axiosGet(`/users/${user.id}`);
                    form.setFieldsValue(userData);
                    setLoading(false);
                } catch (error) {
                    console.error('Ошибка при получении данных пользователя:', error);
                    setLoading(false);
                }
            }
        };

        if (!user.isConfirmed) {
            notification.warning({
                message: 'Заполните данные',
                description: 'Чтобы пользоваться приложением, пожалуйста, заполните данные',
            });
        }
        fetchUserData();
    }, [user, form]);

    const checkFormChanges = () => {
        const currentValues = form.getFieldsValue(true);
        return JSON.stringify(user) !== JSON.stringify(currentValues);
    };

    const handleFormChange = () => {
        setIsEditing(checkFormChanges());
    };

    const handleSubmit = async (values: any) => {
        setLoading(true);
        try {
            let updatedUser = axiosPut(`/users/${user.id}`, values);
            notification.success({
                message: 'Профиль обновлен',
                description: 'Ваши данные были успешно обновлены.',
            });
            dispatch(updateUser(await updatedUser));
            setIsEditing(false);
            setLoading(false);
        } catch (error) {
            console.error('Ошибка при обновлении:', error);
            notification.error({
                message: 'Ошибка обновления',
                description: 'Не удалось обновить данные. Попробуйте еще раз.',
            });
        }
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
                            name="name"
                            label="Имя"
                            rules={[{required: true, message: 'Пожалуйста, введите ваше имя!'}]}
                        >
                            <Input size={"large"} loading={loading}/>
                        </Form.Item>
                        <Form.Item
                            name="surname"
                            label="Фамилия"
                            rules={[{required: true, message: 'Пожалуйста, введите вашу фамилию!'}]}
                        >
                            <Input size={"large"} loading={loading}/>
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            label="Номер телефона"
                            rules={[{required: true, message: 'Пожалуйста, введите ваш номер телефона!'}]}
                        >
                            <PhoneInput size={"large"} loading={loading}/>
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="Почта"
                            rules={[
                                {required: true, message: 'Пожалуйста, введите вашу почту!'},
                                {type: 'email', message: 'Введите корректный адрес электронной почты!'}
                            ]}
                        >
                            <Input size={"large"} loading={loading}/>
                        </Form.Item>
                    </div>
                    <Form.Item>
                        <Button
                            loading={loading}
                            type="primary"
                            htmlType="submit"
                            disabled={!isEditing}
                            size={"large"}
                        >
                            Сохранить изменения
                        </Button>
                    </Form.Item>
                </Form>
                <Services/>
                {user.role !== 'student' && <Students/>}
            </div>
        </section>
    );
};

export default AccountPage;
