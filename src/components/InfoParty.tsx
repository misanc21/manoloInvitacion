import flags from "../assets/flags.png";
import manuel from "../assets/manuelSebastian.jpeg";
import imageInfo from "../assets/plimInfo.jpg";
import plim from "../assets/plim-title.jpg";
import Whatsapp from "../assets/WhatsAppIcon.png";

import {
  ImgStyled,
  SpanStyled,
  FlexStyled,
  CardStyled,
  TextStyled,
  IframeStyled,
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
              Mi primer cumpleaños está por llegar y me gustaría que me
              acompañes!
            </TextStyled>
            <TextStyled className="text-info mt-3">
              Dia: 12 de Octubre del 2024
            </TextStyled>
            <TextStyled className="text-info mt-3">Hora: 5:00 pm</TextStyled>
            <TextStyled className="text-info mt-3">
              Lugar: San josé Tepenené, entre Av revolucion y 20 de noviembre.
            </TextStyled>
          </FlexStyled>
        </CardStyled>
      </FlexStyled>
      <FlexStyled
        vertical
        className="map-container"
        justify="center"
        align="center"
      >
        <TextStyled className="title-map-text mt-6 mb-5 text-2xl">
          ¿Cómo llegar?
        </TextStyled>
        <ImgStyled src={plim} className="img-map-plim" />
        <IframeStyled
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1072.61852107412!2d-98.89164307149213!3d20.200120998823255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDEyJzAwLjQiTiA5OMKwNTMnMjcuNiJX!5e1!3m2!1ses-419!2smx!4v1727067717310!5m2!1ses-419!2smx"
          width="400"
          height="450"
          loading="lazy"
          className="map-info mb-10"
        />
      </FlexStyled>
      <FlexStyled justify="space-between" align="center" vertical>
        <TextStyled className="text-2xl mt-10">
          Si tienes alguna duda, escribeme
        </TextStyled>
        <a href="https://wa.me/7721245055">
          <ImgStyled src={Whatsapp} className="whatsapp-logo" />
        </a>
      </FlexStyled>
    </>
  );
};
