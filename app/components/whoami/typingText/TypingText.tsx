
'use client';

import { useEffect, useRef, useState } from 'react';
import * as motion from "motion/react-client";

interface TypingTextProps {
  text: string;
  speed?: number; // milisegundos por letra
  className?: string;
}

export default function TypingText({ text, speed = 500, className = '' }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Se activa cuando el 10% del componente es visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let i = 0;
    const interval = setInterval(() => {
      const currentChar = text[i];  // ← guarda el carácter actual
      setDisplayedText((prev) => prev + currentChar);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [isVisible, text, speed]);


  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: {duration: 0.8}  }}      
      className={className}
      ref={ref}
    >
      {displayedText}
      <motion.span
        className="inline-block w-[1px] h-[1em] bg-white ml-1 animate-blink"
        key={displayedText.length}
        animate={{ opacity: [0.3, 1, 0] }}
        transition={{ duration: 1 }}
      >|
        </motion.span>
    </motion.span>
  );
}
