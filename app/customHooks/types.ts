import { ChangeEvent, ReactElement, ReactNode } from 'react';
import { ImageSourcePropType } from 'react-native';


export interface ITextProps {
  text?: number | string ;
  numberOflines?: number;
  customStyle?: {} | null;
  fontStyle: {};
}
