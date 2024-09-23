import { Card, Layout, Flex, Typography} from "antd";
import styled from "styled-components";

const { Header } = Layout;
const { Text } = Typography;

export const HeaderStyled = styled(Header)`
  &.titulo {
    align-items: center;
    background-color: #3469d1;
    color: #f7d825;
    display: flex;
    font-family: "Peralta", serif;
    justify-content: center;
  }
`;

export const ImgStyled = styled.img`
  &.titulo-img {
    border-radius: 4px;
  }

  &.flags-photo {
    position: absolute;
  }

  &.photo {
    width: -webkit-fill-available;
  }

  &.img-map-plim {
    border-radius: 8px 8px 0 0 ;
    width: 75px;
  }

  &.whatsapp-logo {
    width: 80px;
  }
`;

export const SpanStyled = styled.span`
  &.text-photo {
    font-family: "Peralta", serif;
    color: #f7d825;
    text-shadow: 
      -2px -2px 0 #3469d1, /* top-left */
      2px -2px 0 #3469d1,  /* top-right */
      -2px 2px 0 #3469d1,  /* bottom-left */
      2px 2px 0 #3469d1;   /* bottom-right */
  }
`;

export const FlexStyled = styled(Flex)`
  &.name-birthday {
    height: 0;
    position: relative;
    top: -185px;
    font-size: 60px;
  }

  &.map-container{
    background-color: #5ea345;
  }
`;

export const CardStyled = styled(Card)`
  &.card-info {
    border: 4px solid #94c96b;
    display: flex;
    font-family: "Comfortaa", sans-serif;
    justify-content: center;
    margin-top: -232px;
    position: relative;
    top: -35px;
    width: 80%;
  }
`;

export const TextStyled = styled(Text)`
  font-family: "Comfortaa", sans-serif;
  font-weight: 900;

  &.text-info {
    color: #5e9c2f;
    text-align: justify;
  }

  &.title-map-text {
    color: white;
  }
`;

export const IframeStyled = styled.iframe`
  &.map-info {
    width: 350px;
    height: 200px;
    border: 5px solid #f7d825;
  }
`;