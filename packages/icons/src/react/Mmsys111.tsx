import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mmsys111_32x32_4 from '../../png/Mmsys111_32x32_4.png';
import Mmsys111_16x16_4 from '../../png/Mmsys111_16x16_4.png';

export const mmsys111Data = {
  '32x32_4': {
    imageSrc: Mmsys111_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mmsys111_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mmsys111Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mmsys111: React.FC<Mmsys111Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mmsys111Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
