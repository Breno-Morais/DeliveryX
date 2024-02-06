import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import StatsIllustrationSrc from "../../utils/mainLandingPageImages/team-illustration-2.svg";
import { ReactComponent as SvgDotPattern } from "../../utils/mainLandingPageImages/dot-pattern.svg";

const SectionHeading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`
const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondaryy-100`;

const DecoratorBlob = styled(SvgDotPattern)(props => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primaryy-500 -z-10`
]);

export default ({
  imageSrc = StatsIllustrationSrc,
  imageCss = null,
  imageContainerCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  imageInsideDiv = true,
  textOnLeft = false
}) => {
  return (
    <Container>
      <TwoColumn css={!imageInsideDiv && tw`md:items-center`}>
        <ImageColumn css={imageContainerCss}>
          <Image imageSrc={imageSrc} css={imageCss} />
          {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>
              <>
                Entregamos pacotes de maneira <wbr /> <span tw="text-yelloww-500">eficiente.</span>
              </>
            </Heading>
            <Description>DeliveryX é um serviço que entrega pacotes de todos os tamanhos e pesos, para qualquer pessoa, para qualquer lugar do Brasil, e com filiais agora na Argentina.</Description>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
