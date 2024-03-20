import { Dash, TlBtn, TlDateInput, TlMenu, TlPickerContainer, TlSelect, TlSubmitInput, TlWrapper } from "../../Shared/TimeLine/TimeLine";

export default function CounselListTop() {
  return (
    <TlWrapper>
            <TlMenu>
                <TlSelect>
                    <TlBtn>1년</TlBtn>
                    <TlBtn>6개월</TlBtn>
                    <TlBtn>3개월</TlBtn>
                    <TlBtn>1개월</TlBtn>
                </TlSelect>
            </TlMenu>
            <TlPickerContainer>
                <TlDateInput defaultValue="2024-01-25"/>
                <Dash>~</Dash>
                <TlDateInput defaultValue="2024-02-26"/>
                <TlSubmitInput
                    type="submit"
                    value="조회"/>
            </TlPickerContainer>
        </TlWrapper>
  )
}
