import React from "react";
import { Gray, OneStep, SignUpStepBox, SignUpTitle, StepBox, StepName, SuhWrapper } from "./SuhStyles";

const steps = [
    { number: "1", name: '이용약관' },
    { number: "2", name: '회원정보' },
    { number: "3", name: '개인정보입력' },
];

const renderGrays = () => (
    <>
        <Gray />
        <Gray />
        <Gray />
    </>
);

export default function SignUpHeader() {
  return (
    <SuhWrapper>
        <SignUpTitle>회원가입</SignUpTitle>
        <SignUpStepBox>
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    <OneStep>
                        <StepBox>
                            <p>{step.number}</p>
                        </StepBox>
                        <StepName>{step.name}</StepName>
                    </OneStep>
                    {index < steps.length - 1 && renderGrays()}
                </React.Fragment>
            ))}
        </SignUpStepBox>
    </SuhWrapper>
  )
}
