import {Route, Routes} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import LoginPage from "./Pages/LoginPage";
import OrientationMessage from "./Components/OrientationMessage/OrientationMessage.tsx";

function App() {

    return (
        <>
            <OrientationMessage>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/sign-in" element={<LoginPage/>}/>
                </Routes>
            </OrientationMessage>
        </>
    )
}

export default App
