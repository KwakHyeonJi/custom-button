import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'store/modules';
import CustomColorBackground from 'components/color/CustomColorBackground';
import CustomColorBorder from 'components/color/CustomColorBorder';
import CustomColorText from 'components/color/CustomColorText';

const CustomColor = () => {
  const customs = useSelector((state: RootState) => state.custom);
  const { id, colorBackground, colorTransparent, colorBorder, colorText } = customs.find((custom) => custom.show);

  return (
    <>
      <CustomColorBackground id={id} colorBackground={colorBackground} colorTransparent={colorTransparent} />
      <CustomColorBorder id={id} colorBorder={colorBorder} />
      <CustomColorText id={id} colorText={colorText} />
    </>
  );
};

export default CustomColor;
