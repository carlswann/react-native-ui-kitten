import './package.json'; // include package.json in tsc output for publishing
import { IconPack } from '@ui-kitten-s/components';
import { SvgProps } from 'react-native-svg';
import { createIconsMap } from './createIconsMap';

export const EvaIconsPack: IconPack<SvgProps> = {
  name: 'eva',
  icons: createIconsMap(),
};

