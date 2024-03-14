import styled from "styled-components";

export const Wrapper = styled.div`
    width : 100%;
    height : 40vh;
    margin : 0;
    padding : 10px 200px;
    box-sizing : border-box;
    display : flex;
    justify-content : center;
    align-items : center;
    overflow : hidden;
`;

export const MpMenu = styled.ul`
    width : auto;
    flex-grow : 1;
    flex-direction : column;
    justify-content : center;
`;

export const MenuItemTitle = styled.ul`
    font-weight : bold;
    font-size : 20px;
    font-family : 'pretendard';
    color : black;
`;

export const MpMenuItem = styled.li`
    font-weight : 500;
    font-size : 16px;
    font-family : 'pretendard';
    color : #484545;
`;