import { FlContainer, FlContent, FlTitle, FlWrapper } from "./FaqListStyles"


export default function FaqList() {

    const faqData = [
        { title: '배송 및 반품 안내', content: '배송 관련하여 본 서비스는 어떠한 책임도 묻지 않으며, 알아서 처리하시길 바랍니다'},
        { title: '배송 및 반품 안내', content: '배송 관련하여 본 서비스는 어떠한 책임도 묻지 않으며, 알아서 처리하시길 바랍니다'},
        { title: '배송 및 반품 안내', content: '배송 관련하여 본 서비스는 어떠한 책임도 묻지 않으며, 알아서 처리하시길 바랍니다'},
    ]

    return (
        <FlWrapper>
            {faqData.map((faq, index) => (
                <FlContainer key={index}>
                    <FlTitle>{faq.title}</FlTitle>
                    <FlContent>{faq.content}</FlContent>
                </FlContainer>  
            ))}
        </FlWrapper>
    )
}
