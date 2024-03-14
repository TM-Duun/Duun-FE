import styled from "styled-components";


export const Wrapper = styled.div`
    width : 100%;
    height : 40%;
    margin : 0;
    padding : 50px 200px;
    box-sizing : border-box;
    display : flex;
    justify-content : center;
    align-items : center;
`;

export const MpProfileContainer = styled.div`
    width : 40%;
    height : 100%;
    margin : 0;
    padding : 20px;
    display : flex;
    flex-direction: column;
    justify-content : center;
    background-color : #D5DFF9;
`;

export const ProfileName = styled.p`
    font-size: 14px;
    font-weight: 500;
    font-family : 'pretendard';
    color : #678EF2;
`;

export const ProfileLevel = styled.p`
    font-size: 24px;
    font-weight: 600;
    font-family : 'poppins
    color : #678EF2;
`;

export const ProfileSub = styled.p`
    font-size: 16px;
    font-weight: 500;
    font-family : 'pretendard';
    color : #678EF2;
`;

export const MpInfoContainer = styled.div`
    width : 60%;
    height : 100%;
    margin : 0;
    padding : 40px 20px;
    box-sizing : border-box;
    display : flex;
    justify-content : center;
    align-items : center;
`;

export const InfoBox = styled.div`
    width : auto;
    flex-grow : 1;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction : column;
`;

export const InfoTitle = styled.p`
    font-size : 20px;
    font-weight : 500;
    font-family : 'pretendard';
    color : #678EF2;
`;

export const InfoItem = styled.p`
    font-size : 24px;
    font-weight : bold;
    font-family : 'pretendard';
    color : #678EF2;
`;
