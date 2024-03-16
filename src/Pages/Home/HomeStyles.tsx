import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top :8vh;
    height : 250vh;
    display : flex;
    flex-direction: column;
    padding-left:200px; 
    padding-right: 200px;
    box-sizing: border-box;
`;
export const Main= styled.div`
    justify-content: center;
    position: relative;
`;
export const Image=styled.img`
    object-fit: cover;
    border-radius: 0 0 20px 20px;
    height: 100%;
    width: 100%;
`;
export const MainImg_text=styled.span`
    position: absolute;
    font-family: 'pretendard';
    font-size: 38px;
    font-weight: bold;
    top: 50%;
    left: 50%;
`;


export const NewContainer = styled.div`
    /* padding-left: 200px;
    padding-right: 200px; */
    font-family: 'Poppins';
    padding-top:60px
`;
export const Span=styled.span`
    font-weight: 700;
    font-size:60px
`;
export const New_new=styled.h5`
    font-family: 'pretendard';
    margin-top: 0px;
    margin-bottom: 30px;
    white-space: nowrap;

`;
export const Btns=styled.div`
    padding-top: 30px;
    display: flex;
`;
export const Btn=styled.button`
    width: 90px;
    height: 40px;
    margin-right: 10px;
    font-weight: 600;
    border: none;
    background-color: #F6F6F6;
    border-radius: 12px;
`;
export const Small_img_div=styled.div`
    margin-top:30px;
    width: 250px;
    height: 300px;
    border-radius: 15px;
    background-color: #F6F6F6;
    display: flex;
    justify-content: center;//자식 가로방향 가운데
    align-items: center;//자식 세로방향 가운데
`;
export const Small_img=styled.img`
    width: 160px;
    height: 260px;
`;
export const Category=styled.div`
    padding-top: 50px;
    display: flex;
    justify-content: space-between;
    font-family: 'Poppins';
`;
interface CategoryImgProps{
    src:string;
}
export const Category_img=styled.div<CategoryImgProps>`
    width: 47%;
    height: 300px;
    border-radius: 15px;
    margin-top:20px;
    background-image: url(${props=>props.src});
    background-size: cover;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
`;
export const Category_text=styled.div`
    font-weight: 600;
    letter-spacing: 5px;
`;

export const Coupon=styled.div`
    padding-top: 50px;
    display: flex;
    justify-content: space-between;
    height: 400px;
`;
export const Coupon_img=styled.img`
    width: 55%;
    border-radius: 20px 0 0 20px;

`;
export const Coupon_download=styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    border-radius: 0 20px 20px 0;
`;
export const Voucher=styled.div`
    height: 50%;
    display: flex;
    flex-direction: row;
`;
export const Voucher_1=styled.div`
    width: 80%;
    background-color: #F6F6F6;
    justify-content: left;
    align-items: center;
    display: flex;
`;
export const Voucher_2=styled.div`
    border-left: 2px dashed white;
    width: 20%;
    background-color: #F6F6F6;
    border-radius: 0 20px 20px 0 ;
`; 
export const Voucher_p=styled.p`
    padding-left: 40px;
    font-family: 'Pretendard';
    font-size: 24px;
    line-height: 40px;
    white-space: nowrap;
`;