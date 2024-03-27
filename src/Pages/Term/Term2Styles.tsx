import styled from 'styled-components';
import { Link } from "react-router-dom";


export const Wrapper = styled.div`
width: 100%;
height: 700px;
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
export const Title = styled.h1`
color: #7c9def;
font-family: "Poppins-ExtraBold", sans-serif;
font-size: 30px; 
font-weight: 800;
display: flex;
justify-content: center;
filter: brightness(80%);
margin: -20px 0 0 0;
`;

export const Step = styled.div`
display: flex;
justify-content: center;
width:100%;
height:100px;
align-items: center;
padding-top:10px;
margin-bottom:10px;
filter: brightness(80%);
`;

export const One = styled.div`
flex-direction: column;
margin-right:10px;

`;
export const BlueCircle= styled.p`
border-radius: 50%;
width: 40px;
height: 40px; 
background: #7c9def;
box-shadow: 0px 0px 15px 0px rgba(31, 31, 31, 0.2);
position: absolute;
margin:0 0px 0 0px;
 
`;

export const Numone= styled.p`
position: relative;
color: #FFFFFF;
text-align: center;
font-family: "Pretendard-Regular", sans-serif;
font-size: 24px;
font-weight: 400;
border-radius: 50%;
margin: 5px 0px 15px 0;
`;
export const Stepname = styled.span`
color: #7c9def;
text-align: center;
font-family: "Pretendard-Medium", sans-serif;
font-size: 12px;
font-weight: 500;
white-space:nowrap;



`;
export const Two = styled.div`
margin-right:10px;

`;


export const WhiteCircle= styled.p`

background: #ffffff;
border-radius: 50%;
width: 40px;
height: 40px;
box-shadow: 0px 0px 15px 0px rgba(31, 31, 31, 0.2);
position: absolute;
margin-top:-5px;
margin-left:12px;
`;

export const Numtwo= styled.p`
position: relative;

color: #484545;
text-align: center;
font-family: "Pretendard-Regular", sans-serif;
font-size: 24px;
font-weight: 400;

border-radius: 50%;
margin: 0px 15px 30px 26px;
`;

export const Thr = styled.div`
margin-right:10px;
 
`;


export const Numthr= styled.p`
position: relative;

color: #484545;
text-align: center;
font-family: "Pretendard-Regular", sans-serif;
font-size: 24px;
font-weight: 400;

border-radius: 50%;
margin: 0px 0px 30px 25px;
`;

export const Gray = styled.h3`
background: #D9D9D9;
border-radius: 50%;
width: 4px;
height: 4px;
box-shadow: 0px 0px 15px 0px rgba(31, 31, 31, 0.2);
margin: 0  3px 30px 2px;
filter: brightness(80%);

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

justify-content: center;
align-items: center; 
flex-direction: column;
padding: 20px;

width: 90%;
max-width: 600px;
background-color: #fff;
border-radius: 10px;
overflow: hidden; /* Main 내부의 스크롤 방지 */

`;

export const Name = styled.h1`
text-align: left;
font-family: "Pretendard-Medium", sans-serif;
font-size: 15px;
margin-bottom:20px;
`;
export const Detail = styled.h1`
font-size: 9px;
text-align: left;
font-family: "Pretendard-Thin", sans-serif;
max-height: 300px; /* 높이 조정 */
overflow-y: auto; /* 세로 스크롤바 활성화 */
margin-bottom: 20px; /* 스크롤 영역과 다음 버튼 사이 간격 */

/* 스크롤바 전체 디자인 */
&::-webkit-scrollbar {
  width: 12px; /* 스크롤바 너비 */
  background-color: #D9D9D9; /* 스크롤바 배경 색상 */
}

/* 스크롤바 핸들(바) 디자인 */
&::-webkit-scrollbar-thumb {
  background-color: #678EF2; /* 스크롤바 색상 */
  border-radius: 4px; /* 스크롤바 모서리 둥글기 */
}

/* 스크롤바 버튼(위, 아래) 디자인 */
&::-webkit-scrollbar-button {
  display: block;
  height: 16px; /* 버튼 높이 */
  background-color: #D9D9D9; /* 버튼 색상 */
}
`;



export const Nextbtn = styled(Link)`
 
background: #ffffff;
border-radius: 10px;
border-style: solid;
border-color: #678ef2;
border-width: 2px;
width: 100px;
height: 33px;
color: #678ef2;
text-align: center;
font-family: "Pretendard-SemiBold", sans-serif;
font-size: 13px;
font-weight: 600;
margin:-3px 0 0 0px;

text-decoration : none;
display: flex;
justify-content: center;
align-items: center;
padding:0 10px;

cursor: pointer; // 마우스 오버 시 커서 변경

transition: background-color 0.2s ease, border-color 0.2s ease; /* 배경색과 테두리 색상 동시에 전환 */
&:hover {
  background-color: #678ef2; // 호버 시 배경색 변경
  border-color: #ffffff;
  color:#ffffff;
  opacity:0.2;
}
  margin: 0 auto; /* 중앙 정렬 */
`;

export const MainContentBox = styled.div`
min-height: calc(100vh - 200px); 

  
`;