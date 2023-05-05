import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styled from "@emotion/styled";

import MainContainer from "@/components/Contianer/MainContainer";
import google from "@/assets/google.png";
import facebook from "@/assets/facebook.png";
import mail from "@/assets/mail.png";

export default function SignInGoogle() {
  return (
    <>
      <Head>
        <title>Newroom | Sign in with Google</title>
        <meta name="description" content="Newroom app sign in with google" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Body>
      <MainContainer>
        <ContentPartHere>
          <SignInHeader>Log in or Sign up in Seconds</SignInHeader>
          <SignInLabel>
            Use your email or another service to create a free account and
            redesign your room with our Al-powered interior design tool.
          </SignInLabel>
          <Container>
            <SingInButton href={"google.come"}>
              <Image
                style={{ marginRight: "5px" }}
                src={google}
                alt="Continue with Google"
              />
              <p>Continue with Google</p>
            </SingInButton>
            <SingInButton href={"google.come"}>
              <Image
                style={{ marginRight: "5px" }}
                src={facebook}
                alt="Continue with Facebook"
              />
              <p>Continue with Facebook</p>
            </SingInButton>
            <SingInButton href={"google.come"}>
              <Image
                style={{ marginRight: "5px" }}
                src={mail}
                alt="Continue with Email"
              />
              <p>Continue with Email</p>
            </SingInButton>
          </Container>
        </ContentPartHere>
      </MainContainer>
    </Body>
    </>
  );
}
const ContentPartHere = styled.div`
padding-left: 16px;
padding-right: 16px;
z-index: 9;
    position: relative;
`
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

const SignInHeader = styled.h1`
  text-align: center;
  font-size: 82px;
  font-family: 'Gilroy-Bold';
  color: #fff;
  margin: 8rem 0 1rem;
  font-family: "Gilroy-Bold";
  font-weight: 500;
  @media (max-width:768px){
    font-size: 60px;
  }
  @media (max-width:767px){
    margin: 4rem 0 1rem;
  }
  @media (max-width:425px){
    font-size:40px
  }
`;

const SignInLabel = styled.p`
  font-size: 18px;
  color: #ffffff;
  margin: 0px 5rem;
  text-align: center;
  width: 50%;
  margin : 1rem auto 0;
  @media (max-width:768px) {
    width: 75%;
  }
  @media (max-width:767px) {
    font-size: 14px;
    line-height: 22px;
  }
  @media (max-width:425px){
    width: 94%;
  }
`;

const Container = styled.div`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 12rem;
  text-align: -webkit-center;
  @media (max-width:425px){
    margin-bottom: 9.5rem;
  }
`;

const SingInButton = styled(Link)`
  display: flex;
  align-items: center;
  color: #ffff;
  font-size: 18px;
  text-decoration: none;
  height: 62px;
  line-height: 62px;
  padding: 0 22px;
  border-radius: 5px;
  font-family: Quicksand-Regular;
  width: 15rem;
  margin: 22px 0;
  background: linear-gradient(133.37deg, rgba(6, 69, 69, 0.42) 25.71%, rgba(8, 86, 86,   0.42)80.11%);
  border: 1px solid #0DB3B3;
  border-radius: 5px;
  position: relative;
  z-index: 9;
  :hover{
    background: linear-gradient(107.95deg, #109797 30.24%, #24B3B3 70.79%);
  }
  @media (max-width: 767px){
    justify-content: center;
  }
  @media (max-width: 425px){
    width: 82%;
  }
`;
