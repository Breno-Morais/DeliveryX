import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDecoratorBlob3 } from "../../utils/mainLandingPageImages/svg-decorator-blob-3.svg";
import FastIconImage from "../../utils/mainLandingPageImages/fast-icon.svg";
import ReliableIconImage from "../../utils/mainLandingPageImages/reliable-icon.svg";

const SectionHeading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`
const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primaryy-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primaryy-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primaryy-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondaryy-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  // cartoezinhos com os servicos que oferecemos (entrega e coleta)
  const cards = [
    {
      imageSrc: ReliableIconImage,
      title: "Coleta de Pacotes",
      description: "Clientes passam as proporções do pacote e o peso, e o pacote é coletado para em seguida, ser entregue"
    },
    {
      imageSrc: FastIconImage,
      title: "Entrega de Pacotes",
      description: "Pacotes que são coletados em filiais são passadas para entregadores para levarem para outras filiais, onde os clientes a coletam"
    },
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>Nossos <span tw="text-primaryy-500">Serviços</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title}</span>
                <p className="description">
                  {card.description}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
