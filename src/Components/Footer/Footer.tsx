import { FooterContainer, FooterContent, FooterDesContainer, FooterDesRights, FooterLink, FooterLinkContainer, FooterLinkContent, FooterLinkTitle, HorizonBox } from "./FooterStyles";
import { useLocation } from 'react-router-dom';

export default function Footer() {

    const location = useLocation();
    if(location.pathname.includes('/detail')){
        return null;
    }
  return (
    <FooterContainer>
        <FooterContent>
            <FooterLinkContainer>
                <FooterLinkTitle>
                    오직&nbsp;<span>Duun</span>에서
                </FooterLinkTitle>
                <HorizonBox></HorizonBox>
                <FooterLinkContent>
                    <FooterLink href="/">Duun 소개</FooterLink>
                    <FooterLink href="/">고객 센터</FooterLink>
                    <FooterLink href="/">미디어 센터</FooterLink>
                    <FooterLink href="/">이용 약관</FooterLink>
                    <FooterLink href="/">개인정보</FooterLink>
                    <FooterLink href="/">회사정보</FooterLink>
                    <FooterLink href="/">문의하기</FooterLink>
                    <FooterLink href="/">법적 고지</FooterLink>
                    <FooterLink href="/">투자 정보</FooterLink>
                    <FooterLink href="/">입사 정보</FooterLink>
                    <FooterLink href="/">속도 테스트</FooterLink>
                    <FooterLink href="/">Only Duun</FooterLink>
                </FooterLinkContent>
                <FooterDesContainer>
                    <FooterDesRights>
                        &copy; Duun Rights Reserved.
                    </FooterDesRights>
                </FooterDesContainer>
            </FooterLinkContainer>
        </FooterContent>
    </FooterContainer>
  )
}