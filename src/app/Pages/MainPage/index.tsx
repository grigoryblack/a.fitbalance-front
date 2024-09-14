import styles from './MainPage.module.scss';
import MainMenu from "../../Components/MainMenu/MainMenu.tsx";

const MainPage = () => {

    return (
        <section className={styles.wrapper}>
            <MainMenu/>
            <div className={styles.container}></div>
        </section>
    );
};

export default MainPage;