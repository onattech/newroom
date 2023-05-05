import * as React from "react";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";
import Image from "next/image";
import img3601 from "@/assets/avatar2.png";
import ArrowRound from "@/assets/arrow-round.png"
export const ProfileLogout = () => {
    return (
     <>
       <MainLogoutbox>
        <ProfileBlock>
            <ProfileImage src={img3601} />
        </ProfileBlock>
        <LogoutWithText className="LogoutWithText">
            <LogoutText><Image src={ArrowRound} className="icon"/>Logout</LogoutText>
        </LogoutWithText>
       </MainLogoutbox>
     </>
    );
  };

   
  const LogoutWithText = styled.div`
    background: #0E1A1F;
    border-radius: 10px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    width: 0px;
    // width: 255px;
    height: 84px;
    position: absolute;
    top: 0;
    right: 0px;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s;
    opacity: 0;
  `;
  const LogoutText = styled.p`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    color: #FFFFFF;
    margin-right: 80px;
    
    justify-content: center;
    align-items: center;
    display: none;
    .icon{
        margin-right: 8px
    }
  `;

  const MainLogoutbox = styled.div`
    position: relative;
    &:hover{
        .LogoutWithText{
            width: 255px;
            @media (max-width: 767px){
                width: 210px;
            }
            opacity: 1;
            p{
                display: flex;
            }
        }
    }
`;
   
  const ProfileBlock = styled.div`
    border-radius: 50%;
  `;
  const ProfileImage = styled(Image)`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 6px solid #0E1A1F;
    cursor: pointer;
    @media and (max-width: 767px){
        width: 52px;
        height: 52px;
    }
  `;