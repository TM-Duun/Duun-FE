import styled from "styled-components";

export const Wrapper = styled.div`
    width : 100%;
    height : 100%;
    margin : 10% 0 0 0;
    padding : 10px;
    box-sizing : border-box;
    display : flex;
    justify-content : space-between;
    align-items : center;
    overflow : hidden;
`;

export const MpMenu = styled.div`
    position : relative;
    width : auto;
    height : auto;
    margin : 0;
    padding : 0;
`;

export const Circle = styled.img`
    position : absolute;
    top : -10px;
    left : -10px;
    width : 30px;
    height : 30px;
    object-fit : contain;
`;

export const MenuItemTitle = styled.ul`
    font-weight : bold;
    font-size : 24px;
    font-family : 'pretendard';
    color : black;
    text-align : left;
    margin : 0;
    padding : 0;
`;

export const MpMenuItem = styled.li`
    font-weight : 500;
    font-size : 20px;
    font-family : 'pretendard';
    color : #484545;
    list-style-type : none;
    margin: 25px 0 0 20px;

    a {
        text-decoration : none;
        color : #484545;
        margin : 0;
        padding : 0;
    }

    a:hover {
        border-bottom : 1px solid #484545;
    }
`;