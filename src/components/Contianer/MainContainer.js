import * as React from "react";
import { MainHeader } from "@/components/Header";
import { Footer } from "@/components/Footer";
import styled from "@emotion/styled";

export default function MainContainer({ children }) {
  return (
    <Body className="mainGredient">
      <MainHeader />
        {children}
      <Footer />
    </Body>
  );
}


const Body = styled.div`
&.mainGredient{
  position: relative;
  overflow-x: hidden; 
  &::before{
    content: '';
    position: absolute;
    top: -300px;
    right: -300px;
    border-radius: 50%;
    width: 830px;
    height: 830px;
    background: rgba(0, 217, 247, 0.1);
    filter: blur(323.5px);
    z-index: 1;
    overflow: hidden;
  }
  }
}
`;