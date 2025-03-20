import * as S from "./styles";

type Props = {
  title: string;
  description: string;
  image: string;
};


const Food = ({ title, description, image }: Props) => {
  const alertTest = () => {
    alert('teste add')

  };
  
  return (
    <S.CardFood>
      <S.Img src={image} alt={title} />
      <S.Tittle>{title}</S.Tittle>
      <S.Description>{description}</S.Description>
      <S.Button onClick={alertTest}>Adicionar ao carrinho</S.Button>
    </S.CardFood>
  );
};

export default Food;
