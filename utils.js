export const toSentenceCase = (str) => {
  // Convert the string to lowercase and split it into an array of words
  const words = str.toLowerCase().split(" ");

  // Capitalize the first letter of each word and join them back into a sentence
  const sentence = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Capitalize the first letter of the sentence and return it
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
};
