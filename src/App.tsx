import Counter from "./features/counter/Counter";
import { Route, Routes } from "react-router-dom";
import MainPage from "./features/MainPage/MainPage";
import { useEffect } from 'react';
import jwt_decode from "jwt-decode"
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { setError, setUser } from "./features/MainPage/MainPageSlice";
import { setShouldFade } from "./features/ModalPopup/ModalPopupSlice";
import { ToastContainer, toast } from "react-toastify";
declare var google: any



const App = () => {
  // TODO: Реализовать авторизацию с куками через гугл
  const dispatch = useAppDispatch()

  const userSelector = useAppSelector((state) => state.mainPage.user)
  const shouldFade = useAppSelector((state) => state.modalPopup.shouldFade)
  const windowType = useAppSelector((state) => state.modalPopup.windowType)
  const didRehydrate = useAppSelector((state) => state._persist.rehydrated)
  const isWindowTypeSignIn = windowType === "SignIn"
  const errorSelector = useAppSelector((state) => state.mainPage.error)
  const didRegisterSelector = useAppSelector((state) => state.mainPage.didRegister)
  const didRequestPasswordRecovery = useAppSelector((state) => state.mainPage.didRequestPasswordRecovery)

  useEffect(() => {
    dispatch(setShouldFade(false))
  }, [dispatch, userSelector])

  useEffect(() => {
    const handleCallbackResponse = (response) => {
      // Google Auth dispatched to redux
      console.log("Encoded JWT ID token: " + response.credential)
      var userObject: any = jwt_decode(response.credential)
      dispatch(setUser({
        email: userObject.email,
        login: userObject.email.split("@")[0],
        name: userObject.name,
        picture_url: userObject.picture, loggedIn: true
      }))
      dispatch(setError(null))
    }
    google.accounts.id.initialize({
      client_id: "409545877450-p9q99v4knsu5phb33ghqhq7m0k051snp.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })
    google.accounts.id.renderButton(
      document.getElementById("signInWithGoogleBtn"),
      { theme: "outline", size: "large" }
    )
  }, [shouldFade, isWindowTypeSignIn, dispatch])

  useEffect(() => {
    // Show success/error toasts for logging in 
    const hasUser = !!userSelector && userSelector.email;

    if (hasUser) {
      if (!didRegisterSelector) {
        toast.success(`You have successfully logged in as ${userSelector.email}`);
      } else {
        toast.success(`You have successfully registered as ${userSelector.login}`);
      }
    }
  }, [userSelector, didRegisterSelector])

  useEffect(() => {
    if (!!errorSelector) {
      toast.warn(`${errorSelector}`);
    }
  }, [errorSelector])

  useEffect(() => {
    if (didRequestPasswordRecovery) {
      toast.success(`You have sent a recovery request as ${didRequestPasswordRecovery}`);
    }
  }, [didRequestPasswordRecovery])

  return (
    <div>

      <ToastContainer />
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default App;
