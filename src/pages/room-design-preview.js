import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styled from "@emotion/styled";
import Switch from "@mui/material/Switch";
import { Grid, useMediaQuery } from "@mui/material";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import MainContainer from "@/components/Contianer/MainContainer";
import { HeadingAndSubHeading } from "@/components/Header";
import { RoomAndThemeType } from "@/components/RoomAndThemeType";
import slider1 from "@/assets/Slider1.png";
import slider2 from "@/assets/Slider2.png";
import leftArrow from "@/assets/leftArrow.png";
import rightArrow from "@/assets/rightArrow.png";
import { UseMediaQuery } from "@mui/material";

export default function RoomDesign() {
  const [showCompare, setShowCompare] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width: 599px)');

  const handleSideBySideToCompare = (event) => {
    setShowCompare(event.target.checked);
  };

  return (
    <>
        <Head>
          <title>Newroom | Design Room Preview</title>
          <meta name="description" content="Newroom app sign in with google" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <Body>
        <MainContainer>
        <ContentPartHere>
          <HeadingAndSubHeading />
          <RoomAndThemeType />
          <CompareContainer>
            <SideBySide className={!showCompare ? "active" : ""}>Side by side</SideBySide>
            <CompareSwitch onChange={handleSideBySideToCompare} />
            <Compare className={showCompare ? "active" : ""}>Compare</Compare>
          </CompareContainer>
          <SliderContainer>
            <Container>
            <LeftArrow>
              <Image src={leftArrow} />
            </LeftArrow>
              <Border>
                {!showCompare && (
                  <Grid container spacing={4}>
                    <Grid22 item sm={12} md={6} className="ImgPart">
                      <LabelText>Original Room</LabelText>
                      <Image111 src={slider1} />
                    </Grid22>
                    <Grid22 item sm={12} md={6} className="ImgPart">
                      <LabelText>New Room</LabelText>
                      <Image111 src={slider2} />
                    </Grid22>
                  </Grid>
                )}
                {showCompare && (
                  <ReactCompareSlider
                    portrait={isSmallScreen ? true : false}
                    boundsPadding={0}
                    itemOne={
                      <ReactCompareSliderImage
                        alt="Image one"
                        src="https://images.unsplash.com/photo-1438401171849-74ac270044ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1784&q=70"
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        alt="Image two"
                        src="https://images.unsplash.com/photo-1437809781432-a957377661ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1784&q=70"
                      />
                    }
                    position={50}
                    style={{
                      height: "482px",
                      width: "100%",
                      borderRadius: 10,
                    }}
                  />
                )}
              </Border>
            
            <RightArrow>
              <Image src={rightArrow} />
            </RightArrow>
            </Container>
          </SliderContainer>
          <NavButton>
            <DesignDreamRoom href="/room-design" className="Outline-BTN" >
              Download HD Photo
            </DesignDreamRoom>
            <DesignDreamRoom
              style={{ border: "1px solid #0DB2B2", background: "#081d23" }}
              href="/room-design"
              className="NewRoom"
            >
              Design New Room
            </DesignDreamRoom>
            <DesignDreamRoom
              style={{ background: "#1c3338" }}
              href="/room-design"
              className="Outline-BTN"
            >
              Match Style (Beta)
            </DesignDreamRoom>
          </NavButton>
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

const Image111 = styled(Image)`
  // width: 100%;
  // height: auto;
  @media (max-width: 767px){
    width: 100%;
    height: auto;
  }
`;

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
position: relative;`
;
const DesignDreamRoom = styled(Link)`
  color: #ffff;
  font-size: 18px;
  text-decoration: none;
  height: 60px;
  line-height: 60px;
  padding: 0 40px;
  border-radius: 5px;
  font-family: "Quicksand";
  display: inline-block;
  background: #0db2b2;
  margin: 42px 10px 136px;
  border: 1px solid transparent;
  &.NewRoom{
    :hover{
      background: linear-gradient(107.95deg, #109797 30.24%, #24B3B3 70.79%) !important;
      border-radius: 5px !important;
    }
  }
  :hover {
    background: linear-gradient(133.37deg, rgba(6, 69, 69, 0.42) 25.71%, rgba(8, 86, 86, 0.42) 80.11%);
    border: 1px solid #0DB3B3;
    border-radius: 2px;
  }

  @media (max-width: 768px){
    font-size: 15px;
  }

  @media (max-width: 600px) {
    margin: 9px 72px;
  }

  @media (max-width: 360px){
    font-size: 14px;
  }
`;

const NavButton = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 80px;
  }
`;

const LeftArrow = styled.div`
  height: 50px;
  width: 50px;
  background: #223238;
  border: 3px solid #0e1a1f;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -80px;
  top: 50%;
  cursor: pointer;

  @media (max-width: 768px) {
    display : none;
  }
`;

const RightArrow = styled.div`
  height: 50px;
  width: 50px;
  background: #223238;
  border: 3px solid #0e1a1f;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: -80px;
  cursor: pointer;

  @media (max-width: 768px) {
    display : none;
  }
`;

const LabelText = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin: 1rem 0;
  text-align: center;
`;

const SliderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0 50px;

  @media (max-width:768px) {
    margin: 44px 27px 61px;
  }
`;

const CompareContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 38px 0;

  @media (max-width: 425px) {
    margin: 73px 0 44px;
  }
`;

const SideBySide = styled.p`
  font-size: 18px;
  font-style: normal;
  color: rgba(255, 255, 255, 0.2);
  &.active{
    color: #FFFFFF;
    font-family: "Gilroy-Bold";
    font-weight: 600;
  }
`;

const Compare = styled.p`
font-size: 18px;
font-style: normal;
color: rgba(255, 255, 255, 0.2);  
&.active{
  color: #FFFFFF;
  font-family: "Gilroy-Bold";
  font-weight: 600;
  
}
`;

const CompareSwitch = styled(Switch)(() => ({
  "& .MuiSwitch-thumb": {
    color: "#0DB2B2",
    width: 25,
    height: 25,
  },
  "& .MuiSwitch-track": {
    color: "#223238",
    width:95,
    height:35,
    borderRadius: 32,
  },
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#fff",
  },
}));

const Border = styled.div`
  @media (max-width: 768px){
    border: 1px solid #0DB3B3;
    border-radius: 5px;
    padding: 29px;
  }
`;

const Grid22 = styled(Grid)`
  &.ImgPart{
    @media (max-width: 425px){
      display: flex;
      flex-direction: column;
      align-item: center;
      width: 100%;
    }
  }
`;