import Head from "next/head";
import * as React from 'react';
import { Inter } from "next/font/google";

import styled from "@emotion/styled";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import InputLabel from '@mui/material/InputLabel';
import MainContainer from "@/components/Contianer/MainContainer";
import { HeadingAndSubHeading } from "@/components/Header";
import { CreditInfo } from "@/components/CreditInfo";
import { FormLabel } from "@/components/Text";

const inter = Inter({ subsets: ["latin"] });


export default function RoomDesign() {
 
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
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
            <FormLabel number={1} text={"Choose your photo type"} />
            <SelectStyled>
              <MenuItem value="Normal Photo">Normal Photo</MenuItem>
              <MenuItem value="Normal Photo">Normal Photo</MenuItem>
              <MenuItem value="">Normal Photo</MenuItem>
            </SelectStyled>
          </FormControl>
          <FormControl className="custom-FormControle">
            <FormLabel number={2} text={"Choose your room type"} />
            <SelectStyled>
              <MenuItem value="">Normal Photo</MenuItem>
            </SelectStyled>
          </FormControl>
          <FormControl className="custom-FormControle">
            <FormLabel number={3} text={"Choose your room theme"} />
            <SelectStyled>
              <MenuItem value="">Normal Photo</MenuItem>
            </SelectStyled>
          </FormControl>
          <FormControl className="custom-FormControle">
            <FormLabel number={4} text={"Snap or upload your room photo"} />
            <FileDragAndDrop>
              <UploadButton>Upload an Image</UploadButton>
              <DragInfoText>...or drag and drop an image</DragInfoText>
            </FileDragAndDrop>
          </FormControl>
          <SubmitButton>Design your Room</SubmitButton>
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
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 140px;
  position: relative;
  z-index: 1;
`;

const SelectStyled = styled(Select)`
  border: 1px solid #fff;
  position: relative;
  // :after{
  //   content: "";
  //   width: 8px;
  //   height: 8px;
  //   position: absolute;
  //   right: 14px;
  //   top: 18px;
  //   border-right: 2px solid #0DB3B3;
  //   border-top: 2px solid #0DB3B3;
  //   transform: rotate(135deg);
  // }
`;

const FileDragAndDrop = styled.div`
  border: 1px solid #fff;
  height: 200px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UploadButton = styled(Button)`
  background: linear-gradient(107.95deg, #109797 30.24%, #24B3B3 70.79%);
  padding: 15px 23px;
  text-transform: none;
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #FFFFFF;
  margin-bottom: 13px;
  :hover{
    background: linear-gradient(133.37deg, rgba(6, 69, 69, 0.42) 25.71%, rgba(8, 86, 86, 0.42)     80.11%);
    border: 1px solid #0DB3B3;
    border-radius: 2px;
  }
`;

const DragInfoText = styled.p`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #FFFFFF;
`;
const SubmitButton = styled(Button)`
  margin-top: 40px !important;
  background: #ffffff;
  text-transform: none;
  color: #0db2b2;
  padding: 15px 20px;
  position: relative;
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  border: 1px solid transparent;
  &::before{
    position: absolute;
    content:'';
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
