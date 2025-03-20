import bannerHelader from "../../assets/images/backgroundHeader.png";
import logo from "../../assets/images/logo.png";

import * as S from "./styles";

import { Props } from "./styles";

const Header = ({ modelHeader }: Props) => (
  <header>
    <S.ImgHeader
      modelHeader={modelHeader}
      style={{ backgroundImage: `url(${bannerHelader})` }}
    >
      <div className="container">
        <S.LinkHeader to={"/"} modelHeader={modelHeader}>
          Restaurantes
        </S.LinkHeader>
        <S.ImgLogo
          modelHeader={modelHeader}
          src={logo}
          alt="logo do estabelecimento"
        />
        <S.LinkHeader to={"/"} modelHeader={modelHeader}>
          Restaurantes
        </S.LinkHeader>
        <S.Title modelHeader={modelHeader}>
          Viva experiências gastronômicasno conforto da sua casa
        </S.Title>
      </div>
    </S.ImgHeader>
  </header>
);

export default Header;
