import styled from "styled-components";
import { colors } from "../../style";

export const FooterContainer = styled.footer`
  text-align: center;
  padding: 40px 0;
  background-color: ${colors.pinkFooter};
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

export const ImgLogo = styled.img``;
