import { Link } from "react-router-dom";

import styled from "styled-components";
import { colors } from "../../style";

export type Props = {
  modelHeader: "HeaderMin" | "HeaderMax";
};
export const ImgHeader = styled.div<Omit<Props, "textHeader" | "logoHeader">>`
  width: 100%;
  height: ${(props) => (props.modelHeader === "HeaderMax" ? "380px" : "186px")};
  display: flex;
  text-align: center;
  align-items: flex-end;
  margin-bottom: ${(props) =>
    props.modelHeader === "HeaderMin" ? "0" : "80px"};

  ${(props) =>
    props.modelHeader === "HeaderMin" &&
    `
    
    .container{
      display: flex;
      justify-content: space-between;
      align-items: center;
  
    }
    
    `}
`;

export const ImgLogo = styled.img<Props>`
  padding-bottom: ${(props) =>
    props.modelHeader === "HeaderMax" ? "110px" : "80px"};
`;

export const Title = styled.h1<Props>`
  margin: 0 auto;
  font-weight: bold;
  font-size: 36px;
  display: ${(props) => (props.modelHeader === "HeaderMax" ? "flex" : "none")};
  margin-bottom: 40px;
  width: 580px;
`;

export const LinkHeader = styled(Link)<Props>`
  font-weight: 900;
  display: ${(props) => (props.modelHeader === "HeaderMin" ? "flex" : "none")};
  width: 180px;
  padding-bottom: 80px;
`;


// Modal lateral do Carrinho
export const CartModal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100vh;
  background-color: ${colors.pink};
  box-shadow: -2px 0px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 20px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  z-index: 999;
  color: white;



  ul {
    list-style: none;
    padding: 0;
    margin-bottom: auto;
    overflow-y: auto;

    #button{

      background-color: ${colors.white};
      color: ${colors.pink};
      border: 2px solid ${colors.pink};
      padding: 8px 16px;
      border-radius: 4px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s ease;
      width: 100%;
      margin-top: 16px;
      font-size: 14px;

  }
}

  li {
    border-bottom: 1px solid #ccc;
    color: ${colors.pink};  
    background-color: ${colors.pinkFooter};
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
    padding-top: 8px;
    padding-left: 8px;
    padding-bottom: 12px;
    p{
      font-size: 14px;

    }
  }
  h3{
    font-size: 18px;

  }

  p{
    margin-top: 16px;
    font-size: 14px;
  }

  img{
    width: 100px;
    height: 100px;
    object-fit: cover;
  }

  svg{
    cursor: pointer;
    margin-top: 80px;
    margin-right: 10px;

  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;

    &:hover {
    }
  }
`;

export const Overlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

export const P = styled.p`
  color: ${colors.pinkFooter};
  display: flex;
  justify-content: space-between;


  span{
    color: ${colors.pinkFooter};


  }
`

export const Button = styled.button`
 
`;

