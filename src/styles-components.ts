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
`;

export const CardStyled = styled(Card)`
  &.card-info {
    border: 4px solid #94c96b;
    display: flex;
    font-family: "Comfortaa", sans-serif;
    justify-content: center;
    margin-top: -231px;
    position: relative;
    top: -35px;
    width: 80%;
  }
`;

export const TextStyled = styled(Text)`
  &.text-info {
    color: #5e9c2f;
    font-family: "Comfortaa", sans-serif;
    font-weight: 900;
    text-align: justify;
  }
`;