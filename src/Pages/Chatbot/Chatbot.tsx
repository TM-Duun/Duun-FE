import Modal from 'react-modal';
import { Chat, ChatDiv, ChatWrapper, DuunImg, DuunText, DuunTextDiv, 
    FnqBtn, FnqDiv, HelpDuun, SendBtn, SendImg,Header,CloseBtn } from './ChatbotStyles';


interface ChatBotProps{
    isOpen: boolean;
    onClose: () => void;
}

export default function ChatBot({isOpen, onClose}:ChatBotProps){

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px', 
            height: '650px', 
            borderRadius: '30px',
            border:'1px solid #7C9DEF'
        },
        overlay: {
            zIndex:'100',
            backgroundColor: 'rgba(0, 0, 0, 0)',
        },
    };

    return(
        <Modal
                isOpen={isOpen}
                onRequestClose={onClose}
                contentLabel="Example Modal"
                style={customStyles}
            >
            <Header>
                <CloseBtn onClick={onClose}>&times;</CloseBtn>
            </Header>
            <ChatWrapper>
                <HelpDuun>
                    <DuunImg src="/homedata/chatbot.png"/>
                    <DuunTextDiv>무엇을 도와드릴까요?
                        <DuunText>드우니</DuunText>
                    </DuunTextDiv>
                </HelpDuun>
                <FnqDiv>
                    <FnqBtn>반품은 어디서 하나요?</FnqBtn>
                    <FnqBtn>주문 취소시 며칠 내에 환불 처리 되나요?</FnqBtn>
                    <FnqBtn>주문 취소는 어디서 하나요?</FnqBtn>
                    <FnqBtn>결제 방법</FnqBtn>
                </FnqDiv>
                <ChatDiv>
                    <Chat placeholder='묻고 싶은 것을 입력하세요'/>
                    <SendBtn>
                            <SendImg src='/chatbotdata/send.svg'/>
                        </SendBtn>
                </ChatDiv>
            </ChatWrapper>
        </Modal>
    )
}