import "./styles/ProfilePage.sass"
import logo from "../../assets/logo-txt_loggedIn.svg"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import defaultPic from "../../assets/default_pfp.jpg"
import toTheMainPage from "../../assets/Group 13.png"
import { persistor } from "../../app/store"
import { setLogOut } from "../MainPage/MainPageSlice"
import { FieldWithValidation } from '../ModalPopup/FieldWithValidation';


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
                <img className="logoLoggedIn_profile" src={logo} alt="Logo" />
                <div className="headerRightSection_profile">
                    {/* Корзина Уведомления Пикча */}

                    <img className="pfp_header_profile" src={user.picture_url || defaultPic} alt="UserPfp" />
                </div>
            </div>
            <div className="span_big_Profile">Профиль</div>
            <img src={toTheMainPage} alt="" />
            <div className="divCenterContent_profile">
                Имя: <div><input type="text" value={user.name} /></div>
                Email: <div><input type="text" value={user.email} /></div>
                Login: <div><input type="text" value={`@${user.login}`} placeholder="@tag" /></div>
                <button className="redButton_profile" onClick={handleLogOut}>Сбросить пользователя</button>
            </div>
        </div>
    )
}

export default ProfilePage