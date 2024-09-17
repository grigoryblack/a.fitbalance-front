import React, { useRef, useState } from 'react';
import { Form, Input, Select, Button, Divider, Space } from 'antd';
import dayjs from 'dayjs';
import Modal from "../../../Widgets/Modals/Modal.tsx";
import InputNumber from "../../../Widgets/Inputs/InputNumber/InputNumber.tsx";
import DatePicker from "../../../Widgets/DatePicker/DatePicker.tsx";
import TimePicker from "../../../Widgets/TimePicker/TimePicker.tsx";
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

interface AddServiceFormProps {
    visible: boolean;
    onClose: () => void;
    users: string[]; // Список пользователей для выпадающего списка
}

const AddServiceForm: React.FC<AddServiceFormProps> = ({ visible, onClose, users }) => {
    const [form] = Form.useForm();
    const [trainingType, setTrainingType] = useState<string>('online');
    const [visibility, setVisibility] = useState<string>('everyone');
    const [addresses, setAddresses] = useState<string[]>([]);
    const [addressName, setAddressName] = useState('');
    const [gymLocations, setGymLocations] = useState<string[]>([]);
    const [locationName, setLocationName] = useState('');

    // Типизация рефов для Input
    const addressInputRef = useRef<Input>(null);
    const locationInputRef = useRef<Input>(null);

    const handleTrainingTypeChange = (value: string) => {
        setTrainingType(value);
    };

    const handleVisibilityChange = (value: string) => {
        setVisibility(value);
    };

    const handleSubmit = (values: any) => {
        console.log('Form Values:', values);
        onClose();
    };

    const onAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddressName(event.target.value);
    };

    const addAddress = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        e.preventDefault();
        if (addressName && !addresses.includes(addressName)) {
            setAddresses([...addresses, addressName]);
            setAddressName('');
            if (addressInputRef.current) {
                addressInputRef.current.focus();
            }
        }
    };

    const onLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocationName(event.target.value);
    };

    const addLocation = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        e.preventDefault();
        if (locationName && !gymLocations.includes(locationName)) {
            setGymLocations([...gymLocations, locationName]);
            setLocationName('');
            // Проверка на null и вызов метода focus
            if (locationInputRef.current) {
                locationInputRef.current.focus();
            }
        }
    };

    return (
        <Modal
            title="Добавить тренировку"
            open={visible}
            onCancel={onClose}
            footer={null}
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                initialValues={{
                    type: 'online',
                    visibility: 'everyone',
                    date: dayjs(),
                    timeRange: [dayjs(), dayjs().add(1, 'hour')],
                    people: 1,
                }}
            >
                <Form.Item
                    name="type"
                    label="Тип тренировки"
                    rules={[{ required: true, message: 'Выберите тип тренировки' }]}
                >
                    <Select onChange={handleTrainingTypeChange}>
                        <Option value="online">Онлайн</Option>
                        <Option value="street">Улица</Option>
                        <Option value="gym">Зал</Option>
                    </Select>
                </Form.Item>

                {trainingType === 'street' && (
                    <Form.Item
                        name="address"
                        label="Адрес"
                        rules={[{ required: true, message: 'Введите адрес' }]}
                    >
                        <Select
                            mode="tags"
                            placeholder="Введите или выберите адрес"
                            style={{ width: '100%' }}
                            dropdownRender={menu => (
                                <>
                                    {menu}
                                    <Divider style={{ margin: '8px 0' }} />
                                    <Space style={{ padding: '0 8px 4px' }}>
                                        <Input
                                            placeholder="Введите новый адрес"
                                            ref={addressInputRef}
                                            value={addressName}
                                            onChange={onAddressChange}
                                            onKeyDown={(e) => e.stopPropagation()}
                                        />
                                        <Button type="text" icon={<PlusOutlined />} onClick={addAddress}>
                                            Добавить адрес
                                        </Button>
                                    </Space>
                                </>
                            )}
                            options={addresses.map(address => ({ label: address, value: address }))}
                        />
                    </Form.Item>
                )}

                {trainingType === 'gym' && (
                    <Form.Item
                        name="gymLocation"
                        label="Местоположение в зале"
                    >
                        <Select
                            placeholder="Выберите или добавьте местоположение"
                            style={{ width: '100%' }}
                            dropdownRender={menu => (
                                <>
                                    {menu}
                                    <Divider style={{ margin: '8px 0' }} />
                                    <Space style={{ padding: '0 8px 4px' }}>
                                        <Input
                                            placeholder="Введите новое местоположение"
                                            ref={locationInputRef}
                                            value={locationName}
                                            onChange={onLocationChange}
                                            onKeyDown={(e) => e.stopPropagation()}
                                        />
                                        <Button type="text" icon={<PlusOutlined />} onClick={addLocation}>
                                            Добавить местоположение
                                        </Button>
                                    </Space>
                                </>
                            )}
                            options={gymLocations.map(location => ({ label: location, value: location }))}
                        />
                    </Form.Item>
                )}

                <Form.Item
                    name="visibility"
                    label="Видимость"
                    rules={[{ required: true, message: 'Выберите видимость' }]}
                >
                    <Select onChange={handleVisibilityChange}>
                        <Option value="everyone">Всем</Option>
                        <Option value="selected">Выбрать</Option>
                    </Select>
                </Form.Item>

                {visibility === 'everyone' && (
                    <Form.Item
                        name="people"
                        label="Количество человек"
                        rules={[{ required: true, message: 'Введите количество человек' }]}
                    >
                        <InputNumber min={1} max={100} />
                    </Form.Item>
                )}

                {visibility === 'selected' && (
                    <Form.Item
                        name="selectedUsers"
                        label="Выберите пользователей"
                        rules={[{ required: true, message: 'Выберите пользователей' }]}
                    >
                        <Select mode="multiple">
                            {users?.map(user => (
                                <Option key={user} value={user}>{user}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                )}

                <Form.Item
                    name="date"
                    label="Дата"
                    rules={[{ required: true, message: 'Выберите дату' }]}
                >
                    <DatePicker />
                </Form.Item>

                <Form.Item
                    name="timeRange"
                    label="Время"
                    rules={[{ required: true, message: 'Выберите время начала и окончания' }]}
                >
                    <TimePicker format="HH:mm" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Добавить
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddServiceForm;
