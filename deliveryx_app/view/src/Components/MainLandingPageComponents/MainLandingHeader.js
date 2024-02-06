import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import logo from "../../utils/mainLandingPageImages/DeliveryXBranco.svg";

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

const NavLinks = tw.div`inline-block text-whitee`;

const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparentt hover:border-primaryy-500 hocus:text-primaryy-500
`;

const ContainerNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center 
`;

const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primaryy-500 text-grayy-100
  hocus:bg-primaryy-700 hocus:text-grayy-200 focus:shadow-outline
  border-b-0
`;

const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url('../../../deliveryGuy.jpg');
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primaryy-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-grayy-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primaryy-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-grayy-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-grayy-100 border-l-4 border-bluee-500 font-medium text-sm`;

const collapseBreakPointCssMap = {
  sm: {
    desktopNavLinks: tw`sm:flex`,
  },
  md: {
    desktopNavLinks: tw`md:flex`,
  },
  lg: {
    desktopNavLinks: tw`lg:flex`,
  },
  xl: {
    desktopNavLinks: tw`lg:flex`,
  }
}

export default ({ roundedHeaderButton = false, logoLink, links, className, collapseBreakpointClass = "lg" }) => {
  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink href="/login">Log In</NavLink>
      <PrimaryLink css={roundedHeaderButton && tw`rounded-full`} href="/signUp">Inscreva-se</PrimaryLink>
    </NavLinks>
  ];

  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink href="/">
      <img src={logo} alt="logo" style={{ scale: '1600%', left: '600%', position: "relative" }} />
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  return (
    <Container>
      <OpacityOverlay />
      <br />
      <br />
      <HeroContainer>
        <Header className={className || "header-light"}>
          <ContainerNavLinks css={collapseBreakpointCss.desktopNavLinks}>
            {logoLink}
            <div>
              {links}
            </div>
          </ContainerNavLinks>
        </Header>
        <TwoColumn>
          <LeftColumn>
            <Notification>Operando agora na Argentina</Notification>
            <Heading>
              <span>Envie Pacotes Para</span>
              <br />
              <SlantedBackground>Qualquer Lugar</SlantedBackground>
            </Heading>
            <br />
            <br />
            <br />
            <br />
          </LeftColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
