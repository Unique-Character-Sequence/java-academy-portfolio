import "./styles/HamburgerModal.sass";
import logo from "./styles/logo-txt.png"
import cross from "./styles/Group 37.png"

export const HamburgerModal = (props) => {
  return (
    <div className="mainDivBurger">
      <div className="frame73">
        <img className="logo" src={logo} draggable="false" alt="" />
        <img onClick={props.handleClick_hamburger} className="cross" src={cross} draggable="false" alt="" />
        <span className="text1">Об обучении</span>
        <span className="text2">Преимущества</span>
        <span className="text3">Отзывы</span>
        <span className="text4">Ценовая политика</span>
        <button className="buttonLogin">Вход</button>
        <button className="buttonRegister">Регистрация</button>
      </div>
    </div>
  );
};
