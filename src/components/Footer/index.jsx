import "./style.css";
import logoBureau from "../../assets//bureau/logo-bureau.png";
import logolabSystem from "../../assets/labSystem/logo-labsystem.png";
import logoNcc from "../../assets/nccGroup/logoNcc.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-logos">
        <img src={logoBureau} alt="Logo da empresa Bureau Veritas" />
        <img src={logolabSystem} alt="Logo da empresa Labsystem" />
        <img src={logoNcc} alt="Logo da empresa Ncc Group" />
      </div>

      <p>© {currentYear} | Desenvolvido por Igor Lima</p>
    </footer>
  );
};
