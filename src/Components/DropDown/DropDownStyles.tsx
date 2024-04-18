import styled from "styled-components";
export const DWrapper = styled.div`
  position:relative;
  width: 110px;
  font-family: 'pretendard';
  font-size: 15px;
`;
// export const CategoryMenuBox = styled.div`
//   position: absolute;
//   display: flex;
//   width: 100%;
//   height: 60%;
//   justify-content: center;
//   align-items: center;
//   border:1px solid blue;
// `;

// export const DropDownBoxWrap = styled.div`
//   width: 100%;
//   border: 1px solid red;
//   /* position: relative; */
// `;

// export const DropDownContainer = styled.ul`
//   /* position: absolute; */
//   width: 100%;
//   height: auto;
//   padding: 0px;
//   flex-direction: column;
//   list-style: none;
//   border: 1px solid yellow;
//   margin-top: 70px;
// `;

// export const ListItem = styled.li`
//   display: flex;
//   justify-content: center;
//   /* align-items: center; */
//   list-style: none;
//   /* z-index: 1; */
//   margin-top: 10px;
// `;

export const Btn=styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  border: 1px solid #7C9DEF;
  font-size: 15px;
  border-radius: 10px;
  padding: 10px;
  &:hover{
    cursor: pointer;
   }
  width: 100%;
  color: #6C6C6C;
  img{
    width : 20px;
    height : 20px;
    object-fit : contain;
  }
`;

export const DropList=styled.ul`
    position: absolute;
    /* top: 30px; */
    /* left: 0; */
    width: 100%;
    text-align: center;
    border: 1px solid #7C9DEF;
    color: #6C6C6C;
    border-radius: 10px;
    list-style-type: none;
    background-color: white;
    z-index: 102;
`;

export const ListItems=styled.li`
   padding: 12px;
   border-bottom: 1px solid #7C9DEF;
   &:hover{
    cursor: pointer;
   }
  &:last-child {
    border-bottom: none; // 마지막 항목에는 하단 테두리가 없도록 설정
  }
`;