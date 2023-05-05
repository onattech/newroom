import Link from "next/link";
import * as React from 'react';
import styled from "@emotion/styled";
import { Container, Grid, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import userFeeback from "@/assets/userFeeback.png";
import Ellipse4 from '@/assets/Ellipse4.png';
import Ellipse5 from '@/assets/Ellipse5.png';
import Ellipse81 from '@/assets/Ellipse81.png';
import Ellipse82 from '@/assets/Ellipse82.png';
import Ellipse83 from '@/assets/Ellipse83.png';
import Ellipse84 from '@/assets/Ellipse84.png';
import normal1 from "@/assets/normal1.png";
import normal2 from "@/assets/normal2.png";
import img3601 from "@/assets/3601.png";
import img3602 from "@/assets/3602.png";
import Rectangle175 from "@/assets/Rectangle175.png";
import Rectangle196 from "@/assets/Rectangle196.png";
import Rectangle195 from "@/assets/Rectangle195.png";
import Rectangle197 from "@/assets/Rectangle197.png";
import Rectangle184 from "@/assets/Rectangle184.png";
import Rectangle185 from "@/assets/Rectangle185.png";
import Rectangle188 from "@/assets/Rectangle188.png";
import Rectangle192 from "@/assets/Rectangle192.png";
import Rectangle193 from "@/assets/Rectangle193.png";
import Rectangle194 from "@/assets/Rectangle194.png";
import Isolatedright from "@/assets/Isolated_right_hand_with_smartphone_1.png"
import phoneContent from "@/assets/phoneContent.jpg"
import OldHome from "@/assets/Rectangle248.png";
import DownArrow from "@/assets/down-icon.png";
import connectingArrow from "@/assets/connetingArrow.png";
import firstRight from "@/assets/firstRIght.png";
import firstLeft from "@/assets/firstLeft.png";
import secondRight from "@/assets/secondRight.png";
import secondLeft from "@/assets/secondLeft.png";
import { faqQuestions } from "../../constant";
import MyAccordion from "./Accordion";
import { UseMediaQuery } from "@mui/material";
// import Carousel from "react-spring-3d-carousel";
// import uuidv4 from "uuid";
import { config } from "react-spring";

import loadable from "@loadable/component";
const Carousel = loadable(() => import("react-spring-3d-carousel"))


const getTouches = (evt) => {
  return (
    evt.touches || evt.originalEvent.touches // browser API
  );
};

export const Home = () => {
  const isSmallScreen = useMediaQuery('(max-width: 599px)');
  const isXSScreen = useMediaQuery('(max-width: 350px)');
  const FeedBackUserDetails = [
    {
      src: Ellipse4,
      name: 'Sarah Johnson',
      title: 'Interior Designer',
      details: "I was blown away by how easy it was to use this AI-powered tool. The results were stunning and my clients loved it!",
    },
    {
      src: Ellipse5,
      name: 'John Davis',
      title: 'Real Estate Agent',
      details: "This tool has been a game changer for my business. I can now showcase properties like never before, and my clients are amazed by the realistic virtual staging!",
    },
    {
      src: Ellipse81,
      name: 'Emily Chen',
      title: 'Real Estate Agent',
      details: "I used this tool to redesign my living room and I couldn't be happier with the results. It's like having an interior designer at your fingertips!",
    },
    {
      src: Ellipse82,
      name: 'Michael Lee',
      title: 'Architect',
      details: "The AI technology used in this tool is impressive. It saves me so much time and effort, and the end results are always on point.",
    },
    {
      src: Ellipse83,
      name: 'Rachel Adams',
      title: 'Real Estate Investor',
      details: "This tool is a must-have for anyone in the real estate industry. It's affordable, easy to use, and the results are truly impressive.",
    },
    {
      src: Ellipse84,
      name: 'Tom Wilson',
      title: 'Homebuyer',
      details: "I was able to visualize my dream home with this tool. It's amazing how realistic the virtual staging looks, and it helped me make an informed decision on my purchase.",
    },
  ];
  const [state, setState] = React.useState({
    goToSlide: 8,
    offsetRadius: 8,
    showNavigation: false,
    enableSwipe: true,
    config: config.default,
    margin: 150,
  })

  const handleKeyDown = (e) => {
    switch (e.keyCode) {
      case 37:
        setState({ goToSlide: state.goToSlide - 1 });
        break;
      case 39:
        setState({ goToSlide: state.goToSlide + 1 });
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      removeEventListener("keydown", handleKeyDown);
    }
  })

  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => {
    setExpanded(expanded !== panel ? panel : false);
  };

  var slides = [
    {
      key: 1,
      content: <Image196 src={Rectangle196} className="image-part" />
    },
    {
      key: 2,
      content: <Image195 src={Rectangle195} className="image-part" />
    },
    {
      key: 3,
      content: <Image197 src={Rectangle197} className="image-part" />
    },
    {
      key: 4,
      content: <Image184 src={Rectangle184} className="image-part" />
    },
    {
      key: 5,
      content: <Image185 src={Rectangle185} className="image-part" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => setState({ goToSlide: index }) };
  });

  const handleTouchStart = (evt) => {
    if (!state.enableSwipe) {
      return;
    }

    const firstTouch = getTouches(evt)[0];
    setState({
      ...state,
      xDown: firstTouch.clientX,
      yDown: firstTouch.clientY
    });
  };

  const handleTouchMove = (evt) => {
    if (!state.enableSwipe || (!state.xDown && !state.yDown)) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = state.xDown - xUp;
    let yDiff = state.yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        /* left swipe */
        setState({
          goToSlide: state.goToSlide + 1,
          xDown: null,
          yDown: null
        });
      } else {
        /* right swipe */
        setState({
          goToSlide: state.goToSlide - 1,
          xDown: null,
          yDown: null
        });
      }
    }
  };

  return (
    <ContainerWrapper>
      <TopSection className="first-section">
        <Container maxWidth='lg' style={{ zIndex: "2" }}>
          <SubHeading>1,300 rooms generated and counting</SubHeading>
          <Heading>
            Design your Dream Rooms with Al.
          </Heading>
          <Tag>Transform Your Space with Our 100% Free Al Themes:</Tag>
          <StrongTag>
            See Your Room in a New Light from Normal Photos to 360 Views.
          </StrongTag>
          <DesignDreamRoom href="/room-design">
            Design your dream room
          </DesignDreamRoom>
        </Container>
        <DownBtnArrow href="">
          <ArrowImage src={DownArrow} />
        </DownBtnArrow>
      </TopSection>
      <PreviewContainer className="second-section">
        <Container maxWidth='lg'>
          <TextSecondContent>
            <PreviewTitle>Normal Photos</PreviewTitle>
            <Grid container columnSpacing={{ xs: 1 }}>
              <Grid item xs={12} sm={6} sx={{ marginBottom: isSmallScreen ? '1rem' : '0' }}>
                <PreviewDiv className="left-side">
                  <PreviewLabel>Before</PreviewLabel>
                  <PreviewImage src={normal1} />
                </PreviewDiv>
              </Grid>
              <Grid item xs={12} sm={6}>
                <PreviewDiv className="right-side">
                  <PreviewLabel>After</PreviewLabel>
                  <PreviewImage src={normal2} />
                </PreviewDiv>
              </Grid>
            </Grid>
          </TextSecondContent>
          <TextSecondContent className="second-360-line">
            <PreviewTitle>360 Photos</PreviewTitle>
            <Grid container columnSpacing={{ xs: 1 }} >
              <Grid item xs={12} sm={6} sx={{ marginBottom: isSmallScreen ? '1rem' : '0' }}>
                <PreviewDiv className="left-side">
                  <PreviewLabel>Before</PreviewLabel>
                  <PreviewImage src={img3601} />
                </PreviewDiv>
              </Grid>
              <Grid item xs={12} sm={6}>
                <PreviewDiv className="right-side">
                  <PreviewLabel>After</PreviewLabel>
                  <PreviewImage src={img3602} />
                </PreviewDiv>
              </Grid>
            </Grid>
          </TextSecondContent>
        </Container>
      </PreviewContainer>

      <HowToUseContainer>
        <Container maxWidth='lg'>
          <HowToUseTag>How to Use?</HowToUseTag>
          <HowToUseDescription>Step-by-Step Guide</HowToUseDescription>
          <StepsContainer>
            <Grid container sx={{ alignItems: "center", maxWidth: isSmallScreen ? '90%' : '100%', margin: isSmallScreen ? '0 auto' : '0' }}>
              <Grid item sm={5} xs={12}>
                <LeftStep>
                  <LeftStepCount>
                    <StepText>Step</StepText>
                    <Count>01</Count>
                  </LeftStepCount>
                  <StepDescription>
                    Click the "Design your dream room" button above.
                  </StepDescription>
                </LeftStep>
              </Grid>
              <Grid item sm={2} xs={12}>
                <MeterContainer className="first-meter">
                  <Meter />
                  <LeftLine />
                  <CenterLine />
                </MeterContainer>
              </Grid>
              <Grid item sm={5}></Grid>
            </Grid>
            <Grid container sx={{ alignItems: "center", flexDirection: isSmallScreen ? 'column-reverse' : 'row', maxWidth: isSmallScreen ? '90%' : '100%', margin: isSmallScreen ? '0 auto' : '0' }} >
              <Grid item sm={5}></Grid>
              <Grid item sm={2} xs={12}>
                <MeterContainer>
                  <Meter />
                  <RightLine />
                  <CenterLine />
                </MeterContainer>
              </Grid>
              <Grid item sm={5} xs={12}>
                <RightStep>
                  <StepDescription>
                    Choose the photo type you prefer: "Normal Photos" or "360
                    Photos".
                  </StepDescription>
                  <RightStepCount>
                    <StepText>Step</StepText>
                    <Count>02</Count>
                  </RightStepCount>
                </RightStep>
              </Grid>
            </Grid>
            <Grid container sx={{ alignItems: "center", maxWidth: isSmallScreen ? '90%' : '100%', margin: isSmallScreen ? '0 auto' : '0' }}>
              <Grid item sm={5} xs={12}>
                <LeftStep>
                  <LeftStepCount>
                    <StepText>Step</StepText>
                    <Count>03</Count>
                  </LeftStepCount>
                  <StepDescription>
                    Select the type of room you want to remodel.
                  </StepDescription>
                </LeftStep>
              </Grid>
              <Grid item sm={2} xs={12}>
                <MeterContainer>
                  <Meter />
                  <LeftLine />
                  <CenterLine />
                </MeterContainer>
              </Grid>
              <Grid item sm={5}></Grid>
            </Grid>
            <Grid container sx={{ alignItems: "center", flexDirection: isSmallScreen ? 'column-reverse' : 'row', maxWidth: isSmallScreen ? '90%' : '100%', margin: isSmallScreen ? '0 auto' : '0' }} >
              <Grid item sm={5} ></Grid>
              <Grid item sm={2} xs={12}>
                <MeterContainer>
                  <Meter />
                  <RightLine />
                  <CenterLine />
                </MeterContainer>
              </Grid>
              <Grid item sm={5} xs={12}>
                <RightStep>
                  <StepDescription>
                    Select the type of theme you want to apply to your room.
                  </StepDescription>
                  <RightStepCount>
                    <StepText>Step</StepText>
                    <Count>04</Count>
                  </RightStepCount>
                </RightStep>
              </Grid>
            </Grid>
            <Grid container sx={{ alignItems: "center", maxWidth: isSmallScreen ? '90%' : '100%', margin: isSmallScreen ? '0 auto' : '0' }}>
              <Grid item sm={5} xs={12}>
                <LeftStep>
                  <LeftStepCount>
                    <StepText>Step</StepText>
                    <Count>05</Count>
                  </LeftStepCount>
                  <StepDescription>Upload your photo.</StepDescription>
                </LeftStep>
              </Grid>
              <Grid item sm={2} xs={12}>
                <MeterContainer>
                  <Meter />
                  <LeftLine />
                  <CenterLine />
                </MeterContainer>
              </Grid>
              <Grid item sm={5}></Grid>
            </Grid>
            <Grid container sx={{ alignItems: "center", flexDirection: isSmallScreen ? 'column-reverse' : 'row', maxWidth: isSmallScreen ? '90%' : '100%', margin: isSmallScreen ? '0 auto' : '0' }}>
              <Grid item sm={5}></Grid>
              <Grid item sm={2} xs={12} sx={{ display: isSmallScreen ? "none" : 'block' }}>
                <MeterContainer>
                  <Meter />
                  <RightLine />
                  <CenterLine />
                </MeterContainer>
              </Grid>
              <Grid item sm={5} xs={12}>
                <RightStep>
                  <StepDescription>
                    Click "Design Your Room" and wait for the magic to happen.
                  </StepDescription>
                  <RightStepCount>
                    <StepText>Step</StepText>
                    <Count>06</Count>
                  </RightStepCount>
                </RightStep>
              </Grid>
            </Grid>
          </StepsContainer>
        </Container>
      </HowToUseContainer>
      <OutputSample>
        <Container maxWidth='lg'>
          <Grid container direction="row">
            <GridContent container item sm={12} md={5} className="outputSmapleText">
              <InnerContent >
                <SampleOutputTag>
                  More Options, Better Choices
                </SampleOutputTag>
              </InnerContent>
              <InnerContentBottom>
                <SampleOutputDescription>
                  With the Variation Results feature, you don't have to settle for
                  just 1 design, you can receive up to 4 different design options
                  in a single generation, allowing you to choose the most
                  desirable one and download it. This feature gives you the
                  ability to explore different styles and find the perfect design
                  for your room.
                </SampleOutputDescription>
              </InnerContentBottom>
            </GridContent>
            <Grid container item sm={12} md={7}>
              <SliderInnerContent>
                <BrforeContenetImage>
                  <BeforeText><Liner />Before</BeforeText>
                  <Image175 src={Rectangle175} />
                </BrforeContenetImage>
                <AfterSlideImage>
                  <CarouselPart
                    style={{ width: "12%", height: "200px", margin: "0 auto", transform: "scale(1.5)" }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    className="carousel-slider"
                  >
                    <Carousel
                      slides={slides}
                      goToSlide={state.goToSlide}
                      offsetRadius={state.offsetRadius}
                      showNavigation={state.showNavigation}
                      animationConfig={state.config}
                      className="slider-image-part"
                    />
                  </CarouselPart>
                  <AfterText><Liner />After</AfterText>
                </AfterSlideImage>
              </SliderInnerContent>
              <CarasoleContainer>
              </CarasoleContainer>
            </Grid>
          </Grid>
        </Container>
      </OutputSample>
      <BeforeAfterContainer>
        <Container maxWidth='lg'>
          <Grid container sx={{ flexDirection: isSmallScreen ? 'column-reverse' : 'row' }}>
            <Grid item container sm={12} md={6} sx={{ paddingTop: isSmallScreen ? '5rem' : '0' }}>
              <MainDiv>
                <TopDiv>
                  <SingleBox>
                    <FourGridImage src={Rectangle188} alt="1" />
                    <DecoratedText>< Liner />Before</DecoratedText>
                  </SingleBox>
                  <SingleBox>
                    <FourGridImage src={Rectangle192} alt="1" />
                    <DecoratedText>< Liner />After</DecoratedText>
                  </SingleBox>
                  <ImageContainer>
                    <LeftImage src={firstLeft} alt="leftImg" />
                    <BfText>Before</BfText>
                    <RightImage src={firstRight} alt="RightImg" />
                    <AfText>After</AfText>
                  </ImageContainer>
                </TopDiv>
                <TopDiv>
                  <SingleBox>
                    <FourGridImage src={Rectangle193} alt="1" />
                    <DecoratedText>< Liner />Before</DecoratedText>
                  </SingleBox>
                  <SingleBox>
                    <FourGridImage src={Rectangle194} alt="1" />
                    <DecoratedText>< Liner />After</DecoratedText>
                  </SingleBox>
                  <ImageContainer>
                    <LeftImage src={secondLeft} alt="leftImg" />
                    <BfText>Before</BfText>
                    <RightImage src={secondRight} alt="RightImg" />
                    <AfText>After</AfText>
                  </ImageContainer>
                </TopDiv>
              </MainDiv>
            </Grid>
            <Grid item container sm={12} md={6} style={{ alignItems: 'center' }}>
              <DesignTextInfo>
                <DesignConsistency>
                  Consistency in Design Made Easy
                </DesignConsistency>
                <ConsistencyText>
                  If you loved the design of your previous room and want to maintain
                  the same theme setting for multiple rooms in your house, our Match
                  Style feature is here to help. Simply click the button after
                  generating your room photo, and our Al- powered tool will generate
                  similar style options for your other rooms. This feature not only
                  saves you time, but it also ensures consistency in design,
                  especially if you're an interior designer.
                </ConsistencyText>
              </DesignTextInfo>
            </Grid>
          </Grid>
        </Container>
      </BeforeAfterContainer>


      <NotSellingContainer>
        <Container maxWidth='lg'>
          <NotsellingBlock>
            <Grid container className="row-revrese">
              <Grid item xs={12} sm={12} md={6}>
                <GredientBackImagePart>
                  <SubHeadingText className="subheading">People Are Here. <br /> Why You're Not Selling?</SubHeadingText>
                  <Subdescription className="description">Join the Future of Furniture Sales with Newroom: Projected to Take 93% of the Market by 2045</Subdescription>
                  <DesignDreamRoom href="/">
                    Sell Your Furniture
                  </DesignDreamRoom>
                  <CategoryWiseButton>
                    <CategoryOutlineBtn>Room furniture</CategoryOutlineBtn>
                    <CategoryOutlineBtn>Room accessories</CategoryOutlineBtn>
                    <CategoryOutlineBtn>Sofa</CategoryOutlineBtn>
                    <CategoryOutlineBtn>Gaming chair</CategoryOutlineBtn>
                    <CategoryOutlineBtn>Computer</CategoryOutlineBtn>
                    <CategoryOutlineBtn>Dining table</CategoryOutlineBtn>
                  </CategoryWiseButton>
                </GredientBackImagePart>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <BackgroundImageMobile>
                  <Image src={OldHome} alt="old-home" className="old-home-image" />
                  <InnerIsolatedImage>
                    <Image
                      style={{ pointerEvents: "none", zIndex: "2", position: "relative" }}
                      src={Isolatedright}
                      alt="Isolatedright"
                      className="Isolatedright"
                    />
                    <Box
                        sx={{
                            height: "379px",
                            position: "absolute",
                            rotate: "-4.6deg",
                            top: "15px",
                            width: "176px",
                            left: isSmallScreen ? "27px":"38px",
                            borderRadius: "10px",
                            zIndex: "1",

                            // For mobile phones
                            "@media (max-width: 560px)":{
                            height: "191px",
                            top:  "6px",
                            width: "88px",
                            left: "19px",
                            },

                            // Phone scroll
                            overflowX: "auto",

                            // Hide phone scrollbar
                            msOverflowStyle: "none", // IE and Edge
                            scrollbarWidth: "none", // Firefox
                            "&::-webkit-scrollbar": { display: "none" }, // Chrome, Safari and Opera
                        }}
                    >
                        <Image style={{ width: "178px", height: "auto" }} src={phoneContent} alt="Isolatedright" className="Isolatedright" />
                    </Box>
                  </InnerIsolatedImage>
                </BackgroundImageMobile>
              </Grid>
            </Grid>
          </NotsellingBlock>
        </Container>
      </NotSellingContainer>

      <FAQContainer>
        <Container maxWidth='lg'>
          <FAQTag>F A Q</FAQTag>
          <ContentTab>
            {faqQuestions.map((question, index) => (
              <MyAccordion handleChange={handleChange} expanded={expanded} question={question} index={index} />
            ))}
          </ContentTab>
        </Container>
      </FAQContainer>

      <FeedbackContainer>
        <Container maxWidth='lg'>
          <FeedbackHeading>What Our Users Are Saying</FeedbackHeading>
          <FeedbackSubheading>
            Reviews from Over 13,000 Satisfied Customers
          </FeedbackSubheading>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 12, sm: 6, md: 4 }}
            style={{ marginTop: "1rem", justifyContent: "center" }}
          >
            {FeedBackUserDetails.map((fduser, index) => (
              <Grid item key={index}>
                <FeedbackCard>
                  <Grid container item xs={12} >
                    <Grid item xs={3}>
                      <Image src={fduser.src} style={{ margin: "1rem" }} alt={fduser.name} />
                    </Grid>
                    <Grid item xs={9} sx={{ paddingLeft: isXSScreen ? '15px' : '8px' }}>
                      <FeedbackUser>{fduser.name}</FeedbackUser>
                      <FeedbackUserJob>{fduser.title}</FeedbackUserJob>
                    </Grid>
                  </Grid>
                  <UserFeeback>
                    {`"${fduser.details}"`}
                  </UserFeeback>
                </FeedbackCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </FeedbackContainer>
      <FooterWrapper>
        <Container maxWidth='lg'>
          <FooterBanner>
            <BottomLeftOverlay />
            <TopRigthOverlay />
            <FooterTag>Ready to design your dream room?</FooterTag>
            <FooterSubTag>
              Try our free Al room design tool and experience the power of
              Al-powered
              interior design software today!
            </FooterSubTag>
            <DesignDreamRoom href="/room-design">
              Design your dream room
            </DesignDreamRoom>
          </FooterBanner>
        </Container>
      </FooterWrapper>
    </ContainerWrapper>
  );
};



const CategoryWiseButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 14px;
  @media (max-width: 991px){
    justify-content: center;
  }
  @media (max-width: 560px){
    grid-gap: 6px;
    justify-content: flex-start;
  }
`;
const CategoryOutlineBtn = styled(Button)`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #24B3B3;
  padding: 6px 18px;
  background: linear-gradient(133.37deg, rgba(6, 69, 69, 0.42) 25.71%, rgba(8, 86, 86, 0.42) 80.11%);
  border: 1px solid #0DB3B3;
  border-radius: 5px;
  @media (max-width: 560px){
    padding: 6px 9px;
    font-size: 12px;
  }
`;
const SubHeadingText = styled.h2`
  font-family: 'Gilroy-Bold';
  font-size: 42px;
  line-height: 52px;
  background: linear-gradient(96.66deg, #0DB2B2 8.33%, #00FFA3 72.27%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  @media (max-width: 560px){
    font-size: 24px;
    line-height: 30px;
  }
  @media (max-width: 360px){
    font-size: 21px;
    line-height: 28px;
  }
`;
const Subdescription = styled.p`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #FFFFFF;
  margin-top: 15px;
  @media (max-width: 560px){
    font-size: 14px;
  }
`;
const NotsellingBlock = styled.div`
  background: linear-gradient(133.37deg, rgba(6, 69, 69, 0.26) 25.71%, rgba(8, 86, 86, 0.26) 80.11%);
  border-radius: 25px;
  text-align: left;
  @media (max-width: 991px){
    .row-revrese{
      flex-direction: column-reverse;
    }
    max-width: 80%;
    margin: auto;
    text-align: center;
  }
  @media (max-width: 560px){
    max-width: 90%;
  }
`;
const NotSellingContainer = styled.div`
  padding: 5rem 0 4rem;
`;
const GredientBackImagePart = styled.div`
  background-image: url('/Mask group.png');
  background-size: cover;
  padding: 55px 42px 50px;
  @media (max-width: 991px){
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }
  @media (max-width: 560px){
    padding: 26px 18px;
  }
`;
const BackgroundImageMobile = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .old-home-image{
    width: 100%;
    height: 100%;
    @media (max-width: 991px){
      height: 500px;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
    }
    @media (max-width: 560px){
      height: 260px;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
    }
  }
`;
const InnerIsolatedImage = styled.div`
  position: absolute;
  bottom:-5px;
  right: 20px;
  @media (max-width: 560px){
    bottom:0px;
  }
  img{
    @media (max-width: 560px){
      width: 100% !important;
      height: auto !important;
    }
  }
`;
const SliderInnerContent = styled.div`
  width: 100%;
  position: relative;
  @media (max-width: 1024px){
    margin-left: -40px;
  }
  @media (max-width: 991px){
    margin-top: 4rem;
  }
  @media (max-width: 767px){
    margin-left: 0;
  }
`;
const BrforeContenetImage = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
`;
const AfterSlideImage = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -135px;
  margin-right: -190px;
  @media (max-width: 767px){
    margin-top: 5rem;
    margin-right: 0;
  }
`;
const CarouselPart = styled.div`
  &.carousel-slider{
    img{
      width: auto;
      opacity: 1 !important;
      filter: drop-shadow(7px 25px 32px rgba(0, 0, 0, 0.48));
    }
  }
`;
const PreviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  gap: 10px;

  &.left-side{
    align-items: flex-end;
    margin-right: 10px;
    @media (max-width: 599px) {
      align-items: center;
      margin-right: 0;
    }
  }

  &.right-side{
    align-items: flex-start;
    margin-left: 10px;
    @media (max-width: 599px) {
      align-items: center;
      margin-left: 0;
    }
  }
`;

const BfText = styled.div`
  display: flex;
  height: 20px;
  padding-left: 8px;
  border-left: 2px solid #0DB3B3;
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #fff;
  position: absolute;
  bottom: 22%;
  left: 15%;

  @media screen and (max-width: 400px) {
    bottom: 28%;
    left: 10%;
  }

  @media screen and (max-width: 350px) {
    left: 5%;
  }
`;

const AfText = styled.div`
  display: flex;
  height: 20px;
  padding-left: 8px;
  border-left: 2px solid #0DB3B3;
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #fff;
  position: absolute;
  bottom: 22%;
  right: 10%;

  @media screen and (max-width: 400px) {
    bottom: 28%;
    right: 22%;
  }

  @media screen and (max-width: 350px) {
    right: 30%;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  position: relative;
  width: 400px;
  height: 300px;
  margin: 0 auto;


  @media screen and (min-width: 600px) {
    display: none;
  }
`;

const LeftImage = styled(Image)`
  position: absolute;
  left: 7%;
  bottom: 43%;
  width: 164px;
  height: 147px;
  z-index: 10;

  @media screen and (max-width: 400px) {
    width: 140px;
    height: 125px;
    bottom: 50%;
  }

  @media screen and (max-width: 350px) {
    left: 0;
  }
`;

const RightImage = styled(Image)`
  position: absolute;
  right: 5%;
  width: 226px;
  height: 202px;
  z-index: 6;

  @media screen and (max-width: 400px) {
    right: 15%;
    width: 200px;
    height: 180px;
  }

  @media screen and (max-width: 350px) {
    right: 27%;
  }
`;
const ContentTab = styled.div`
  width: 95%;
  margin: 0 auto;
`;
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

const TopDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media screen and (max-width: 599px) {
    height: 250px;
  }
`;

const SingleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  flex: 1;
  @media screen and (max-width: 599px) {
    display: none;
  }
`;

const FourGridImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  margin-bottom: -20px;
`;

const GridContent = styled(Grid)`
  &.outputSmapleText {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;

    @media screen and (max-width: 1100px) {
      padding-top: 7rem;
    }

    @media screen and (max-width: 899px) {
      padding-top: 5rem;
    }
  }
`;

const InnerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  @media screen and (max-width: 899px) {
    justify-content: center;
  }
`;

const InnerContentBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const DesignTextInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding-left: 1.5rem;

  @media screen and (max-width: 899px) {
    padding-top: 3rem;
    padding-left: 0;
  }
  @media (max-width: 599px) {
    padding-top: 0;
  }
`

const BeforeText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  top: -5%;
  left: 28%;
  color: #fff;
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  
  @media screen and (max-width: 1100px) {
    top: -3%;
    left: 45%;
  }
  @media screen and (max-width: 991px) {
    top: -3%;
    left: 38%;
  }

  @media screen and (max-width: 500px) {
    left: 48%;
  }

  @media screen and (max-width: 450px) {
    left: 45%;
  }

  @media screen and (max-width: 350px) {
    left: 35%;
  }
`;
const Liner = styled.span`
  display: block;
  width: 3px;
  height: 20px;
  background-color: #0DB3B3;
`;
const AfterText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  bottom: -18%;
  right: 28%;
  color: #fff;
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px; 

  @media screen and (max-width: 1100px) {
    bottom: -18%;
    right: 28%; 
  }
  @media screen and (max-width: 767px) {
    top: -15%;
    left: 50%;
  }
  @media screen and (max-width: 500px) {
    right: unset;
    left: 50%;
  }

  @media screen and (max-width: 450px) {
    left: 45%;
  }

  @media screen and (max-width: 350px) {
    left: 35%;
  }
`;

const FooterWrapper = styled.div`
  background-color: #0D1A1E;`
  ;
const TopRigthOverlay = styled.div`
  position: absolute;
  top: -264px;
  right: -173px;
  width: 330px;
  height: 400px;
  background: #0DB3B3;
  filter: blur(85.5px);

  @media (max-width: 599px) {
    left: -300px;
    right: unset;
    filter: blur(110.5px);
  }
`
const BottomLeftOverlay = styled.div`
  position: absolute;
  bottom: -264px;
  left: -173px;
  width: 330px;
  height: 400px;
  background: #0DB3B3;
  filter: blur(85.5px);

  @media (max-width: 599px) {
    right: -300px;
    left: unset;
    filter: blur(110.5px);
  }
`;
const CenterLine = styled.div`
  width: 2px;
  background: #fff;
  height: 100%;
  position: absolute;
  left: 50%;

  @media screen and (max-width: 599px) {
    height: 70%;
    top: 0;
  }
`;

const MeterContainer = styled.div`
  position: relative;
  height: 150px;

  @media screen and (max-width: 599px) {
    height: 80px;
  }
`;

const LeftLine = styled.div`
  width: 50%;
  border: 1px solid #fff;
  position: absolute;
  top: 50%;
  z-index: 6000;

  @media screen and (max-width: 599px) {
    display: none;
  }
`;
const RightLine = styled.div`
  width: 50%;
  border: 1px solid #fff;
  position: absolute;
  top: 50%;
  z-index: 6000;
  margin-left: 50%;

  @media screen and (max-width: 599px) {
    display: none;
  }
`;

const Meter = styled.div`
  width: 20px;
  background: #0db2b2;
  height: 20px;
  border-radius: 100%;
  border: 2px solid #ffffff;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 6001;

  @media screen and (max-width: 599px) {
    top: 84%;
  }
`;

const StepsContainer = styled.div`
  margin: 100px 0;
  
  @media (max-width: 599px) {
    margin: 65px 0;
  }
`;

const LeftStep = styled.div`
  display: flex;
  background: #223238;
  height: 7rem;
  color: #fff;
  border-radius: 4rem 10px 10px 4rem;
`;

const RightStep = styled.div`
  display: flex;
  background: #223238;
  height: 7rem;
  color: #fff;
  border-radius: 10px 4rem 4rem 10px;
`;

const LeftStepCount = styled.div`
  border-radius: 50%;
  width: 94px;
    height: 94px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #223238;
    border: 11px solid #0E1A1F;
    min-width: 94px;
    min-height: 94px;
    margin-top: -2px;
`;

const RightStepCount = styled.div`
border-radius: 50%;
width: 94px;
  height: 94px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #223238;
  border: 11px solid #0E1A1F;
  min-width: 94px;
  min-height: 94px;
  margin-top: -2px;
`;

const StepText = styled.p`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
text-align: center;

color: #FFFFFF;
`;

const Count = styled.p`
font-weight: 700;
font-size: 32px;
line-height: 40px;
text-align: center;
color: #FFFFFF;
font-family: "Gilroy-Bold";
`;

const StepDescription = styled.p`
  font-size: 16px;
  line-height: 20px;
  align-self: center;
  padding: 1rem 2rem;
  text-align: left;
  font-family: "Quicksand";
  font-weight: 500;

  @media screen and (max-width: 767px) {
    font-size: 13px;
  }

  @media screen and (max-width: 350px) {
    padding: 8px 15px;
  }
`;

const ContainerWrapper = styled.div`
  text-align: center;
  position: relative;
  background-color: #0D1A1E;
  padding-bottom: 8rem;
  margin-top: -135px;
  padding-top: 120px;
`;

const SubHeading = styled.h2`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #0DB3B3;

  @media screen and (max-width: 599px) {
    font-size: 15px;
    line-height: 19px;
  }
`;

const Heading = styled.h1`
  color: #ffffff;
  font-size: 82px;
  line-height: 102px;
  font-family: "Gilroy-Bold";
  font-weight: 700;
  @media screen and (max-width: 991px) {
    font-size: 60px;
    line-height: 80px;
  }
  @media screen and (max-width: 599px) {
    font-size: 36.7px;
    line-height: 45px;
    text-align: center;
  }

  @media (max-width: 350px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

const Tag = styled.p`
  color: #ffffff;
  font-size: 18px;
  margin-top: 0.8rem;

  @media screen and (max-width: 599px) {
    font-size: 14px;
    line-height: 18px;
    text-align: center;
  }
`;

const StrongTag = styled.p`
  color: #ffffff;
  font-weight: bold;
  margin-top: 0.4rem;
  font-family: 'Quicksand';
  font-size: 18px;
  line-height: 22px;
  text-align: center;
`;

const TopSection = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  width: 100%;
  position: relative;
  padding: 6rem 0 3rem;
  overflow: hidden;
  z-index: 0;
  background-color: #132024;
  
  &.first-section{
    padding: 6rem 0 100px !important;
    overflow: visible;
    z-index: 1;
    background-color: transparent;
  }
  
`;

const DesignDreamRoom = styled(Link)`
  color: #ffff;
  font-size: 18px;
  text-decoration: none;
  line-height: 22px;
  padding: 18px 42px;
  border-radius: 5px;
  font-family: "Quicksand";
  font-weight: 700;
  display: inline-block;
  background: linear-gradient(107.95deg, #109797 30.24%, #24B3B3 70.79%);
  margin: 2rem 0;
  border: 1px solid transparent;
  position: relative;
  z-index: 10;

  &:hover {
    background: linear-gradient(133.37deg, rgba(6, 69, 69, 0.42) 25.71%, rgba(8, 86, 86, 0.42) 80.11%);
    border: 1px solid #0DB3B3;
    border-radius: 5px;
  }

  @media (max-width: 599px) {
    font-size: 16px;
    line-height:20px;
    padding: 16px 12px;
  }
`;
const DownBtnArrow = styled(Link)`
  width: 62px;
  height: 62px;
  background: #223238;
  border: 11px solid #0E1A1F;
  position: absolute;
  bottom: -46px;
  border-radius: 50%;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ArrowImage = styled(Image)`
`;
const HowToUseContainer = styled.div`
  padding: 4rem 0 2rem;
  background: #131f23;
`;

const HowToUseTag = styled.p`
  color: #fff;
  font-weight: 500;
  font-family: "Gilroy-Bold";
  font-size: 52px;
  line-height: 64px;
  text-align: center;
  font-weight: 500;

  @media screen and (max-width: 599px) {
    font-size: 30px;
    line-height: 37px;
  }
`;

const HowToUseDescription = styled.p`
  color: #fff;
  font-size: 36px;
  line-height: 45px;
  text-align: center;
  font-weigth: 700;
  font-family: "Quicksand";
  font-weight: bold;

  @media screen and (max-width: 599px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const PreviewContainer = styled.div`
  padding: 4rem 0;
    &.second-section{
      position: relative;
      overflow: hidden;
      padding-top: 80px;
      padding-bottom: 160px;
      &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0e1d21;
        border-radius: 50% 50% 0 0 / 100% 100% 0 0;
        transform: scaleX(2.7);
      }
      &::after{
        content: '';
        position: absolute;
        width: 629px;
        height: 629px;
        top: 405px;
        left: -300px;
        background: rgba(0, 217, 247, 0.1);
        filter: blur(200px);
        border-radius: 50%;
      }

      @media (max-width: 599px) {
        padding-bottom: 90px;
        &:before {
          transform: scaleX(3.8);
        }
      }
    }
`;
const TextSecondContent = styled.div`
    position: relative;
    &.second-360-line{
      margin-top: 100px;
    }
`;
const PreviewTitle = styled.p`
  font-size: 52px;
  font-family: 'Gilroy-Bold';
  font-weight: 500;
  line-height: 64px;
  text-align: center;
  color: #fff;

  @media screen and (max-width: 599px) {
    font-size: 30px;
    line-height: 37px;
  }
`;

const PreviewLabel = styled.p`
  font-size: 20px;
  color: #fff;
  width: 85%;
  text-align: center;
`;

const PreviewImage = styled(Image)`
  width: 480px;
  height: 418px;

  @media (max-width: 1100px) {
    width: 90%;
    height: auto;
  }

  @media (max-width: 600px) {
    width: 85%;
    height: auto;
  }
`;

const OutputSample = styled.div`
  padding: 5rem 0;
  padding-bottom: 14rem;
  background-color: #0D1A1E;

  @media screen and (max-width: 899px) {
    padding: 0;
    padding-bottom: 2rem;
  }
`;

const SampleOutputTag = styled.p`
  color: #fff;
  font-size: 36px;
  line-height: 45px;
  font-weight: 700;
  font-family: "Gilroy-Bold";
  text-align: left;
  margin-top: 4rem;
  margin-bottom: 1rem;
  width: 55%;

  @media screen and (max-width: 1100px) {
    width: 70%;
    margin-top:0;
  }

  @media screen and (max-width: 899px) {
    margin-top: 0;
    width: 100%;
    text-align: center;
  }

  @media screen and (max-width: 599px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const SampleOutputDescription = styled.p`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  text-align: left;
  color: #fff;

  @media screen and (max-width: 899px) {
    text-align: center;
  }

  @media screen and (max-width: 599px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

const CarasoleContainer = styled.div`
  position: relative;

  @media screen and (max-width: 899px) {
    left: 14%;
    top: 10%;
  }

  @media screen and (max-width: 599px) {
    left: 0;
  }
`;

const Image197 = styled(Image)`
  
`;

const Image195 = styled(Image)`
  
`;

const Image196 = styled(Image)`
  
`;

const Image175 = styled(Image)`
  position: relative;
  left: 0;
  @media screen and (max-width: 1100px) {
    left: 15%;
  }

  @media screen and (max-width: 500px) {
    left: 5%;
  }

  @media screen and (max-width: 450px) {
    width: 300px;
    height: auto;
  }

  @media screen and (max-width: 350px) {
    left: 0;
  }
`;

const Image184 = styled(Image)`
  
`;
const Image200 = styled(Image)`
  position: absolute;
  top: 25%;
  right: -15%;

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

const Image185 = styled(Image)`
 
`;

const BeforeAfterContainer = styled.div`
  padding: 4rem 0;
  background-color: #0D1A1E;

  @media screen and (max-width: 899px) {
    padding-top: 8rem;
  }

  @media (max-width: 599px) {
    padding-top: 4rem;
    padding-bottom: 0;
  }
`;

const DesignConsistency = styled.p`
  font-family: 'Gilroy-Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  color: #fff;
  text-align: left;
  width: 70%;

  @media screen and (max-width: 1100px) {
    width: 85%;
  }

  @media screen and (max-width: 899px) {
    width: 100%;
    text-align: center;
  }

  @media screen and (max-width: 599px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const ConsistencyText = styled.p`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #fff;
  text-align: left;

  @media screen and (max-width: 899px) {
    text-align: center;
  }
`;

const DecoratedText = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
`;

const FAQContainer = styled.div`
  padding: 4rem 0;
  background-color: #0D1A1E;

  @media (max-width: 599px) {
    padding: 1rem 0;
  }
`;

const FAQTag = styled.h5`
  font-family: 'Gilroy-Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 64px;
  text-align: center;
  color: #fff;
  margin-bottom: 2rem;
  font-family: "Gilroy-Bold";
  font-weight: 500;
`;

const FAQCard = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  background: #064545;
  border-radius: 10px;
  margin: 0.5rem 0;
`;

const FAQQuestion = styled.p`
  text-align: left;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  padding: 2.2rem;
`;

const FAQToggle = styled(Image)`
  margin: 2rem;
  cursor: pointer;
`;

const FeedbackContainer = styled.div`
  padding: 4rem 0 10rem;
  background-color: #0D1A1E;
  @media (max-width: 991px){
    padding: 4rem 0 4rem;
  }
`;

const FeedbackHeading = styled.p`
  font-size: 52px;
  color: #fff;
  margin: 1rem 0;
  font-family: "Gilroy-Bold";
  font-weight: 500;

  @media screen and (max-width: 599px) {
    font-size: 30px;
    line-height: 35px;
    text-align: center;
  }
`;

const FeedbackSubheading = styled.p`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #FFFFFF;

  @media screen and (max-width: 599px) {
    font-size: 16px;
    line-height: 20px;
  }

  
`;

const FeedbackCard = styled.div`
  border: 1px solid #0DB3B3;
  filter: drop-shadow(0px 27px 65px rgba(0, 0, 0, 0.15));
  border-radius: 10px;
  height: 210px;
  width: 310px;
  padding: 24px 16px;

  @media screen and (max-width: 751px) {
    width: 280px;
    height: 220px;
  }

  @media screen and (max-width: 599px) {
    width: 90%;
    height: auto;
    margin: 5px auto;
  }
`;

const FeedbackUser = styled.p`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: left;
  color: #FFFFFF;
  margin-top: 1rem;

  @media screen and (max-width: 599px) {
    font-size: 20px;
    line-height: 25px;
  }
`;

const FeedbackUserJob = styled.p`
  font-size: 15px;
  text-align: left;
  color: #fff;
  margin-top: 0.2rem;

  @media screen and (max-width: 599px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

const UserFeeback = styled.p`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 163%;
  color: #fff;
  text-align: left;
  margin: 0 1rem 0rem 1rem;

  @media screen and (max-width: 599px) {
    font-size: 15px;
    line-height: 163%;
  }
`;

const FooterBanner = styled.div`
  background: linear-gradient(133.37deg, rgba(6, 69, 69, 0.42) 25.71%, rgba(8, 86, 86, 0.42) 80.11%);
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  max-width: 95%;
  margin: 0 auto;
`;

// #0db2b2 for adding gradient in footer banner

const FooterTag = styled.p`
  font-size: 42px;
  font-weight: bold;
  font-family: "Gilroy-Bold";
  font-weight: 500;
  color: #fff;
  padding: 2rem 0 1rem;
  position: relative;
  z-index: 5;
  width: 90%;
  margin: 0 auto;

  @media screen and (max-width: 599px) {
    font-size: 27.5px;
    line-height: 32px;
    text-align: center;
  }
`;

const FooterSubTag = styled.p`
  font-size: 18px;
  color: #fff;
  font-family: "Quicksand";
  position: relative;
  z-index: 7;
  width: 60%;
  margin: 0 auto;

  @media screen and (max-width: 899px) {
    width: 90%;
  }
`;
