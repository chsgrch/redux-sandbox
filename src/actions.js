// --- Action creator ---
export const setInc = () => ({ type: "INC" });
export const setDec = () => ({ type: "DEC" });
export const setRnd = () => {
  return {
    type: "RND",
    rndValue: Math.floor(Math.random() * 10),
  };
};
