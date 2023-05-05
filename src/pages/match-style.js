import Head from "next/head";

import styled from "@emotion/styled";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import MainContainer from "@/components/Contianer/MainContainer";
import { HeadingAndSubHeading } from "@/components/Header";
import { CreditInfo } from "@/components/CreditInfo";
import { FormLabel } from "@/components/Text";

export default function RoomDesign() {
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
        <HeadingAndSubHeading />
        <CreditInfo />
        <Container>
          <FormControl className="custom-FormControle">
            <FormLabel number={1} text={"Choose your room type"} />
            <SelectStyled>
              <MenuItem value="">Normal Photo</MenuItem>
            </SelectStyled>
          </FormControl>
          <FormControl className="custom-FormControle">
            <FormLabel number={2} text={"Snap or upload your room photo"} />
            <FileDragAndDrop>
              <UploadButton>Upload your room Photo</UploadButton>
              <SnapButton>Snap your Room</SnapButton>
            </FileDragAndDrop>
          </FormControl>
          <SubmitButton>Design your Room <strong className="shadow"></strong></SubmitButton>
        </Container>
      </MainContainer>
    </Body>
    </>
  );
}

const Body = styled.div`
  background-color : #0E1A1F;
  overflow: hidden;
  position: relative;
  :after{
    content: "";
    width: 829px;
    height: 829px;
    background: rgba(0, 217, 247, 0.2);
    filter: blur(323.5px);
    position: absolute;
    top: -22%;
    right: -10%;
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
  }
`;

const Container = styled.div`
  margin-top: 91px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 157px;
`;

const SelectStyled = styled(Select)`
  border: 1px solid #fff;
`;

const FileDragAndDrop = styled.div`
  border: 1px solid #fff;
  height: 300px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UploadButton = styled(Button)`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  background: #109797;
  text-transform: none;
  color: #fff;
  padding: 15px 12px;
  margin: 6px 0;
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  width: 250px;
  height: 52px;
  :hover{
    border: 1px solid #0DB3B3;
    border-radius: 5px;
  }
`;

const SnapButton = styled(Button)`
  background: #109797;
  text-transform: none;
  color: #fff;
  padding: 17px 12px;
  background: none;
  border: 1px solid #0db2b2;
  margin: 6px 0;
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  width: 250px;
  height: 52px;
`;

const SubmitButton = styled(Button)`
  margin-top: 40px !important;
  background: #ffffff;
  text-transform: none;
  color: #0db2b2;
  padding: 15px 20px;
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  border: 1px solid transparent;
  position: relative;
  z-index: 9;
  
  // .shadow{
  //   position: absolute;
  //   width: 190px;
  //   height: 52px;
  //   background: #0DB3B3;
  //   filter: blur(12.5px);
  //   border-radius: 5px;
  // // }
  &::after{
    position: absolute;
    // content:'';
    width: 190px;
    height: 52px;
    background: #0DB3B3;
    filter: blur(12.5px);
    border-radius: 5px;
    z-index: -1;
  }
  &:hover{
    background: linear-gradient(133.37deg, rgba(6, 69, 69, 0.42) 25.71%, rgba(8, 86, 86, 0.42) 80.11%);
    border: 1px solid #0DB3B3;
    border-radius: 2px;
    &::before{
      display: none;
    }
  }
 
`;
