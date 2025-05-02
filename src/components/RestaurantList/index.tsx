import ModelRest from "../../models/ModelRest";
import Restaurant from "../../components/Restaurant";
import { Ul } from "./styles";

import hioki from "../../assets/images/hioki.png";
import laDoce from "../../assets/images/food.png";

export const models: ModelRest[] = [
  {
    title: "Hioki Sushi ",
    text: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    image: hioki,
    id: 1,
    tag: "Japonesa",
    tagTwo: "Destaque da Semana",
    val: "4.9"
  },

  {
    title: "La Dolce Vita Trattoria",
    text: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: laDoce,
    id: 2,
    tag: "Italiana",
    val: "4.6"

    
  },


  {
    title: "La Dolce Vita Trattoria",
    text: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: laDoce,
    id: 3,
    tag: "Italiana",
    val: "4.6"

  },


  {
    title: "La Dolce Vita Trattoria",
    text: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: laDoce,
    id: 4,
    tag: "Italiana",
    val: "4.6"

  },

  {
    title: "La Dolce Vita Trattoria",
    text: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: laDoce,
    id: 5,
    tag: "Italiana",
    val: "4.6"

  },

  {
    title: "La Dolce Vita Trattoria",
    text: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: laDoce,
    id: 6,
    tag: "Italiana",
    val: "4.6"

  },

];

const RestaurantList = () => {
  return (
    <div className="container">
      <Ul>
        {models.map((model) => (
          <li key={model.id}>
            <Restaurant
              title={model.title}
              text={model.text}
              image={model.image}
              tagTwo= {model.tagTwo}
              tag={model.tag}
              val= {model.val}
            />
          </li>
        ))}
      </Ul>
    </div>
  );
};

export default RestaurantList;
