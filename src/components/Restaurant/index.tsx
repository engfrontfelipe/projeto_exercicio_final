import star from "../../assets/images/star.png";
import { TagContainer } from "../Tags/style";
import * as S from "./styles";

type Props = {
  title: string;
  image: string;
  text: string;
  children: string;
};

const Restaurant = ({ title, image, text, children }: Props) => {

  return (
    <div className="container ">
      <S.Card>
        <TagContainer children={children} />
        <S.Img src={image} alt="Comida japonesa" />
        <S.Flex>
          <S.Title>{title} </S.Title>
          <S.FlexAval>
            <S.Aval>4.6</S.Aval>
            <S.Star src={star} alt="Estrela" />
          </S.FlexAval>
        </S.Flex>
        <S.Text>{text}</S.Text>
        <S.Button to={'/profile'}>Saiba Mais</S.Button>
      </S.Card>
    </div>
  );
};

export default Restaurant;
