import React from 'react';
import { Badge, Calendar as AntCalendar, ConfigProvider } from 'antd';
import type { BadgeProps, CalendarProps } from 'antd';
import type { Dayjs } from 'dayjs';
import calendarStyle from './CalendarStyles.js';

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

const getMonthData = (value: Dayjs) => {
    if (value.month() === 8) { // Сентябрь
        return 1394;
    }
    return null;
};

const Calendar: React.FC<CustomCalendarProps> = ({ eventsData, ...props }) => {
    const monthCellRender = (value: Dayjs) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };

    const dateCellRender = (value: Dayjs) => {
        const listData = getListData(value, eventsData);
        return (
            <ul className="events">
                {listData.map((item, index) => (
                    <li key={index}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };

    const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
        if (info.type === 'date') {
            return dateCellRender(current);
        }
        if (info.type === 'month') {
            return monthCellRender(current);
        }
        return info.originNode;
    };

    return (
        <ConfigProvider theme={calendarStyle}>
            <AntCalendar {...props} cellRender={cellRender} />
        </ConfigProvider>
    );
};

export default Calendar;
