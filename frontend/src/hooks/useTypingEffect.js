// src/hooks/useTypingEffect.js
import { useEffect, useState } from "react";

/**
 * Cycles through an array of strings with a typing/deleting animation.
 * @param {string[]} words
 * @param {number}   typeSpeed   - ms per character when typing
 * @param {number}   deleteSpeed - ms per character when deleting
 * @param {number}   pauseTime   - ms to pause after full word is typed
 */
export function useTypingEffect(
  words = [],
  typeSpeed = 80,
  deleteSpeed = 40,
  pauseTime = 2000,
) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pausing, setPausing] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const word = words[wordIndex % words.length];

    if (pausing) {
      const t = setTimeout(() => {
        setDeleting(true);
        setPausing(false);
      }, pauseTime);
      return () => clearTimeout(t);
    }

    if (!deleting) {
      // Typing
      if (charIndex < word.length) {
        const t = setTimeout(() => {
          setDisplayed(word.slice(0, charIndex + 1));
          setCharIndex((i) => i + 1);
        }, typeSpeed);
        return () => clearTimeout(t);
      } else {
        setPausing(true);
      }
    } else {
      // Deleting
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setDisplayed(word.slice(0, charIndex - 1));
          setCharIndex((i) => i - 1);
        }, deleteSpeed);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setWordIndex((i) => i + 1);
      }
    }
  }, [
    charIndex,
    deleting,
    pausing,
    wordIndex,
    words,
    typeSpeed,
    deleteSpeed,
    pauseTime,
  ]);

  return displayed;
}
