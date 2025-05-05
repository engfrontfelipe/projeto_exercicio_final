import { useEffect, useState } from "react";
import Restaurant from "../../components/Restaurant";
import { Ul } from "./styles";

interface Restaurante {
  id: number;
  titulo: string;
  descricao: string;
  capa: string;
  tipo: string;
  avaliacao: number;
  destacado: boolean;
}

const RestaurantList = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);

  useEffect(() => {
    async function fetchRestaurantes() {
      try {
        const response = await fetch(
          "https://fake-api-tau.vercel.app/api/efood/restaurantes",
        );
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setRestaurantes(data);
      } catch (error) {
        console.error("Erro ao buscar restaurantes:", error);
      }
    }

    fetchRestaurantes();
  }, []);

  return (
    <div className="container">
      <Ul>
        {restaurantes.map((restaurante) => (
          <li key={restaurante.id}>
            <Restaurant
              title={restaurante.titulo}
              text={restaurante.descricao}
              image={restaurante.capa}
              tagTwo={restaurante.destacado ? "Destaque da Semana" : ""}
              tag={restaurante.tipo}
              val={restaurante.avaliacao.toFixed(1)}
              id={restaurante.id}
            />
          </li>
        ))}
      </Ul>
    </div>
  );
};

export default RestaurantList;
