import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Wrapper =styled.div`
width: 100%;
height: 100vh; /* 전체 뷰포트 높이를 차지하도록 변경 */
display: flex;
justify-content: center;
align-items: center; 
flex-direction: column;
  
`;
export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Dark = styled.div`
width: 100%;
height: 700px;
display: flex;
justify-content: center;
align-items: center; 
flex-direction: column;
position: fixed; /* 수정된 부분: fixed로 변경하여 전체 화면에 걸쳐 적용 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* 뒷배경에 흐림 효과 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; // 충분히 높은 값으로 설정하여 모든 요소를 포함

  
`;

export const Main= styled.div`
position: relative; /* 수정된 부분: Main 컨텐츠를 위해 relative 설정 */

display: flex;
justify-content: center;
align-items: center; 
flex-direction: column;
padding: 20px;

width:250px;
background-color: #fff;
border-radius: 20px;

`;
export const Checkcircle= styled.img`
width:50px;
height:60px;
`;
export const Complete=styled.h1`
color: #000000;
  text-align: left;
  font-family: "Pretendard-Bold", sans-serif;
  font-size: 24px;
  font-weight: 500;
  margin-bottom:5px;
`;
export const Detail=styled.h2`
color: #000000;
text-align: center;
font-family: "Pretendard-Medium", sans-serif;
font-size: 16px;
font-weight: 500;
`;

export const Goback = styled(Link)`

background-color: #678ef2;
  border-radius: 15px;
 border:none;
 border-style: solid;
 border-color: #678ef2;
 border-width: 2px;
  width: 150px;
  height: 40px;
  color: #ffffff;
  text-align: center;
  font-family: "Pretendard-SemiBold", sans-serif;
  font-size: 18px;
  font-weight: 600;
  margin:10px 0 10px 0px;

  text-decoration : none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:0 10px;
  
  cursor: pointer; // 마우스 오버 시 커서 변경

  transition: background-color 0.5s ease, border-color 0.5s ease; /* 배경색과 테두리 색상 동시에 전환 */
  &:hover {
    background-color: #ffffff;
 // 호버 시 배경색 변경
 border-style: solid;
  border-width: 2px;
    border-color: #7C9DEF;
    color:#678ef2;
  }
  
`;
export const Gomain = styled(Link)`
color: #484545;
text-align: left;
font-family: "Pretendard-Regular", sans-serif;
font-size: 12px;
font-weight: 400;
margin-top:10px;
`;