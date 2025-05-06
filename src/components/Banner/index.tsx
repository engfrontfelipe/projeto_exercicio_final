import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ImgBack, Subtitle, Title } from "./styles";

type Restaurante = {
  titulo: string;
  tipo: string;
  capa: string;
};

const Banner = () => {
  const { id } = useParams();
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null);

  useEffect(() => {
    const fetchRestaurante = async () => {
      try {
        const response = await fetch(
          `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`,
        );
        if (!response.ok) throw new Error("Erro ao buscar restaurante");
        const data = await response.json();
        setRestaurante({ titulo: data.titulo, tipo: data.tipo, capa: data.capa});
      } catch (error) {
        console.error("Erro ao carregar restaurante:", error);
      }
    };

    if (id) fetchRestaurante();
  }, [id]);

  return (
    <ImgBack style={{ backgroundImage: `url(${restaurante?.capa})` }}>
      <div className="container">
        <Subtitle>{restaurante?.tipo}</Subtitle>
        <Title>{restaurante?.titulo}</Title>
      </div>
    </ImgBack>
  );
};

export default Banner;
