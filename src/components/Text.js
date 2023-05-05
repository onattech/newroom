import * as React from "react";

import styled from "@emotion/styled";

const TEXT = "1,300 rooms generated and counting";

export const SubHeading = () => {
  return <h3>{TEXT}</h3>;
};

export const FormLabel = ({ number, text }) => {
  return (
    <LabelContainer>
      <LabelNumber>{number}</LabelNumber>
      <LabelText>{text}</LabelText>
    </LabelContainer>
  );
};

const LabelContainer = styled.div`
  display: flex;
  margin: 0 0 25px;
`;

const LabelNumber = styled.p`
  height: 20px;
  width: 20px;
  background: #D9D9D9;
  border-radius: 5px;
  color: #000;
  margin-right: 12px;
  text-align: center;
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #064545;
`;

const LabelText = styled.p`
  color: #fff;
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`;
