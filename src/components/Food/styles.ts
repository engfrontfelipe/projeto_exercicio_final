import styled from "styled-components";
import { colors } from "../../style";

export const CardFood = styled.div`
  background-color: ${colors.pink};
  width: 340px;
  padding: 8px;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Tittle = styled.h3`
  color: ${colors.white};
  margin: 8px 0;
  font-size: 16px;
`;

export const Description = styled.p`
  color: ${colors.white};
  font-size: 14px;
`;
export const Button = styled.button`
  background-color: ${colors.white};
  width: 100%;
  border: none;
  padding: 4px 0;
  font-weight: bold;
  font-size: 14px;
  margin-top: 8px;
  cursor: pointer;
`;
