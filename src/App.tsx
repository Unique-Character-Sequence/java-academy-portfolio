import Counter from "./features/counter/Counter";
import { Route, Routes } from "react-router-dom";
import MainPage from "./features/MainPage/MainPage";
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode"
declare var google: any



const App = () => {
    // TODO: Реализовать авторизацию с куками через гугл
    const [user, setUser] = useState({})
    useEffect(() => {

        const handleCallbackResponse = (response) => {
            console.log("Encoded JWT ID token: " + response.credential)
            var userObject = jwt_decode(response.credential)
            setUser(userObject)
        }
        console.log("А Я-ТО ДУМАЛ, КОГДА ЖЕ ОН ПОЯВИТСЯ: ", user)

        google.accounts.id.initialize({
            client_id: "409545877450-p9q99v4knsu5phb33ghqhq7m0k051snp.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })
        google.accounts.id.renderButton(
            document.getElementById("signInButton"),
            { theme: "outline", size: "large" }
        )
    }, [user])
    console.log("А Я ТОЖЕ ВОТ ДУМАЛ, КОГДА ЖЕ ОН ПОЯВИТСЯ: ", user)
    return (
        <div>
            <Routes>
                <Route path="/counter" element={<Counter />} />
                <Route path="/" element={<MainPage />} />
            </Routes>
        </div>
    );
};

export default App;
