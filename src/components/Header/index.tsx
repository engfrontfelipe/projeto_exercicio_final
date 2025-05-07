import { useState } from "react";
import bannerHelader from "../../assets/images/backgroundHeader.png";
import logo from "../../assets/images/logo.png";

import { useSelector } from 'react-redux';
import { RootState } from "../../store";
import { useDispatch } from 'react-redux';
import { removeItem } from '../../slices/cartSlice';


import * as S from "./styles";
import { Props } from "./styles";

const Header = ({ modelHeader }: Props) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const dispatch = useDispatch();

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleRemove = (id: number) => {
    dispatch(removeItem(id));
  };
  

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const totalValue = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);


  return (
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

          <S.LinkHeader to={"#"} modelHeader={modelHeader} onClick={toggleCart}>
            {totalQuantity} produto(s) no carrinho
          </S.LinkHeader>

          <S.Title modelHeader={modelHeader}>
            Viva experiências gastronômicas no conforto da sua casa
          </S.Title>
        </div>
      </S.ImgHeader>

      {isCartOpen && <S.Overlay isOpen={isCartOpen} onClick={toggleCart} />}

      <S.CartModal isOpen={isCartOpen}>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <img src={item.foto} alt="" />
              <div className="flex">
                <h3>{item.name}</h3>
                <p>R$ {item.price}</p>
              </div>
              <button onClick={() => handleRemove(item.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-trash2-icon lucide-trash-2">
                  <path d="M3 6h18"/>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                  <line x1="10" x2="10" y1="11" y2="17"/>
                  <line x1="14" x2="14" y1="11" y2="17"/>
                </svg>
              </button>
            </li>
          ))}
                <S.P>Valor total <span>R$ {totalValue.toFixed(2)}</span></S.P>
                <button id="button">Continuar com entrega</button>
        </ul>

          </S.CartModal>
    </header>
  );
};

export default Header;
