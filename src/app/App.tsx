import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import MainMenu from "./Components/MainMenu/MainMenu.tsx";
import CalendarPage from "./Pages/CalendarPage";
import AccountPage from "./Pages/AccountPage";
import PrivateRoute from "./PrivateRoute.tsx";

function App() {
    return (
        <>
            <MainMenu />
            <Routes>
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <Navigate to ="/profile"/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/calendar"
                    element={
                        <PrivateRoute>
                            <CalendarPage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <AccountPage />
                        </PrivateRoute>
                    }
                />
                <Route path="/sign_in" element={<LoginPage />} />
            </Routes>
        </>
    );
}

export default App;
