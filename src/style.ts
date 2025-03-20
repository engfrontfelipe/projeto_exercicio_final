import { createGlobalStyle } from "styled-components";

export const colors = {
  background: "#FFF8F2",
  pink: "#E66767",
  white: "#FFF",
  pinkFooter: "#FFEBD9",
};

export const GlobalCss = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
        text-decoration: none;
        color: ${colors.pink};
    };

    body{
        background-color: ${colors.background};

    };

    .container{
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    };
`;
