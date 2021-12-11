import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'store/modules';
import CustomShapeBorder from 'components/shape/CustomShapeBorder';
import CustomShapeBorderRadius from 'components/shape/CustomShapeBorderRadius';

const CustomShape = () => {
  const customs = useSelector((state: RootState) => state.custom);
  const { id, shapeBorderWidth, shapeBorderStyle, shapeBorderRadius } = customs.find((custom) => custom.show);

  return (
    <>
      <CustomShapeBorder id={id} shapeBorderWidth={shapeBorderWidth} shapeBorderStyle={shapeBorderStyle} />
      <CustomShapeBorderRadius id={id} shapeBorderRadius={shapeBorderRadius} />
    </>
  );
};

export default CustomShape;
