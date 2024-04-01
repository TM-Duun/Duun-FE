import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  input:focus {
    outline: 1.5px solid #AEC5FF; // 모든 input 요소의 포커스 상태일 때 파란색 테두리 적용
  }
`;
