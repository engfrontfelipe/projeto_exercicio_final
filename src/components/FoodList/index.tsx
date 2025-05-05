import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Ul } from "./style";
import Food from "../Food";
import Modal from "../Modal"; // Certifique-se de que existe esse componente

type CardapioItem = {
  foto?: string;
  preco?: number;
  id: number;
  nome?: string;
  descricao?: string;
  porcao?: string;
};

const fetchCardapio = async (restauranteId: string) => {
  try {
    const response = await fetch(
      `https://fake-api-tau.vercel.app/api/efood/restaurantes/${restauranteId}`,
    );
    if (!response.ok) {
      throw new Error("Erro ao buscar dados da API");
    }
    const data = await response.json();
    return data.cardapio;
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
    return [];
  }
};

const FoodList = () => {
  const { id } = useParams();
  const [foods, setFoods] = useState<CardapioItem[]>([]);
  const [selectedFood, setSelectedFood] = useState<CardapioItem | null>(null);

  useEffect(() => {
    const getFoodData = async () => {
      if (id) {
        const foodItems = await fetchCardapio(id);
        setFoods(foodItems);
      }
    };

    getFoodData();
  }, [id]);

  return (
    <div className="container">
      <Ul>
        {foods.map((food) => (
          <li key={food.id}>
            <Food
              title={food.nome ?? "Carregando"}
              description={food.descricao ?? "Carregando"}
              image={food.foto ?? ""}
              onClick={() => setSelectedFood(food)}
            />
          </li>
        ))}
      </Ul>

      {selectedFood && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedFood(null)}
          title={selectedFood.nome}
          text={selectedFood.descricao}
          image={selectedFood.foto}
          price={selectedFood.preco}
          portion={selectedFood.porcao}
        />
      )}
    </div>
  );
};

export default FoodList;
