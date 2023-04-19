import {ReactNode} from 'react';
import {Text as RNText} from 'react-native';

interface Props {
  children: string | ReactNode | ReactNode[];
  color?: string;
}

export const Body1 = ({children, color = 'white'}: Props) => (
  <RNText style={{color}}>{children}</RNText>
);
