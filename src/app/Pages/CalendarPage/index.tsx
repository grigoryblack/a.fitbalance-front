import styles from './CalendarPage.module.scss';
import Calendar from "../../Widgets/DesktopCalendar/Calendar.tsx";
import eventsData from '../../../assets/Constants/Calendar.js'
const CalendarPage = () => {

    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <h1>Календарь записей</h1>
                <Calendar eventsData={eventsData}/>
            </div>
        </section>
    );
};

export default CalendarPage;