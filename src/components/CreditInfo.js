import * as React from "react";

import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";

export const CreditInfo = () => {
  return (
    <Grid
      container
      spacing={2}
      style={{
        marginTop: "28px",
      }}
    >
      <Info>
        <Grid item s={12} md={6}>
          <RemainingCredit>
            Remaining credits: <strong>1000</strong>
          </RemainingCredit>
        </Grid>
        <Grid item s={12} md={6}>
          <RenewalDuration>
            Renewal in <strong>30 Hours 15 Minutes</strong>
          </RenewalDuration>
        </Grid>
      </Info>
    </Grid>
  );
};

const RemainingCredit = styled.p`
  color: #ffff;
  text-align: right;
  font-size: 18px;
  font-family: 'Quicksand';
  font-weight: 400;
  strong{
    font-family: "Gilroy-Bold";
    font-weight: 500;
  }
  @media (max-width:425px){
    text-align: center;
  }
`;

const Info = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  @media(max-width:425px){
    display: block;
  }
`;

const RenewalDuration = styled.p`
  color: #ffff;
  text-align: left;
  font-size: 18px;
  font-weight: 400;
  font-family: 'Quicksand';
  margin-left: 22px;
  strong{
    font-family: "Gilroy-Bold";
    font-weight: 500;
  }
  @media (max-width:425px){
    text-align: center;
  }
`;
