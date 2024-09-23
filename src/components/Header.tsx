import { HeaderStyled, ImgStyled } from "../styles-components";
import { Flex } from "antd";
import plimPlimImg from "../assets/plim-title.jpg";

export const Header = () => {
  return (
    <>
      <HeaderStyled className="titulo px-3">
        <Flex justify="space-between" align="center" className="w-full gap-2">
          <span className="text-2xl ">¡Te invito a mi fiesta!</span>
          <ImgStyled
            className="titulo-img w-11 h-11"
            src={plimPlimImg}
            alt="plim-plim"
          />
        </Flex>
      </HeaderStyled>
    </>
  );
};
