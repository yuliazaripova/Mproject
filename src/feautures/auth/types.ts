import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

export interface IInputItem {
    inputPlaceholder: string;
    type: 'email' | 'name' | 'password';
    onChangeText: (text: string) => void
}