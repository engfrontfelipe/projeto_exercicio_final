import styled from "styled-components";
import { colors } from "../../style";


export const Title = styled.h2`
  color: ${colors.white};
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 32px;
`;
export const ImgBack = styled.div`
  height: 280px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
`;

export const Subtitle = styled.h3`
  font-size: 32px;
  font-weight: 100;
  margin-bottom: 156px;
  color: ${colors.white};
`;
