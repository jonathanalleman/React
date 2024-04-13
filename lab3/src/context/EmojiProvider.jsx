
import React, { createContext, useContext, useState } from 'react';

const EmojiContext = createContext();

export const useEmojiContext = () => {
  return useContext(EmojiContext);
};

export const EmojiProvider = ({ children }) => {
  const [emoji, setEmoji] = useState('\u{1F600}');

  const handlePunchInFace = () => {
    const newEmoji = emoji === '\u{1F600}' ? '\u{1F620}' : '\u{1F600}';
    setEmoji(newEmoji);
  };

  return (
    <EmojiContext.Provider value={{ emoji, handlePunchInFace }}>
      {children}
    </EmojiContext.Provider>
  );
};
