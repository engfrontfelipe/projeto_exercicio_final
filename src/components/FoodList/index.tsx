import ModelFood from "../../models/ModelFood";

import food from "../../assets/images/margerita.png";
import Food from "../Food";
import { Ul } from "./style";

export const modelsFood: ModelFood[] = [
  {
    title: "Pizza Marguerita",
    id: 1,
    image: food,
    description:
      "A clássica Marguerita: molho de tomate suculento,mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },

  {
    title: "Pizza Marguerita",
    id: 2,
    image: food,
    description:
      "A clássica Marguerita: molho de tomate suculento,mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },

  {
    title: "Pizza Marguerita",
    id: 3,
    image: food,
    description:
      "A clássica Marguerita: molho de tomate suculento,mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },

  {
    title: "Pizza Marguerita",
    id: 4,
    image: food,
    description:
      "A clássica Marguerita: molho de tomate suculento,mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },

  {
    title: "Pizza Marguerita",
    id: 4,
    image: food,
    description:
      "A clássica Marguerita: molho de tomate suculento,mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },

  {
    title: "Pizza Marguerita",
    id: 4,
    image: food,
    description:
      "A clássica Marguerita: molho de tomate suculento,mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
];

const FoodList = () => {
  return (
    <div className="container">
      <Ul>
        {modelsFood.map((model) => (
          <li>
            <Food
              key={model.id}
              title={model.title}
              description={model.description}
              image={model.image}
            />
          </li>
        ))}
      </Ul>
    </div>
  );
};
export default FoodList;
