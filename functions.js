const { database } = require("./database.js");

const nicknameMaker = () => {
  // generating random indices
  const adjectiveIndex = Math.floor(Math.random() * database.firstNames.length);
  const nounIndex = Math.floor(Math.random() * database.lastNames.length);
  const phraseIndex = Math.floor(Math.random() * database.phrases.length);

  // get random first and last names
  const adjective = database.firstNames[adjectiveIndex];
  const noun = database.lastNames[nounIndex];
  const phrase = database.phrases[phraseIndex];

  // concatenated random strings
  const nickname = `${phrase} ${adjective} ${noun}`;

  return nickname;
};

module.exports = { nicknameMaker };
