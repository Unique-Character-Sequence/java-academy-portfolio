import Counter from "./features/counter/Counter";
import { Route, Routes } from "react-router-dom";
import MainPage from "./features/MainPage/MainPage";
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode"
import { useAppDispatch } from "./app/hooks";
import { setUser } from "./features/MainPage/MainPageSlice";
declare var google: any



const App = () => {
    // TODO: Реализовать авторизацию с куками через гугл
    const [user, setUserLocal] = useState<any>()
    const dispatch = useAppDispatch()

    useEffect(() => {
        const handleCallbackResponse = (response) => {
            console.log("Encoded JWT ID token: " + response.credential)
            var userObject = jwt_decode(response.credential)
            setUserLocal(userObject)
        }

        if (Boolean(user) !== false) {
            dispatch(setUser({ email: user.email, login: user.name, picture_url: user.picture, loggedIn: true }))

        }
        // TODO: Ты остановился тут
        console.log("А Я-ТО ДУМАЛ, КОГДА ЖЕ ОН ПОЯВИТСЯ: ", user)

        google.accounts.id.initialize({
            client_id: "409545877450-p9q99v4knsu5phb33ghqhq7m0k051snp.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })
        google.accounts.id.renderButton(
            document.getElementById("signInButton"),
            { theme: "outline", size: "large" }
        )
    }, [user]) // Когда user залетает в local state, то этот useEffect диспатчит в store штуки
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
