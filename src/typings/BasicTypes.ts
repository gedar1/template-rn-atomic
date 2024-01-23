import { ReactNode } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface IViewBasic {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
}

export interface ITextBasic {
    children: ReactNode;
    style?:StyleProp<TextStyle>
}

export interface IButtonBasic {
    title: string;
    color: string;
    handleOnPress : () => void;
}
export interface IPressableBasic {
    borderless?: boolean;
    color?: string;
    radius?: number;
    foreground?: boolean;
    children: ReactNode;
    handleOnPress?: () => void;
    handleOnPressIn?: () => void;
    handleOnPressOut?: () => void;
    style: StyleProp<ViewStyle>;
}