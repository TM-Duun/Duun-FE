import styled from "styled-components";



export const Wrapper = styled.div`
    width : 100%;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`;

export const MfContainer = styled.div`
    width : 100%;
    height : 40%;
    margin : 0;
    padding : 30px 80px;
    box-sizing : border-box;
    display : flex;
    justify-content : flex-start;
    align-items : center;
    border-bottom : 1px solid #C2C2C2;
`;

export const MfCategoryBox = styled.div`
    width : 20%;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    gap : 30px;
    flex-direction :column;
    justify-content : space-evenly;

    p {
        width : 100%;
        height : 100%;
        font-size : 18px;
        font-family : 'pretendard';
        font-weight : medium;
        color : black;

        span {
            color : #3D5AF1;
        }
    }
`;

export const MfDataBox = styled.div`
    width : 80%;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    gap : 20px;
    flex-direction : column;
    justify-content : center;
    
`;

export const MfIdBox = styled.div`
    width : auto;
    height : auto;
    flex-grow : 1;
    gap : 20px;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : flex-start;
`;

export const ChangeBtn = styled.div`
    width : 100px;
    height : 40px;
    margin : 0;
    padding : 0 10px;
    box-sizing : border-box;
    display : flex;
    align-items : center;
    justify-content : center;
    color : white;
    background-color : #868686;
    border-radius : 30px;
    font-size : 12px;

    &:hover {
        cursor : pointer;
    }
`;

export const MfName = styled.p`
    flex-grow : 1;
    width : auto;
    height : auto;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    font-size : 18px;
    font-family : 'pretendard';
    font-weight : medium;
    color : black;
`;

export const MfExtraContainer = styled.div`
    width : 100%;
    height : 50%;
    margin : 0;
    padding : 30px 80px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    justify-content : center;
    border-bottom : 1px solid #C2C2C2;
    gap : 20px;
`;

export const ExtraMetaBox = styled.div`
    width : 100%;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    gap : 30px;
    align-items : center;
    justify-content : flex-start;
    
    p {
        width : 20%;
        height : 100%;
        margin : 0;
        padding : 0;
        font-size : 18px;
        font-family : 'pretendard';
        font-weight : medium;
        color : black;

        span {
            color : #3D5AF1;
        }
    }
`;

export const ExtraPhoneBox = styled.div`
    width : 100%;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    gap : 10px;
    align-items : center;
    justify-content : flex-start;
`;

export const PhoneDiv = styled.div`
    width : 100px;
    height : 40px;
    display : flex;
    align-items : center;
    justify-content : center;
    margin : 0;
    padding : 0;
    background-color : #c9c9c9;
    border : 0.5px solid #c5c5c5;
    color : #A5A5A5;
`;

export const ExtraAdMetaBox = styled.div`
    width : 100%;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    gap : 30px;
    justify-content : flex-start;
    
    p {
        width : 20%;
        height : 100%;
        margin : 10px 0 0 0;
        padding : 0;
        font-size : 18px;
        font-family : 'pretendard';
        font-weight : medium;
        color : black;

    }
`;

export const ExtraAddressContainer = styled.div`
    width : 100%;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    justify-content : flex-start;
`;

export const ExtraAddressBox = styled.div`
    width : 100%;
    height : 100%;
    margin : 0 0 10px 0;
    padding : 0;
    display : flex;
    gap : 10px;
    align-items : center;
    justify-content : flex-start;
`;

export const AddressNum = styled.div`
    width : 100px;
    height : 40px;
    display : flex;
    align-items : center;
    justify-content : center;
    margin : 0;
    padding : 0;
    background-color : #c9c9c9;
    border : 0.5px solid #c5c5c5;
    color : #A5A5A5;
`;

export const ExtraAddressContent = styled.div`
    width : 80%;
    height : 40px;
    margin : 0 0 10px 0;
    padding : 5px 10px;
    box-sizing : border-box;
    display : flex;
    justify-content : flex-start;
    align-items : center;
    background-color : #c9c9c9;
    border : 0.5px solid #c5c5c5;
    color : #A5A5A5;
`;

export const ExtraEmailBox = styled.div`
    width : 100%;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    gap : 10px;
    align-items : center;
    justify-content : flex-start;

    p {
        font-size : 18px;
        font-family : 'pretendard';
        font-weight : medium;
        color : black;
    }

    label, select {
        width : 100px;
        height : 40px;
        margin : 0;
        padding : 10px;
        box-sizing : border-box;
        display : flex;
        align-items : center;
        border : 0.5px solid #c5c5c5;
        color : black;
        font-family : 'pretendard';
        font-weight : medium;
        font-size : 14px;
    }

    select {
        width : 120px;
    }
`;

export const EmailDiv = styled.div`
    width : 100px;
    height : 40px;
    margin : 0;
    padding : 10px;
    box-sizing : border-box;
    display : flex;
    align-items : center;
    border : 0.5px solid #c5c5c5;
    color : black;
    font-family : 'pretendard';
    font-weight : medium;
`;

export const MfCheckContainer = styled.div`
    width : 100%;
    height : 10%;
    margin : 20px 0 0 0;
    gap : 20px;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : flex-end;
`;

export const MfSaveBtn = styled.div`
    width : 100px;
    height : 40px;
    margin : 0;
    padding : 0 10px;
    box-sizing : border-box;
    display : flex;
    align-items : center;
    justify-content : center;
    color : white;
    background-color : #678EF2;
    border-radius : 30px;
    font-size : 12px;

    &:hover {
        cursor : pointer;
    }
`;

export const MfCancelBtn = styled.div`
    width : 100px;
    height : 40px;
    margin : 0;
    padding : 0 10px;
    box-sizing : border-box;
    display : flex;
    align-items : center;
    justify-content : center;
    color : #678EF2;
    background-color : white;
    border-radius : 30px;
    border : 1px solid #678EF2;
    font-size : 12px;

    &:hover {
        cursor : pointer;
    }
`;




