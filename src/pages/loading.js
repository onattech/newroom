import Head from "next/head";

import styled from "@emotion/styled";
import Lottie from "react-lottie";

import MainContainer from "@/components/Contianer/MainContainer";
import { HeadingAndSubHeading } from "@/components/Header";
import { CreditInfo } from "@/components/CreditInfo";
import loadingAnimation from "@/assets/animation/loadingAnimation.json";

export default function RoomDesign() {
  return (
    <>
      <Head>
        <title>Newroom | Loading</title>
        <meta name="description" content="Newroom app loading" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Body>
      <MainContainer>
        <HeadingAndSubHeading />
        <CreditInfo />
        <LoadingAnimationContainer>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: loadingAnimation,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={400}
            width={400}
          />
        </LoadingAnimationContainer>
        <SitTight>Sit Tight</SitTight>
        <SitTightTag>
          and watch the <BoldText>magic unfold!</BoldText>
        </SitTightTag>
      </MainContainer>
    </Body>
    </>
  );
}

const Body = styled.div`
  background-color : #0E1A1F;
  overflow: hidden;
  position: relative;
  z-index: 3;
  :after{
    content: "";
    width: 829px;
    height: 829px;
    background: rgba(0, 217, 247, 0.2);
    filter: blur(323.5px);
    position: absolute;
    top: -22%;
    right: -22%;
    z-index: 2;
  }
  :before{
    content: "";
    width: 829px;
    height: 829px;
    background: rgba(0, 217, 247, 0.2);
    filter: blur(323.5px);
    position: absolute;
    bottom: -30%;
    left: -30%;
    z-index: 2;
  }
  @media (max-width: 768px){
    &:before{
      bottom: -25%;
      left: -70%;
      width: 600px;
      height: 600px;
    }
    &:after{
      top: -25%;
      right: -60%;
      width: 600px;
      height: 600px;
    }
`;


const LoadingAnimationContainer = styled.div`
  height: 280px;
  @media (max-width: 599px){
    margin-top: -80px;
  }
`;

const SitTight = styled.p`
  color: #fff;
  font-size: 52px;
  font-weight: bold;
  text-align: center;
  font-family: "Gilroy-Bold";
  font-style: normal;
  @media (max-width: 425px){
    font-size: 30px;
  }
`;

const BoldText = styled.span`
  color: #0db2b2;
  font-weight: bold;
`;

const SitTightTag = styled.p`
  text-align: center;
  color: #fff;
  font-size: 30px;
  margin-bottom: 173px;
  @media (max-width: 425px){
    font-size: 18px;
    margin-bottom: 131px;
  }
`;
