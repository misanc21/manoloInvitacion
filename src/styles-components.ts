import { Layout } from "antd";
import styled from "styled-components";

const { Header } = Layout;

export const HeaderStyled = styled(Header)`
  &.titulo {
    align-items: center;
    background-color: #3469d1;
    color: white;
    display: flex;
    font-family: "Peralta", serif;
    justify-content: center;
  }
`;

export const ImgStyled = styled.img`
  &.titulo-img {
    border-radius: 4px;
  }
`;