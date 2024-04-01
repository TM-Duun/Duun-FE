import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    margin-top: -20px;
`;
export const CloseBtn = styled.button`
    margin-left: auto;
    background: none;
    border: none;
    color:#C9C9C9;
    font-size: 35px;
    &:hover{
        cursor: pointer;
    }
`;

export const Chatwrapper1= styled.div`
  overflow-y: auto; //메세지 많아지면 스크롤 
  height: 600px;
  line-height: 20px;
  font-size: 14px;

`;

export const ChatWrapper=styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    font-family:'pretendard';
`;

export const HelpDuun=styled.div`
    margin-top: 60%;
    display: flex;
`;
export const DuunTextDiv=styled.div`
    display: flex;
    margin-left:10px;
    flex-direction: column;
    font-size: 24px;
    color: #3D5AF1;
`;
export const DuunText=styled.span`
    margin-top: auto;
    color: black;
    font-size: 20px;
    font-weight: bold;
`;
export const DuunImg=styled.img`
    height: 75px;
    width: 100px;
`;
export const FnqDiv=styled.div`
    margin-top: 20px;
`;
export const FnqBtn=styled.button`
    box-shadow : 0px 0px 10px rgba(0, 0, 0, 0.1);
    background-color: white;
    border: none;
    border-radius: 15px;
    font-size: 12px;
    padding:0 15px;
    height: 20px;
    margin: 0 15px 15px 0;
    &:hover{
        cursor : pointer;
    }
`;

export const Chatbotdiv=styled.div`
    height: 8%;
`;
export const ChatForm=styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`;
export const Chat=styled.input`
    background-color: #F8F8F7;
    border: none;
    height: 30px;
    width: 100%;
    border-radius: 53px;
    padding-left: 20px;
    /* position: relative; */
    margin-left: 10px;

    ::placeholder{
        color: #AAAAAA;
    }
`;
export const SendBtn=styled.button`
    /* position: absolute; */
    /* left:85%; */
    /* margin-left: auto; */
    margin-left: 10px;
    display: flex;
    margin-right:10px;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: none;
    height: 30px;
    width: 30px;
    border-radius: 20px;
    box-shadow : 0px 0px 20px rgba(0, 0, 0, 0.1);
    &:hover{
        cursor : pointer;
    }

`;
export const SendImg=styled.img`
    height: 22px;
    width: 22px;
`;