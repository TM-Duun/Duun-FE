import styled from "styled-components";


export const Wrapper = styled.div`
    width : 100%;
    height : 100%;
    margin : 0;
    padding : 0;
    box-sizing : border-box;
    display : flex;
    justify-content : center;
    align-items : center;
`;

export const MpProfileContainer = styled.div`
    width : 40%;
    height : 250px;
    margin : 0;
    display : flex;
    flex-direction: column;
    justify-content : space-evenly;
    background-color : #D5DFF9;
    border-radius : 50px 0 0 50px;
`;

export const ProfileName = styled.p`
    font-size: 14px;
    font-weight: 500;
    font-family : 'pretendard';
    color : #678EF2;
    margin-left : 50px;
`;

export const ProfileLevelContainer = styled.div`
    width : auto;
    height : auto;
    margin : 0;
    margin-left : 50px;
    padding : 0;
    display : flex;
    align-items : center;
`;

export const ProfileLevel = styled.p`
    font-size: 24px;
    font-weight: 600;
    font-family : 'poppins';
    color : #678EF2;
    padding : 0;
    margin-right : 10px;
`;

export const ProfileImg = styled.img`
    width : 30px;
    height : 30px;
    object-fit : contain;
`;

export const ProfileSub = styled.p`
    font-size: 16px;
    font-weight: 500;
    font-family : 'pretendard';
    color : #678EF2;
    margin-left : 50px;
    line-height : 20px;
`;

export const MpInfoContainer = styled.div`
    width : 60%;
    height : 250px;
    margin : 0;
    display : flex;
    justify-content : space-evenly;
    align-items : center;
    background-color : #F0F2F9;
    border-radius : 0px 50px 50px 0;
`;

export const InfoBox = styled.div`
    width : 100%;
    flex-grow : 1;
    height : auto;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction : column;
    position : relative;

    &:not(:last-child)::after {
        content: '';
        position : absolute;
        right : 0;
        top : 0;
        bottom : 0;
        width : 1px;
        background-color : #678EF2;
    }
`;

export const InfoTitle = styled.p`
    font-size : 20px;
    font-weight : 500;
    font-family : 'pretendard';
    color : #678EF2;
    margin-bottom : 20px;
`;

export const InfoItem = styled.p`
    font-size : 24px;
    font-weight : bold;
    font-family : 'pretendard';
    color : #678EF2;
`;
