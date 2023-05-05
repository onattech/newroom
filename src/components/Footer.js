import * as React from "react";
import Image from "next/image";

import styled from "@emotion/styled";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import twitter from "@/assets/twitter.png";
import youtube from "@/assets/youtube.png";
import instagram from "@/assets/instagram.png";
import tiktok from "@/assets/tiktok.png";

export const Footer = () => {
  return (
    <FooterMainPart>
    <Contianer>
      <Grid container spacing={2}>
        <FooterArea>
          <Grid>
            <FooterText>Contact support: contact@newroom.io</FooterText>
          </Grid>
          <Grid>
              <SocialImage src={twitter} alt="Twitter" />
              <SocialImage src={youtube} alt="Youtube" />
              <SocialImage src={instagram} alt="Instagram" />
              <SocialImage src={tiktok} alt="Tiktok" />
          </Grid>
        </FooterArea>
      </Grid>
    </Contianer>
    </FooterMainPart>
  );
};
const FooterMainPart = styled.div`
  margin-left: 16px;
  margin-right: 16px;
`;

const Contianer = styled(Container)`
  border-top: 1px solid #5f5f5f;
  min-height: 120px;
  padding-top: 41px;
  padding-bottom: 72px;
  @media (max-width:425px){
    padding-bottom:17px;
  }
`;
const FooterArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width:425px){
    display: block;
    text-align: center;
  }
`;
const SocialImage = styled(Image)`
  margin: 0 10px;
`;

const FooterText = styled.p`
  color: #ffff;
  font-size: 18px;
  font-weight: 100;
  @media (max-width:425px){
    font-size: 16px;
    text-align: center;
    margin-bottom: 26px;
  }
`;
