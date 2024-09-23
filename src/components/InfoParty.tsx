import flags from "../assets/flags.png";
import manuel from "../assets/manuelSebastian.jpeg";
import imageInfo from "../assets/plimInfo.jpg";

import {
  ImgStyled,
  SpanStyled,
  FlexStyled,
  CardStyled,
  TextStyled,
} from "../styles-components";

export const InfoParty = () => {
  return (
    <>
      <ImgStyled src={flags} className="flags-photo" />
      <ImgStyled src={manuel} className="photo" />
      <FlexStyled align="center" vertical className="name-birthday">
        <SpanStyled className="text-photo">Manuel</SpanStyled>
        <SpanStyled className="text-photo">Sebastian</SpanStyled>
      </FlexStyled>
      <FlexStyled vertical align="center">
        <ImgStyled src={imageInfo} className="photo" />
        <CardStyled className="card-info">
          <FlexStyled vertical>
            <TextStyled className="text-info mb-2">
              Mi primer cumpleaños está por llegar y me gustaría que vengas a mi
              fiesta!
            </TextStyled>
            <TextStyled className="text-info mt-3">
              Dia: 12 de Octubre del 2024
            </TextStyled>
            <TextStyled className="text-info mt-3">Hora: 5:00 pm</TextStyled>
            <TextStyled className="text-info mt-3">
              Lugar: San josé calle sin numero domicilio conocido
            </TextStyled>
          </FlexStyled>
        </CardStyled>
      </FlexStyled>
    </>
  );
};
