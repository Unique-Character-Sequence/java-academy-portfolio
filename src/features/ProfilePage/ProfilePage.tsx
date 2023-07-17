import "./styles/ProfilePage.sass"
import logo from "../../assets/logo-txt_loggedIn.svg"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import defaultPic from "../../assets/default_pfp.jpg"
import toTheMainPage from "../../assets/Group 13.png"
import { persistor } from "../../app/store"
import { setLogOut } from "../MainPage/MainPageSlice"
import { FieldWithValidation } from '../ModalPopup/FieldWithValidation';
import { Form, Formik } from "formik"
import logo_mobile from "../../assets/logo_profile_header.svg"


const ProfilePage = () => {
    const user = useAppSelector((state) => state.mainPage.user)
    const dispatch = useAppDispatch()

    const handleLogOut = async () => {

        persistor.pause();
        await persistor.flush()
        await persistor.purge()

        dispatch(setLogOut())
    }
    return (
        <div className="mainDiv_profile">
            <div className="header_profile">
                <img className="logo_header_profile_mobile" src={logo_mobile} alt="" />
                <img className="logo_header_profile" src={logo} alt="Logo" />
                <div className="headerRightSection_profile">
                    {/* Корзина Уведомления Пикча */}

                    <img className="pfp_header_profile" src={user.picture_url || defaultPic} alt="UserPfp" />
                </div>
            </div>
            <div className="span_big_profile">Профиль</div>
            <img className="toTheMainPage_profile" src={toTheMainPage} alt="" />

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
            
            <div className="footer_profile"/>
        </div>
    )
}

export default ProfilePage