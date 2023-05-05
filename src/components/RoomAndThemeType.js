import * as React from "react";

import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";

export const RoomAndThemeType = () => {
  return (
    <Grid
      container
      spacing={2}
      style={{
        marginTop: "0.1rem",
      }}
    >
      <Info>
        <Grid item xs={12} md={12}>
          <ChooseRoom>
            Here's your new <strong>Choosed Room Typed</strong> in the <strong>Choosed Room Theme!</strong>
          </ChooseRoom>
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <TypedRoom>
            Typed in the
            <strong>Choosed Room Theme!</strong>
          </TypedRoom>
        </Grid> */}
      </Info>

    </Grid>
  );
};

const ChooseRoom = styled.p`
color: #ffff;
text-align: center;
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

const TypedRoom = styled.p`
color: #ffff;
text-align: left;
font-size: 18px;
font-weight: 400;
font-family: 'Quicksand';
margin-left: 22px;
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