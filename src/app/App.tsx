import {Route, Routes} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import MainMenu from "./Components/MainMenu/MainMenu.tsx";
import CalendarPage from "./Pages/CalendarPage";
import AccountPage from "./Pages/AccountPage";

function App() {

    return (
        <>
            <MainMenu/>
            <Routes>
                <Route path="/" element={<CalendarPage/>}/>
                <Route path="/profile" element={<AccountPage/>}/>
                <Route path="/sign-in" element={<LoginPage/>}/>
            </Routes>
        </>
    )
}

export default App
