import React, {useState} from 'react';
import {Calendar as AntCalendar, Card, ConfigProvider} from 'antd';
import type {BadgeProps, CalendarProps} from 'antd';
import type {Dayjs} from 'dayjs';
import CalendarStyles from './CalendarStyles.js';
import styles from './Calendar.module.scss'
import Modal from "../Modals/Modal.tsx";
import Button from "../Button/Button.tsx";

interface EventData {
    date: number;
    events: { type: BadgeProps['status']; content: string }[];
}

interface CustomCalendarProps extends CalendarProps<Dayjs> {
    eventsData: EventData[]; // Данные событий
}

const getListData = (value: Dayjs, eventsData: EventData[]) => {
    const date = value.date();
    const event = eventsData.find(e => e.date === date);
    return event ? event.events : [];
};

const Calendar: React.FC<CustomCalendarProps> = ({eventsData, ...props}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalEvents, setModalEvents] = useState<{ type: BadgeProps['status']; content: string }[]>([]);

    const showModal = (events: { type: BadgeProps['status']; content: string }[]) => {
        setModalEvents(events);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const monthCellRender = (value: Dayjs) => {
        return null;
    };

    const dateCellRender = (value: Dayjs) => {
        const listData = getListData(value, eventsData);
        return (
            <div>
                {listData.length > 0 && (
                    <div className={styles.title}>
                        <p>Занятий:</p>
                        <span>{listData.length}</span>
                    </div>
                )}
            </div>
        );
    };

    const onSelectDate = (value: Dayjs) => {
        const listData = getListData(value, eventsData);
        if (listData.length > 0) {
            showModal(listData);
        }
    };

    const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
        if (info.type === 'date') {
            return (
                <div onClick={() => onSelectDate(current)}>
                    {dateCellRender(current)}
                </div>
            );
        }
        if (info.type === 'month') {
            return monthCellRender(current);
        }
        return info.originNode;
    };


    return (
        <ConfigProvider theme={CalendarStyles}>
            <AntCalendar {...props} cellRender={cellRender}/>
            <Modal
                title="Занятия"
                open={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <ul className="events">
                    {modalEvents.map((item, index) => (
                        <li className={styles.list} key={index}>
                            <Card title={item.type} bordered={false}>
                                <span className={styles.list__card}>
                                    {item.content}
                                    <Button>
                                        Подробнее
                                    </Button>
                                </span>
                            </Card>
                        </li>
                    ))}
                </ul>
            </Modal>
        </ConfigProvider>
    );
};

export default Calendar;
