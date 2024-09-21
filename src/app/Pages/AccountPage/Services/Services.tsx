import styles from '../AccountPage.module.scss';
import Table from "../../../Widgets/Table/Table.tsx";
import React, { useState } from "react";
import Button from "../../../Widgets/Button/Button.tsx";
import AddServiceForm from "../../../Components/Modals/AddStudentModal/AddStudentModal.tsx";

const Services = () => {

    interface DataType {
        key: string;
        name: string;
        age: number;
        address: string;
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    const dataSource: DataType[] = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
    ];

    const [modalVisible, setModalVisible] = useState(false);

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    return (
        <div className={styles.table}>
            <div className={styles.table__container}>
                <h2>Мои тренировки</h2>
                <Button type="primary" onClick={showModal}>Добавить тренировку</Button>
            </div>
            <Table<DataType>
                columns={columns}
                dataSource={dataSource}
                pagination={false}
            />
            <AddServiceForm visible={modalVisible} onClose={hideModal} users={[]} />
        </div>
    );
};

export default Services;
