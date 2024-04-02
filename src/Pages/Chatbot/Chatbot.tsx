import Modal from 'react-modal';
import { Chat, ChatForm, ChatWrapper, DuunImg, DuunText, DuunTextDiv, 
    FnqBtn, FnqDiv, HelpDuun, SendBtn, SendImg,Header,CloseBtn, Chatwrapper1, Chatbotdiv } from './ChatbotStyles';
import React, { useEffect, useRef, useState } from 'react';


interface ChatBotProps{
    isOpen: boolean;
    onClose: () => void;
}

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
  }


export default function ChatBot({isOpen, onClose}:ChatBotProps){

    const [inputValue,setValue]=useState('')

    const handleValue=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event?.target.value);
    }
    const handleSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        setShowFAQ(false);
        if (!inputValue.trim()) return;
        addMessage(inputValue, 'user');
        setValue(''); // 입력 필드 초기화
        
    }    
    const handleFaqClick = (question: string, answer: string) => {
        addMessage(question, 'user');
        addMessage(answer, 'bot');
        setShowFAQ(false);
    };
    const [messages, setMessages] = useState<Message[]>([]);

    const addMessage = (text: string, sender: 'user' | 'bot') => {

        const newMessage: Message = {
            id: messages.length + 1,//뭘로 하지?
            text,
            sender
        };
        setMessages(prevMessages => [...prevMessages, newMessage]);
    };

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px', 
            height: '650px', 
            borderRadius: '30px',
            border:'1px solid #7C9DEF',
            overflowY: 'hidden',
        },
        overlay: {
            zIndex:'100',
            backgroundColor: 'rgba(0, 0, 0, 0)',
        },
    };

    const [showFAQ, setShowFAQ] = useState(true);

    const chatWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(chatWrapperRef.current) {
            chatWrapperRef.current.scrollTop = chatWrapperRef.current.scrollHeight;
        }
    }, [messages]); // 메시지 상태가 변경될 때마다 실행
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
                {showFAQ &&(
                    <div style={{paddingLeft:'10px',height:'92%'}}>
                        <HelpDuun>
                            <DuunImg src="/homedata/chatbot.png"/>
                            <DuunTextDiv>무엇을 도와드릴까요?
                                <DuunText>드우니</DuunText>
                            </DuunTextDiv>
                        </HelpDuun>
                        <FnqDiv>
                           <FnqBtn onClick={() => handleFaqClick("반품은 어디서 하나요?", "반품은 마이페이지>상태관리>취소/반품 조회에서 확인할 수 있습니다.")}>
                             반품은 어디서 하나요?
                         </FnqBtn>
                            <FnqBtn onClick={() => handleFaqClick("주문 취소시 며칠 내에 환불 처리 되나요?", "3~5일 내에 환불 처리 됩니다.")}>
                                 주문 취소시 며칠 내에 환불 처리 되나요?</FnqBtn>
                            <FnqBtn onClick={() => handleFaqClick("주문 취소는 어디서 하나요?", "마이페이지>상품 내역>결제 내역에서 취소할 수 있습니다.")}>
                             주문 취소는 어디서 하나요?</FnqBtn>
                         <FnqBtn onClick={() => handleFaqClick("결제 방법", "카드 및 무통장 가능합니다.")}>
                             결제 방법</FnqBtn> 
                        </FnqDiv>
                    </div>
                )}
                {!showFAQ &&(

                    <Chatwrapper1 ref={chatWrapperRef}>
                        {messages.map((message) => (
                            <div key={message.id} style={{ display: 'flex', justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start', alignItems: 'center', margin: '10px 0' }}>
                                {message.sender === 'bot' && (
                                    <img src="/homedata/chatbot.png" alt="Bot Profile" style={{ width: '40px', height: '40px', borderRadius: '20px', marginRight: '10px' ,objectFit:'contain',backgroundColor:'#7C9DEF'}} />
                                )}
                                <div style={{maxWidth: '70%', padding: '10px', borderRadius: '20px', backgroundColor: message.sender === 'user' ? '#7C9DEF' : '#f0f0f0', color: message.sender === 'user' ? 'white' : 'black' }}>
                                    <p>{message.text}</p>

                                    {message.sender==='bot'&&(
                                         <div>
                                         <FnqDiv>
                                             <FnqBtn onClick={() => handleFaqClick("반품은 어디서 하나요?", "반품은 마이페이지>상태관리>취소/반품 조회에서 확인할 수 있습니다.")}>
                                                반품은 어디서 하나요?
                                             </FnqBtn>
                                             <FnqBtn onClick={() => handleFaqClick("주문 취소시 며칠 내에 환불 처리 되나요?", "3~5일 내에 환불 처리 됩니다.")}>
                                                 주문 취소시 며칠 내에 환불 처리 되나요?</FnqBtn>
                                             <FnqBtn onClick={() => handleFaqClick("주문 취소는 어디서 하나요?", "마이페이지>상품 내역>결제 내역에서 취소할 수 있습니다.")}>
                                                주문 취소는 어디서 하나요?</FnqBtn>
                                             <FnqBtn onClick={() => handleFaqClick("결제 방법", "카드 및 무통장 가능합니다.")}>
                                                결제 방법</FnqBtn> 
                                         </FnqDiv>
                                     </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </Chatwrapper1>

                )}
                <Chatbotdiv>
                    <ChatForm onSubmit={handleSubmit}>
                        <Chat onChange={handleValue} value={inputValue} type='text' placeholder='묻고 싶은 것을 입력하세요'/>
                        <SendBtn type='submit'>
                        <SendImg src='/chatbotdata/send.svg'/>
                    </SendBtn>
                    </ChatForm>
                </Chatbotdiv>
            </ChatWrapper>
        </Modal>
    )
}