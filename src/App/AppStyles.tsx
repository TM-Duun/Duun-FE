import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const AppStyles = createGlobalStyle`
    ${reset};
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family : "Poppins", sans-serif;
    }
`;