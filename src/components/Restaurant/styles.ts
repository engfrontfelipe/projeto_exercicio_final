import styled from "styled-components";
import { colors } from "../../style";
import { Link } from "react-router-dom";

export const Card = styled.div`
  padding: 8px 8px;
  width: 470px;
  background-color: ${colors.white};
  margin: 32px 0;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;  
  display: block;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  margin-top: 8px;
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const Button = styled(Link)`
  padding: 4px 6px;
  color: ${colors.background};
  background-color: ${colors.pink};
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 8px;
  margin-top: 16px;
  border: none;
  cursor: pointer;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FlexAval = styled.div`
  display: flex;
`;

export const Star = styled.img`
  height: 20px;
  width: auto;
  margin-top: 5px;
  margin-left: 8px;
`;

export const Aval = styled.h2`
  font-size: 18px;
  margin-top: 6px;

`;

export const DivFlex = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
  flex-wrap: wrap; 
  position: absolute;
  top: 20px;  
  right: 20px;
z-index: 10;  
`;
