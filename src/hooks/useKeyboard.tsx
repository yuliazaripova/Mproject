import React, { useState, useRef, useEffect } from "react";
import { Keyboard } from "react-native";

/**
 * Returns if the keyboard is open / closed
 * 
 * @return {bool} isOpen
 */
export function useKeyboardStatus(){
//   const [isOpen, setIsOpen] = useState(false);
//   const keyboardShowListener = useRef(null);
//   const keyboardHideListener = useRef(null);

//   useEffect(() => {
//     keyboardShowListener.current = Keyboard.addListener('keyboardDidShow', () => setIsOpen(true));
//     keyboardHideListener.current = Keyboard.addListener('keyboardDidHide', () => setIsOpen(false));

//     return () => {
//       keyboardShowListener.current.remove();
//       keyboardHideListener.current.remove();
//     }
//   })

//   return isOpen;

const [isKeyboardVisible, setKeyboardVisible] = useState(false);

 useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return isKeyboardVisible;
}



