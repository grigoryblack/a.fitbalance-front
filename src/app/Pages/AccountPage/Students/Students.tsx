import styles from '../AccountPage.module.scss';
import Table from "../../../Widgets/Table/Table.tsx";

const Students = () => {

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

    return (
        <div className={styles.table}>
            <h2>Клиенты</h2>
            <Table<DataType>
                columns={columns}
                dataSource={dataSource}
                pagination={false}
            />
        </div>
    );
};

export default Students;