import Head from "next/head";

import InputBase from "@mui/material/InputBase";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";

import MainContainer from "@/components/Contianer/MainContainer";

export default function SignupVerification() {
  return (
    <>
      <Head>
        <title>Newroom | Email Singup</title>
        <meta name="description" content="Newroom app Email Singup" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Body>
      <MainContainer>
      <ContentPartHere>
        <SignInHeader>You're almost signed up</SignInHeader>
        <SignInLabel>
          Enter the code we sent to julie@example.com to finish signing up.
        </SignInLabel>
        <Container>
          <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={8} sx={{maxWidth: '90%'}}>
              <Email>
                <InputLabel>Code</InputLabel>
                <InputEmail
                  placeholder="Enter code"
                  inputProps={{ "aria-label": "Enter code" }}
                />
              </Email>
            </Grid>
          </Grid>
          <ContinueButton>continue</ContinueButton>
          <ResendText>
            Didn't get the code? <HightLightText>Resend code</HightLightText>
          </ResendText>
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

const ResendText = styled.p`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
`;

const HightLightText = styled.span`
  color: #0db2b2;
  text-decoration: underline;
`;

const InputLabel = styled.p`
  text-align: left;
  font-size: 18px;
  padding: 22px 0 0;
  color: #fff;
  font-weight: bold;
`;

const InputEmail = styled(InputBase)`
  width: 100%;
  position: relative;
  z-index: 9;
  @media (max-width: 991px) {
    padding: 0;
  }
`;

const SignInHeader = styled.h1`
  text-align: center;
  font-size: 52px;
  color: #fff;
  margin: 8rem 0 1rem;
  font-family: "Gilroy-Bold";
  font-weight: 500;
  @media (max-width:768px){
    font-size:45px;
  }
  @media (max-width:767px){
    margin: 4rem 0 1rem;
  }
  @media (max-width:425px) {
    font-size: 37px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const SignInLabel = styled.p`
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  margin-top: 1rem;

  @media (max-width: 768px) {
    width: 55%;
    margin-right: auto;
    margin-left: auto;
  }

  @media (max-width: 425px) {
    font-size: 14px;
    line-height: 22.19px;
    width: 80%;
    margin: 0 auto;
  }
`;

const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 190px;
  text-align: center;

  @media (max-width: 991px){
    margin-bottom: 223px;
  }

  @media (max-width: 425px) {
    margin-top: 28px;
  }
`;

const ContinueButton = styled(Button)`
  color: #ffff;
  font-family: 'Quicksand';
  font-size: 18px;
  text-decoration: none;
  height: 52px;
  padding: 15px 60px;
  background: linear-gradient(107.95deg, #109797 30.24%, #24B3B3 70.79%);
  border-radius: 5px
  text-transform: none;
  margin: 22px 0;
  width: 190px;
  :hover{
    background: transparent;
    border: 1px solid #0DB3B3;
    border-radius: 5px;
  }
  @media (max-width: 425px) {
    margin-bottom: 38px;
  }
`;

const Email = styled.div`
  width: 70%;
  margin: 0 auto;
  @media (max-width: 991px) {
    width: 100%;
  }
`;