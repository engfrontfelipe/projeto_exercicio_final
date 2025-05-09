import { Link } from "react-router-dom";
import star from "../../assets/images/star.png";
import { TagContainer } from "../Tags/style";
import * as S from "./styles";

type Props = {
  title: string;
  image: string;
  text: string;
  val: string;
  tag: string;
  tagTwo?: string;
  id: number;
};

const Restaurant = ({ title, image, text, tag, tagTwo, val, id }: Props) => {
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    e.currentTarget.src = "fallback-image-url.png";
  };

  return (
    <div className="container">
      <S.Card>
        <S.DivFlex>
          {tagTwo && <TagContainer>{tagTwo}</TagContainer>}
          {tag && <TagContainer>{tag}</TagContainer>}
        </S.DivFlex>

        <S.Img src={image} alt={title} onError={handleImageError} />

        <S.DivBorder>
          <S.Flex>
            <S.Title>{title}</S.Title>
            <S.FlexAval>
              <S.Aval>{val}</S.Aval>
              <S.Star src={star} alt="Estrela" />
            </S.FlexAval>
          </S.Flex>

          <S.Text>{text}</S.Text>

          <S.Button as={Link} to={`/restaurantes/${id}`}>
            Saiba Mais
          </S.Button>
        </S.DivBorder>
      </S.Card>
    </div>
  );
};

export default Restaurant;
