import styled from "styled-components";


export const MpTop = styled.div`
    width : 70vw;
    height : 40vh;
    margin : 0 0 0 0;
    padding : 0;
    display : flex;
    justify-content : center;
    align-items : center;
`;

export const MpProfileContainer = styled.div`
    width : 40%;
    height : 100%;
    margin : 0;
    padding : 20px 30px;
    box-sizing : border-box;
    display : flex;
    flex-direction: column;
    gap : 20px;
    justify-content : center;
    background-color : #D5DFF9;
    border-radius : 50px 0 0 50px;
`;

export const ProfileName = styled.p`
    font-size : 20px;
    font-weight: 500;
    font-family : 'pretendard';
    color : #678EF2;
`;

export const ProfileLevelContainer = styled.div`
    display : flex;
    align-items : center;
    gap : 10px;
`;

export const ProfileLevel = styled.p`
    font-size : 32px;
    font-weight : bold;
    font-family : 'pretendard';
    color : #678EF2;
`;

export const ProfileImg = styled.img`
    width : 32px;
    height : 32px;
`;

export const ProfileSub = styled.p`
    font-size : 16px;
    font-family : 'pretendard';
    font-weight : medium;
    color : #678EF2;

    b {
        font-weight : bold;
    }
`;

export const MpInfoContainer = styled.div`
    width : 60%;
    height : 100%;
    display : flex;
    align-items : center;
    margin : 0;
    padding : 20px;
    box-sizing : border-box;
    background-color : #F0F2F9;
    border-radius : 0 50px 50px 0;
`;

export const InfoBox = styled.div`
    width : 100%;
    height : 100%;
    flex-grow : 1;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    gap : 20px;
    margin : 0;
    padding : 0;
`;

export const InfoTitle = styled.p`
    font-size: 20px;
    font-family : 'pretendard';
    font-weight : regular;
    color : #678EF2;
`;

export const InfoItem = styled.p`
    font-size: 24px;
    font-family : 'pretendard';
    font-weight : bold;
    color : #678EF2;
`;

export const MpBottom = styled.div`
    width : 70vw;
    height : 40vh;
    margin : 0;
    padding : 0;
    display : flex;
    justify-content : space-between;
    align-items : center;
`;

export const MpMenu = styled.div`
    position : relative;
    width : auto;
    height : 100px;
    margin : 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    justify-content : center;
`;

export const Circle = styled.img`
    position : absolute;
    top : -10px;
    left : -10px;
    width : 30px;
    height : 30px;
`;

export const MenuItemTitle = styled.p`
    font-size: 24px;
    font-family : 'pretendard';
    font-weight : bold;
    color : black;
    margin-bottom : 10px;
`;

export const MpMenuItem = styled.div`
    width : 100%;
    height : 100%;
    a {
        margin : 10px 0 0 20px;
        font-size: 16px;
        font-family : 'pretendard';
        font-weight : medium;
        color : #484545;
        text-decoration : none;

        &:hover {
            border-bottom : 1px solid #484545;
        }
    }
`;