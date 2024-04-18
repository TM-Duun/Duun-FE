import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column;
`;

export const SignUpLastFormBox = styled.form`
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

export const EmailLabel =styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap : 10px;
`;

export const AddressLabel =styled.div`
  width: 100%;
  height : auto;
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap : 10px;
`;

export const AddressInputWrap = styled.div`
  width : auto;
  height : auto;
  display : flex;
  justify-content : flex-start;
  align-items : center;
  gap : 20px;
`;

export const Label =styled.div`
  width: 400px;
  display: flex;
  align-items: center;
`;

export const GetLabel =styled.h2`
  color: #000000;
  font-family: "Pretendard-Medium", sans-serif;
  align-items: left;
  font-size: 16px;
  font-weight: 500;
  margin:18px 0 5px 5px;
`;


export const PhoneLabel =styled.div`
  width : 100%;
  display: flex;
  justify-content: space-between;
`;

export const Required =styled.h2`
  color: #3D5AF1;
  font-family: "Pretendard", sans-serif;
  align-items: left;
  font-size: 16px;
  font-weight: 500;
  margin:10px 0px 0px 2px;
`;


export const Sign =styled.h2`
  color: black;
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  font-weight: 500;
  display : flex;
  justify-content : center;
  align-items : center;
`;

export const EmailInput= styled.input`
  background: #ffffff;
  border-radius: 11px;
  border : 1px solid #c2c2c2;
  width: 200px;
  height: 40px;

  color: black;
  font-family: "Pretendard", sans-serif;
  font-size: 12px;
  font-weight: 300;
  padding-left:10px;
  outline : none;
`;

export const PhoneInput= styled.input`
  background: #ffffff;
  border-radius: 10px;
  border : 1px solid #c2c2c2;
  width: 120px;
  height: 40px;
  color : black;

  font-family: "Pretendard", sans-serif;
  font-size: 14px;
  font-weight: 300;
  padding-left: 10px;
  box-sizing: border-box;
  margin : 0;
  outline : none;
`;

export const AddressInput1= styled.input`
  background: #F2F2F2;
  border-radius: 10px;
  border : 1px solid #c2c2c2;
  width: 120px;
  height: 40px;

  color: black;
  font-family: "Pretendard", sans-serif;
  font-size: 14px;
  font-weight: 300;
  padding-left:10px;
  margin: 0;

  &:focus {
    outline:  none; 
  }
`;

export const AddressInput2= styled.input`
  background: #F2F2F2;
  border-radius: 10px;
  border : 1px solid #c2c2c2;
  width: 100%;
  height: 40px;

  color: #bbbbbb;
  text-align: left;
  font-family: "Pretendard", sans-serif;
  font-size: 14px;
  font-weight: 300;
  padding-left:10px;
  margin:0 10px 5px 0;

  &:focus {
    outline:  none; 
  }
`;

export const AddressContentInput= styled.input`
  width: 100%;
  height: 40px;
  background: white;
  border-radius: 10px;
  border : 1px solid #c2c2c2;

  color: black;
  font-family: "Pretendard", sans-serif;
  font-size: 12px;
  font-weight: 300;
  padding-left: 10px;
  box-sizing: border-box;
  outline : none;
`;

export const Checkbtn = styled.button`
  width: 120px;
  height: 40px;
  background-color: #7C9DEF;
  border: none;
  color: white;
  border-radius: 10px;

  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #678ef2;
    cursor: pointer;
  }

`;


export const Nextbtn = styled.div`
  background-color: #7C9DEF;
  border-radius: 10px;
  border: none;
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