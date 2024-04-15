import styled from "styled-components";

export const ImgContainer=styled.div`
    /* position:absolute; */
    /* border:1px solid red; */
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 20px 20px 0 0;
    background-color:inherit;
    /* border:1px solid red; */
    border: 2px solid #F4F2F2;
    overflow: hidden;
`;

export const GridInImg=styled.img`
    position: absolute;
    /* border:1px solid blue; */
    width:90%;
    height: 75%;
    top:50%;
    left: 50%;
    transform: translate(-50%, -45%);
    object-fit: contain;

`;

export const GridHeart=styled.img`
    margin : 0;
    object-fit : contain;
    right: 12%;
    width: 12%;
    height: 12%;
    top:5%;
    position: absolute;
    z-index: 4;
    &:hover {
        cursor : pointer;
    }
`;
export const GridTextDiv=styled.div`
    position: absolute;
    width: 100%;
    height: 25%;
    background-color: white;
    border-radius: 0 0 20px 20px;
    bottom: 0px;
    display: flex;
    flex-direction: row;
`;
export const GridSpan=styled.div`
    width:auto;
    height: auto;
    font-size: 12px;
    margin-top: 8px;
    margin-left: 10px;
    font-weight: bold;
    line-height: 22px;
    p{
        font-size: 17px;
    }
`;

export const GridCart=styled.div`
    width: 20%;
    height: 100%;
    img{
        margin-top: 25px;
        height: 25px;
        width: 25px;
        &:hover {
        cursor : pointer;
        }   
    }
`;