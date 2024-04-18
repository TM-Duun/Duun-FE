import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column;
`;

export const SignUpUseBox= styled.div`
  width: 500px;
  min-height : 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap : 15px;
`;

export const MainTitle= styled.h3`
  color: black;
  font-family: "Pretendard", sans-serif;
  font-size: 18px;
  font-weight: 700;
`;

export const Container = styled.div`
  width: 100%;
  height : auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  margin : 0;
  box-sizing: border-box;
  border: 2px solid #D9D9D9;
  border-radius: 10px;
  gap : 20px;
`;

export const CheckboxWrap = styled.div`
  width: 100%;
  margin : 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CheckboxExplain = styled.div`
  display : flex;
  justify-content : flex-start;
  align-items : center;
  gap : 10px;
`;

export const CheckLine = styled.div`
  width : 100%;
  height : 1px;
  background-color : #D9D9D9;
  margin : 0;
  padding : 0;
`;

export const CheckboxLabel = styled.label`
  content: '';
  width: 20px;
  height:20px;
  border-radius: 50%;
  border: 2px solid #c9c9c9;
  background-color: white;

  &:hover{
    cursor: pointer;
  }
`;

export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  display : none;

  &:checked + ${CheckboxLabel} {
    background-color: #678EF2;
    border: 2px solid #678EF2;
  }
`;

export const AllCheckbox = styled.span`
  color: #000000;
  text-align: left;
  font-family: "Pretendard", sans-serif;
  font-size: 18px;
  font-weight: 700;
`;

export const RequiredCheckbox = styled.span`
  color: #484545;
  text-align: left;
  font-family: "Pretendard", sans-serif;
  font-size: 15px;
  font-weight: 500;

  span {
    color : #678ef2;
  }
`;

export const OptionalCheckbox = styled.span`
  color: #484545;
  text-align: left;
  font-family: "Pretendard", sans-serif;
  font-size: 15px;
  font-weight: 500;
`;

export const Termbtn = styled.div`
  background: #ffffff;
  border-radius: 10px;
  border : 2px solid #678ef2;
  width: 80px;
  height: 35px;
  color: #678ef2;
  font-family: "Pretendard", sans-serif;
  font-size: 14px;
  font-weight: 600;
  margin: 0;

  text-decoration : none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    cursor: pointer;
    background-color: #678ef2;
    border-color: #ffffff;
    color:#ffffff;
  }

`;

export const Caution = styled.div`
  width : 100%;
  height : auto;
  margin : 0;
  padding : 0;
  display : flex;
  flex-direction : column;
  justify-content : center;
  gap : 10px;
  
  p {
    color: #555555;
    font-family: "Pretendard-SemiBold", sans-serif;
    font-size: 11px;
    font-weight: 600;
  }
`;


export const Nextbtn = styled.div`
  background-color: #7C9DEF;
  border-radius: 10px;
  border: none;
  width: 150px;
  height: 40px;
  color: white;
  text-align: center;
  font-family: "Pretendard", sans-serif;
  font-size: 18px;
  font-weight: 600;
  margin : 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color : #678fe2;
    cursor: pointer;
  }

`;