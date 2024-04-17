import styled from "styled-components";

export const SuhWrapper = styled.div`
  width : 65vw;
  height : 20vh;
  margin : 0;
  padding : 0;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
  gap : 20px;
`;

export const SignUpTitle = styled.p`
  color: #7c9def;
  font-family: "Poppins", sans-serif;
  font-size: 36px; 
  font-weight: 800;
  display: flex;
  justify-content: center;
`;

export const SignUpStepBox = styled.div`
  width : 100%;
  height : auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap : 10px;
  margin : 0;
  padding : 0;
`;

export const OneStep = styled.div`
  min-width : 50px;
  height : 70px;
  margin : 0;
  padding : 0;
  display : flex;
  flex-direction: column;
  align-items : center;
  justify-content : center;
  gap : 10px;
`;

export const StepBox = styled.div`
  width : 40px;
  height : 40px;
  border-radius : 50%;
  background-color : #7c9def;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size : 20px;
    font-family: "Pretendard", sans-serif;
    font-weight: 500;
    color : #ffffff;
  }
`;

export const StepName = styled.p`
  color: #7c9def;
  text-align: center;
  font-family: "Pretendard", sans-serif;
  font-size: 12px;
  font-weight: 500;
`;

export const Gray = styled.div`
  background: #D9D9D9;
  border-radius: 50%;
  width: 5px;
  height: 5px;
  margin-bottom : 20px;
`;