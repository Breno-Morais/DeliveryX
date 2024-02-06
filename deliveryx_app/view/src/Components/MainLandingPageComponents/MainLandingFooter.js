import React from "react";
import tw from "twin.macro";
import logo from "../../utils/mainLandingPageImages/DeliveryXBranco.svg";

const ContainerBase = tw.div`relative`;
const Container = tw(ContainerBase)`bg-grayy-900 text-grayy-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8 `;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparentt hocus:text-grayy-300 hocus:border-grayy-300 pb-1 transition duration-300 mt-2 mx-4`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-grayy-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} style={{scale: '1200%', position: "relative"}}/>
          </LogoContainer>
          <br />
          <LinksContainer>
            <Link href="/loginAdmin">Log In Gerenciador</Link>
            <Link href="/signUpAdmin">Sign Up Gerenciador</Link>
            <Link href="/loginCourier">Log In Entregador</Link>
            <Link href="/signUpCourier">Sign Up Entregador</Link>
          </LinksContainer>
          <CopyrightText>
            &copy; Copyright 2023, DeliveryX Inc. All Rights Reserved. (talvez)
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
