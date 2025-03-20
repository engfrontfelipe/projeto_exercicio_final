import { Link } from "react-router-dom";

import styled from "styled-components";

export type Props = {
  modelHeader: "HeaderMin" | "HeaderMax";
};
export const ImgHeader = styled.div<Omit<Props, "textHeader" | "logoHeader">>`
  margin-top: 24px;
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
  width: 540px;
`;

export const LinkHeader = styled(Link)<Props>`
  font-weight: bold;
  display: ${(props) => (props.modelHeader === "HeaderMin" ? "flex" : "none")};
  width: 90px;
  padding-bottom: 80px;
`;
