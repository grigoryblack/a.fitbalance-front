import React from 'react';
import {ConfigProvider, Table as AntTable, TableProps } from 'antd';
import tableStyles from "./TableStyles.js"

interface TableProps<T> extends TableProps<T> {
    columns: TableProps<T>['columns'];
    dataSource: TableProps<T>['dataSource'];
}

const Table = <T extends object>({ columns, dataSource}: TableProps<T>) => {
    return (
        <ConfigProvider theme={tableStyles}>
            <AntTable
                columns={columns}
                dataSource={dataSource}
            />
        </ConfigProvider>
    );
};

export default Table;
