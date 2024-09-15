import {Route, Routes} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import LoginPage from "./Pages/LoginPage";
import MainMenu from "./Components/MainMenu/MainMenu.tsx";

function App() {

    return (
        <>
            <MainMenu/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/sign-in" element={<LoginPage/>}/>
            </Routes>
        </>
    )
}

export default App
