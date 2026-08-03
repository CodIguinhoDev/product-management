import "./style.css";
import logo from "../../assets/site/logo.svg";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="Logo do site" />
      </div>
    </header>
  );
};
