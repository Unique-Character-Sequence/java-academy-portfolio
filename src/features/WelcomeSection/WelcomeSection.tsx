import "./styles/WelcomeSection.sass"
import logo from "../../assets/logo-txt_desktop.png";
import hamburgerButton from "../../assets/hamburgerMenuButton.png";
import logoRetina from "../../assets/logo-txt_desktop@2x.png";
import group4 from "../../assets/Group 4.png";
import group5 from "../../assets/Group 5.png";
import { HamburgerModal } from '../HamburgerModal/HamburgerModal';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ModalPopup from "../ModalPopup/ModalPopup";

type WelcomeSectionProps = {
  clicked_hamburger: boolean
  handleClick_hamburger: () => void
  handleClick_signIn: () => void
  handleClick_signUp: () => void
}

const WelcomeSection = (props: WelcomeSectionProps) => {
  return (
    <div className="welcomeDiv">
      <div className="rectangle41" />
      <img
        className="logoTxt"
        src={logo}
        srcSet={`${logoRetina} 2x`}
        alt="logoTxt"
      />
      <img
        onClick={props.handleClick_hamburger}
        className="hamburgerButton"
        src={hamburgerButton}
        alt="hamburgerButton"
      />
      <ModalPopup />
      <HamburgerModal shouldFade={props.clicked_hamburger}
        handleClick_signIn={props.handleClick_signIn}
        handleClick_signUp={props.handleClick_signUp}
        handleClick_hamburger={props.handleClick_hamburger} />
      <div className="rectangle41TextBox">
        <span className="textBig1">Становись</span>
        <div className="javaTextPosition">
          <div className="rectangle16__above1400" />
          <span className="textBigJavaBrackets">{"{"}</span>
          <span className="textBigJava">Java</span>
          <span className="textBigJavaBrackets">{"}"}</span>
          <span className="textBig2">-разработчиком</span>
        </div>
        <div className="rectangle16" />
        <span className="textBig3">вместе с нами</span>
        <img className="group4" src={group4} alt="group4" />
        <img className="group5" src={group5} alt="group5" />
        <div className="group6_ButtonsContainer">
          <button className="group6_Button1">
            <span className="group6_ButtonContent">Об обучении</span>
          </button>
          <button className="group6_Button2">
            <span className="group6_ButtonContent">Преимущества</span>
          </button>
          <button className="group6_Button3">
            <span className="group6_ButtonContent">Отзывы</span>
          </button>
          <button className="group6_Button4">
            <span className="group6_ButtonContent">Ценовая политика</span>
          </button>
        </div>
        <div className="textSmall1_Container">
          <span className="textSmall1">
            Получи классную востребованную профессию и зарабатывай дома
            <br />в удобное время
          </span>
        </div>
        <button onClick={props.handleClick_signUp} className="buttonStartLearning">
          Начать учиться
        </button>
        <div className="ellipse5" />
        <div className="ellipse4" />
      </div>
      <div className="auth_ButtonsContainer">
        <button onClick={props.handleClick_signIn} className="auth_Button1">
          <span>Вход</span>
        </button>
        <button onClick={props.handleClick_signUp} className="auth_Button2">
          <span>Регистрация</span>
        </button>
      </div>
    </div>
  );
};

export default WelcomeSection;
