import "./styles/HamburgerModal.sass";
import logo from "./styles/logo-txt.png"
import cross from "./styles/Group 37.png"
import { Fade } from "@mui/material";

type HamburgerModalProps = {
  shouldFade: boolean;
  isLoggedIn: boolean;
  handleClick_hamburger: () => void;
  handleClick_signIn: () => void;
  handleClick_signUp: () => void;
  handleClick_profilePage: () => void
};

export const HamburgerModal = (props: HamburgerModalProps) => {
  return (
    <Fade in={props.shouldFade}>
      <div className="mainDivBurger">
        <div className="frame73">
          <img className="logo" src={logo} draggable="false" alt="" />
          <img onClick={props.handleClick_hamburger} className="cross" src={cross} draggable="false" alt="" />
          <span className="text1">Об обучении</span>
          <span className="text2">Преимущества</span>
          <span className="text3">Отзывы</span>
          <span className="text4">Ценовая политика</span>

          {
            props.isLoggedIn === false ?
              <>
                <button onClick={props.handleClick_signIn} className="buttonLogin">Вход</button>
                <button onClick={props.handleClick_signUp} className="buttonRegister">Регистрация</button>
              </>
              :
              <>
                <button onClick={props.handleClick_profilePage} className="buttonLogin">Мой профиль</button>
              </>
          }
        </div>
      </div>
    </Fade >
  );
};
