import "./styles/ProfilePage.sass"
import logo from "../../assets/logo-txt_loggedIn.svg"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import defaultPic from "../../assets/default_pfp.jpg"
import toTheMainPage from "../../assets/Group 13.png"
import { persistor } from "../../app/store"
import { setLogOut, setNotificationsNum, setPage } from "../MainPage/MainPageSlice"
import { FieldWithValidation } from '../ModalPopup/FieldWithValidation';
import { Formik } from "formik"
import logo_mobile from "../../assets/logo_profile_header.svg"



const ProfilePage = () => {
    const user = useAppSelector((state) => state.mainPage.user)
    const notificationsNumber = useAppSelector((state) => state.mainPage.notificationsNumber)
    const dispatch = useAppDispatch()

    const handleClick_mainPage = (): void => {
        dispatch(setPage("MainPage"))
    };

    const handleNotificIncrement = () => dispatch(setNotificationsNum())
    const handleLogOut = async () => {
        persistor.pause();
        await persistor.flush()
        await persistor.purge()

        dispatch(setLogOut())
    }
    return (
        <div className="mainDiv_profile">
            <div className="header_profile">
                <img className="logo_header_profile_mobile" onClick={handleClick_mainPage} src={logo_mobile} alt="" />
                <img className="logo_header_profile" onClick={handleClick_mainPage} src={logo} alt="Logo" />
                <div className="headerRightSection_profile">
                    <div onClick={handleNotificIncrement}>
                        <span className="notific_profile">Уведомления</span>
                        {notificationsNumber > 0 && (<div className="redNumber_notific">{notificationsNumber}</div>)}
                    </div>
                    <img className="pfp_header_profile" src={user.picture_url || defaultPic} alt="UserPfp" />
                </div>
            </div>
            <div className="span_big_profile">Профиль</div>
            <img className="toTheMainPage_profile" onClick={handleClick_mainPage} src={toTheMainPage} alt="" />

            <div className="centerDiv_profile">
                <img className="pfp_content_profile" src={user.picture_url || defaultPic} alt="UserPfp" />
                <Formik initialValues={{ name: user.name, email: user.email, login: `@${user.login}` }}
                    onSubmit={() => { }}
                >
                    {
                        (props) => {
                            const { errors, touched } = props
                            return (
                                <>
                                    <FieldWithValidation fieldClass="inputField_profile_1" errors={errors}
                                        touched={touched} type="text" field="name" placeholder="Ваше имя" />
                                    <FieldWithValidation fieldClass="inputField_profile_2" errors={errors}
                                        touched={touched} type="text" field="email" placeholder="Ваш email" />
                                    <FieldWithValidation fieldClass="inputField_profile_3" errors={errors}
                                        touched={touched} type="text" field="login" placeholder="@tag" />
                                </>

                            )
                        }
                    }
                </Formik>

                <button className="redButton_profile" onClick={handleLogOut}>Выйти</button>
            </div>

            <div className="footer_profile">
                <span className="copyright_span_profile">Копирайт</span>
                <span className="support_span_profile">поддержка?</span>
            </div>
        </div>
    )
}

export default ProfilePage