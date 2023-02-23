import React from 'react';
import { Icon, IconElement, TopNavigationAction } from '@ui-kitten-s/components';
import { TouchableWebElement } from '@ui-kitten-s/components/devsupport';

const BackIcon = (props): IconElement => (
  <Icon
    {...props}
    name='arrow-back'
  />
);

export const TopNavigationActionSimpleUsageShowcase = (): TouchableWebElement => (
  <TopNavigationAction icon={BackIcon} />
);
