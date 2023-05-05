import * as React from "react";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";

import { MainLogo } from "@/components/Logo";
import { HowToUseBtn } from "@/components/Button";
import { ProfileLogout } from "@/components/ProfileLogout";

export const MainHeader = () => {
  return (
    <HeaderContianer>
      <Container maxWidth="lg">
        <HeaderContent>
          <MainLogo />
          {/* <HowToUseBtn /> */}
          <ProfileLogout />
        </HeaderContent>
      </Container>
    </HeaderContianer>
  );
};

const HeaderContianer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 1 auto;
  margin: 0;
  padding: 1.5rem 0;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  position: relative;
`;

export const HeadingAndSubHeading = () => {
  return (
    <Containers className="room-design">
      <SubHeading>1,300 rooms generated and counting</SubHeading>
      <Heading>Design your Dream Rooms</Heading>
    </Containers>
  );
};

const Containers = styled.div`
  text-align: center;
  margin-top: 150px;
  &.room-design{
    margin-top: 60px;
  }
  @media (max-width: 425px) {
    margin-top: 45px;
  }
`;

const SubHeading = styled.h2`
  color: #0db2b2;
  font-size: 20px;
  margin-bottom: 12px;
`;

const Heading = styled.h1`
  font-family: "Gilroy-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 82px;
  line-height: 102px;
  text-align: center;
  color: #FFFFFF;
  font-weight: 500;

  @media (max-width: 768px){
    font-size: 52px;
    line-height: 57px;
  }

  @media (max-width: 425px){
    font-size: 37px;
    line-height: 47px;
  }
`;
