import styles from './MainPage.module.scss';
import MainMenu from "../../Components/MainMenu/MainMenu.tsx";
import Input from "../../Widgets/Input/Input.tsx";
import TextArea from "../../Widgets/Textarea/TextArea.tsx";
import Button from "../../Widgets/Button/Button.tsx";
import Checkbox from "../../Widgets/Checkbox/Checkbox.tsx";
import InputNumber from "../../Widgets/InputNumber/InputNumber.tsx";
import {Form} from "antd";
import DatePicker from "../../Widgets/DatePicker/DatePicker.tsx";
import TimePicker from "../../Widgets/TimePicker/TimePicker.tsx";
import Calendar from "../../Widgets/Table/Calendar.tsx";

const MainPage = () => {

    const eventsData = [
        { date: 8, events: [{ type: 'warning', content: 'This is warning event.' }, { type: 'success', content: 'This is usual event.' }] },
        { date: 10, events: [{ type: 'warning', content: 'This is warning event.' }, { type: 'success', content: 'This is usual event.' }, { type: 'error', content: 'This is error event.' }] },
        { date: 15, events: [{ type: 'warning', content: 'This is warning event' }, { type: 'success', content: 'This is very long usual event......' }, { type: 'error', content: 'This is error event 1.' }, { type: 'error', content: 'This is error event 2.' }, { type: 'error', content: 'This is error event 3.' }, { type: 'error', content: 'This is error event 4.' }] }
    ];

    return (
        <div className={styles.wrapper}>
            <Checkbox children={'hello'}/>
            <MainMenu/>
            <Input/>
            <TextArea/>
            <DatePicker/>
            <TimePicker/>
            <Calendar eventsData={eventsData}/>
            <Button children="Hello"/>
            <InputNumber/>
            <Form
                name="control-hooks"
                style={{ maxWidth: 600 }}
                layout={"vertical"}
            >
                <Form.Item name="note" label="Note" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
            </Form>
        </div>
    );
};

export default MainPage;