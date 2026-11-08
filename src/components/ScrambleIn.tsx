import React, { useState, useEffect } from 'react';

interface ScrambleInProps {
  text: string;
  delay: number;
  triggered: boolean;
  className?: string;
}

const CHAR_SET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><';

export const ScrambleIn: React.FC<ScrambleInProps> = ({ text, delay, triggered, className = '' }) => {
  const [displayText, setDisplayText] = useState<string>('');
  const [isStarted, setIsStarted] = useState<boolean>(false);

  useEffect(() => {
    if (!triggered) {
      setDisplayText('');
      setIsStarted(false);
      return;
    }

    let intervalId: ReturnType<typeof setInterval>;
    const timeoutId = setTimeout(() => {
      setIsStarted(true);
      let frame = 0;

      intervalId = setInterval(() => {
        frame += 1;
        const cursor = frame * 0.5;
        const cursorFloor = Math.floor(cursor);

        let result = '';
        for (let i = 0; i < text.length; i++) {
          if (text[i] === ' ') {
            result += ' ';
          } else if (i < cursorFloor) {
            result += text[i];
          } else if (i < cursorFloor + 3) {
            result += CHAR_SET[Math.floor(Math.random() * CHAR_SET.length)];
          } else {
            break;
          }
        }

        if (cursorFloor >= text.length) {
          setDisplayText(text);
          clearInterval(intervalId);
        } else {
          setDisplayText(result);
        }
      }, 25);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, delay, triggered]);

  if (!triggered || !isStarted) {
    return <span className={className} dangerouslySetInnerHTML={{ __html: '&nbsp;' }} />;
  }

  return <span className={className}>{displayText || '\u00A0'}</span>;
};
