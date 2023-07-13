import { useEffect, useState } from "react";

const useType: (
  text: string,
  typingSpeed: number,
  maxCharacters?: number
) => { typedText: string; isTypingComplete: boolean } = (
  text,
  typingSpeed = 100,
  maxCharacters
) => {
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    setIsTypingComplete(false);
    setTypedText("");

    const typingInterval = setInterval(() => {
      currentText += maxCharacters
        ? text?.slice(0, maxCharacters)[currentIndex]
        : text[currentIndex];
      setTypedText(currentText);

      currentIndex++;

      if (
        currentIndex ===
        (maxCharacters ? text?.slice(0, maxCharacters) : text).length
      ) {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [text, typingSpeed]);

  return { typedText, isTypingComplete };
};

export default useType;
