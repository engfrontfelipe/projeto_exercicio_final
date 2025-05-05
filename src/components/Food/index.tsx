// Food.tsx
import * as S from "./styles";

type Props = {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
};

const Food = ({ title, description, image, onClick }: Props) => {
  return (
    <S.CardFood>
      <S.Img src={image} alt={title} />
      <S.Tittle>{title}</S.Tittle>
      <S.Description>{description}</S.Description>
      <S.Button onClick={onClick}>Adicionar ao carrinho</S.Button>
    </S.CardFood>
  );
};

export default Food;
