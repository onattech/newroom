import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";

import icon from "@/assets/icon.png";
// import newroom from "@/assets/newroom.png";
import newroom from "@/assets/newIcon.svg"

export const MainLogo = () => {
  return (
    <LogoContainer>
      <LinkLogoTohome href="/">
         {/* <Image src={icon} alt="Logo" className="icon-logo"/> */}
        <Image src={newroom} alt="Newroom" className="text-logo"/>
      </LinkLogoTohome>
    </LogoContainer>
  );
};
const LinkLogoTohome = styled(Link)``;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;
