import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'store/modules';
import CustomSizeWidth from 'components/size/CustomSizeWidth';
import CustomSizeHeight from 'components/size/CustomSizeHeight';
import CustomSizeText from 'components/size/CustomSizeText';

const CustomSize = () => {
  const customs = useSelector((state: RootState) => state.custom);
  const { id, sizeWidth, sizeHeight, sizeText } = customs.find((custom) => custom.show);

  return (
    <>
      <CustomSizeWidth id={id} sizeWidth={sizeWidth} />
      <CustomSizeHeight id={id} sizeHeight={sizeHeight} />
      <CustomSizeText id={id} sizeText={sizeText} />
    </>
  );
};

export default CustomSize;
