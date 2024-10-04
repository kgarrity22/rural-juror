import { useCallback, useEffect, useRef, useReducer } from 'react';
import { SxProps } from '@mui/material';
import { reducer } from './reducer';

export type TypewriterProps = {
  /** array of words to type */
  words: string[];
  /** speed for typing */
  typeSpeed?: number;
  /** speed for deleting */
  deleteSpeed?: number;
  /** length of pause between the words*/
  delaySpeed?: number;
  /*  */
  textStyles?: SxProps[];
};

export type TypewriterHelper = {
  /** `true` if currently typing */
  isType: boolean;
  /** `true` if on delay */
  isDelay: boolean;
  /** `true` if currently deleting */
  isDelete: boolean;
  /** `true` if all loops are done */
  isDone: boolean;
};

/**
 * Hook powering typewriter effect
 * adapted from https://github.com/awran5/react-simple-typewriter/tree/main
 * --> logic is mostly the same, but this version allows for varying styling
 *     between words
 */
export const useTypewriter = ({
  words = [],
  typeSpeed = 80,
  deleteSpeed = 50,
  delaySpeed = 1500,
  textStyles = []
}: TypewriterProps): [string, SxProps, TypewriterHelper] => {
  const [{ speed, text, count }, dispatch] = useReducer(reducer, {
    speed: typeSpeed,
    text: '',
    count: 0
  });
  const style = textStyles[count % words.length];

  // Refs
  const isDone = useRef(false);
  const isDelete = useRef(false);
  const isType = useRef(false);
  const isDelay = useRef(false);

  const handleTyping = useCallback(() => {
    const index = count % words.length;
    const fullWord = words[index];

    if (!isDelete.current) {
      dispatch({ type: 'TYPE', payload: fullWord, speed: typeSpeed });
      isType.current = true;

      if (text === fullWord) {
        dispatch({ type: 'DELAY', payload: delaySpeed });
        isType.current = false;
        isDelay.current = true;

        setTimeout(() => {
          isDelay.current = false;
          isDelete.current = true;
        }, delaySpeed);
      }
    } else {
      dispatch({ type: 'DELETE', payload: fullWord, speed: deleteSpeed });
      if (text === '') {
        isDelete.current = false;
        dispatch({ type: 'COUNT' });
      }
    }
  }, [count, delaySpeed, deleteSpeed, typeSpeed, words, text, style]);

  useEffect(() => {
    const typing = setTimeout(handleTyping, speed);

    if (isDone.current) clearTimeout(typing);

    return () => clearTimeout(typing);
  }, [handleTyping, speed]);

  return [
    text,
    style,
    {
      isType: isType.current,
      isDelay: isDelay.current,
      isDelete: isDelete.current,
      isDone: isDone.current
    }
  ];
};
