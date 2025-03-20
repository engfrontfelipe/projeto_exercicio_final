import logo from "../../assets/images/logo.png";
import instagram from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
import X from "../../assets/images/twitter.png";
import { FooterContainer, ImgLogo, Ul } from "./styles";

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <ImgLogo src={logo} alt="Logo do E-Food" />
      <Ul>
        <li>
          <img src={instagram} alt="Logo Instagram" />
        </li>
        <li>
          <img src={facebook} alt="Logo Facebook" />
        </li>
        <li>
          <img src={X} alt="Logo X" />
        </li>
      </Ul>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </FooterContainer>
);

export default Footer;
