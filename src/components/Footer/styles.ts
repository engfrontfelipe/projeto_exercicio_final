import styled from "styled-components";
import { colors } from "../../style";

export const FooterContainer = styled.footer`
  text-align: center;
  padding: 40px 0;
  height: 298px;
  background-color: ${colors.pinkFooter};
  margin-top: 120px;
`;

export const Ul = styled.ul`
  display: flex;
  gap: 8px;
  padding: 0 470px;
  padding-bottom: 50px;
  padding-top: 32px;

  li {
    cursor: pointer;
  }
`;

export const P = styled.p`
  width: 780px;
  text-align: center;
  margin: 0 auto;
`;
export const ImgLogo = styled.img``;
