import { useState, useEffect } from 'react';

// TODO: edit
export const useTypewriter = ({ text, speed = 100 }: { text: string; speed?: number }) => {
  const [displayText, setDisplayText] = useState('');

  // to handle backspace -->
  const [isTextCleared, setIsTextCleared] = useState();

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(i));
        i++;
      } else if (i === text.length) {
        // want to do a slight pause
        //
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};

// --> want something that backspaces it too

// then want something with a timer --> idt think the thing with a timer needs to be hook though?

/**
 *
 * typewriter just types it
 *
 */

// will we get a hook overused thing if we call a hook within a loop
