import styled from 'styled-components';


export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column;
`;

export const SignUpFormBox= styled.form`
  width: 400px;
  min-height : 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap : 15px;
  margin : 20px 0 0 0;
`;

export const Container = styled.div`
  width: 100%;
  height : auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  margin : 0;
  box-sizing: border-box;
  gap : 10px;
`;

export const IdLabel =styled.div`
  width : 100%;
  height : auto;
  display: flex;
  justify-content: space-between;
`;

export const Label =styled.div`
  width: 400px;
  height : 30px;
  display: flex;
  justify-content: left;
`;

export const GetLabel =styled.h2`
  color: #000000;
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin: 18px 0 5px 5px;
`;

export const Required =styled.h2`
  color: #3D5AF1;
  font-family: "Pretendard", sans-serif;
  align-items: left;
  font-size: 16px;
  font-weight: 500;
  margin:10px 0px 0px 2px;

`;
export const IdInput= styled.input`
  width: 250px;
  height: 40px;
  background: #ffffff;
  border-radius: 10px;
  border : 1px solid #c2c2c2;

  color: black;
  font-family: "Pretendard", sans-serif;
  font-size: 12px;
  font-weight: 300;
  padding-left:10px;
  box-sizing: border-box;
  margin-right: 10px;
  outline : none;
`;

export const Input= styled.input`
  background: #ffffff;
  border-radius: 11px;
  border : 1px solid #c2c2c2;
  width: 100%;
  height: 40px;

  color: black;
  text-align: left;
  font-family: "Pretendard", sans-serif;
  font-size: 12px;
  font-weight: 300;
  padding-left: 10px;
  outline : none;
`;

export const PwdCheck = styled. p`
  font-size: 12px;
  color : #ff0000;
  font-family: "Pretendard", sans-serif;
  font-weight: 300;
  padding-left : 10px;
`;

export const Checkbtn = styled.button`
  background-color: #7C9DEF;
  border: none;
  color: white;
  border-radius: 10px;
  width: 150px;
  height: 40px;

  text-align: center;
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  letter-spacing: 1px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color : #678fe2;
    cursor: pointer;
  }

`;


export const Nextbtn = styled.div`
  background-color: #7C9DEF;
  border-radius: 10px;
  border:none;
  width: 150px;
  height: 40px;
  color: #ffffff;
  font-family: "Pretendard", sans-serif;
  font-size: 18px;
  font-weight: 600;
  margin: 20px 0 0 0;
  letter-spacing: 1px;

  text-decoration : none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:0 10px;
  box-sizing: border-box;

  &:hover {
    background-color : #678fe2;
    cursor: pointer;
  }

`;