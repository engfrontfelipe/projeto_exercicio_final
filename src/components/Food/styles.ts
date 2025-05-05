import styled from "styled-components";
import { colors } from "../../style";

export const CardFood = styled.div`
  background-color: ${colors.pink};
  width: 340px;
  height: 400px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 10px;
`;

export const Img = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Tittle = styled.h3`
  color: ${colors.white};
  margin: 8px 0;
  font-size: 16px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Description = styled.p`
  color: ${colors.white};
  font-size: 14px;
  line-height: 20px;
`;

export const Button = styled.button`
  background-color: ${colors.white};
  width: 100%;
  border: none;
  padding: 4px 0;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`;
