import styled from "styled-components";
import { TagContainer } from "../Tags/style";

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;

  ${TagContainer} {
    
  }
`;
