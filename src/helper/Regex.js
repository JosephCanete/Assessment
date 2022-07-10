const onlyAlphabets = (word) => {
  return word.replace(/[^a-zA-Z ]/g, "");
};

export { onlyAlphabets };
