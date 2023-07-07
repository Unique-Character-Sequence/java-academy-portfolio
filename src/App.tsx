import Counter from "./features/counter/Counter";
import { Route, Routes } from "react-router-dom";
import MainPage from "./features/MainPage/MainPage";
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode"
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { setError, setUser } from "./features/MainPage/MainPageSlice";
import { setShouldFade } from "./features/AuthPopup/AuthPopupSlice";
declare var google: any



const App = () => {
    // TODO: Реализовать авторизацию с куками через гугл
    const dispatch = useAppDispatch()

    const userSelector = useAppSelector((state) => state.mainPage.user)
    useEffect(() => {
        dispatch(setShouldFade(false))
    }, [userSelector])
    useEffect(() => {
        const handleCallbackResponse = (response) => {
            // Google Auth dispatched to redux
            console.log("Encoded JWT ID token: " + response.credential)
            var userObject: any = jwt_decode(response.credential)
            dispatch(setUser({ email: userObject.email, login: userObject.name, picture_url: userObject.picture, loggedIn: true }))
            dispatch(setError(null))
        }
        google.accounts.id.initialize({
            client_id: "409545877450-p9q99v4knsu5phb33ghqhq7m0k051snp.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })
        google.accounts.id.renderButton(
            document.getElementById("signInButton"),
            { theme: "outline", size: "large" }
        )
    }, [])

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
