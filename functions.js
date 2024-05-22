const { database } = require("./database.js");

const grandParentGreetingMaker = () => {
  // generating random indices
  const adjectiveIndex = Math.floor(Math.random() * database.firstNames.length);
  const nounIndex = Math.floor(Math.random() * database.lastNames.length);
  const phraseIndex = Math.floor(Math.random() * database.phrases.length);

  // get random first and last names
  const adjective = database.firstNames[adjectiveIndex];
  const noun = database.lastNames[nounIndex];
  const phrase = database.phrases[phraseIndex];

  // concatenated random strings
  const nickname = `${phrase} ${adjective} ${noun}!`;

  return nickname;
};

const embarrassingQuestionsMaker = () => {
  const situationIndex = Math.floor(Math.random() * database.situations.length);
  const situation = database.situations[situationIndex];
  const embarrassingSituation = `How is your ${situation}? \nI heard you were stressed about that.`;

  return embarrassingSituation;
};



const matchMaker = (gender) => {
  const maleSoulmateIndex = Math.floor(
    Math.random() * database.maleSoulmates.length
  );
  const maleSoulmate = database.maleSoulmates[maleSoulmateIndex];
  const femaleSoulmateIndex = Math.floor(
    Math.random() * database.femaleSoulmates.length
  );
  const femaleSoulmate = database.femaleSoulmates[femaleSoulmateIndex];
  const soulmateLocationIndex = Math.floor(
    Math.random() * database.soulmateLocations.length
  );
  const soulmateLocation = database.soulmateLocations[soulmateLocationIndex];

  if (gender === "male") {
    console.log(`You are NOT gonna believe who I ran into...it was your ex!`);
    console.log(
      `THAT's RIGHT!! I ran into ${maleSoulmate} at ${soulmateLocation}, and I gave her your new number.`
    );
    console.log(`She said she couldn't reach you. Can you believe that?!`);
    console.log(
      `She must have not known you got a new phone number after y'all broke up. Poor thing.`
    );
    console.log(
      `I hope it goes well this 5th time around, I WANT GRANDCHILDREN!!!`
    );
  } else if (gender === "female") {
    console.log(`You are NOT gonna believe who I ran into...it was your ex!`);
    console.log(
      `THAT's RIGHT!! I ran into ${femaleSoulmate} at ${soulmateLocation}, and I gave him your new number.`
    );
    console.log(`He said he couldn't reach you. Can you believe that?!`);
    console.log(
      `He must have not known you got a new phone number after y'all broke up. Poor thing.`
    );
    console.log(
      `I hope it goes well this 5th time around, I WANT GRANDCHILDREN!!!`
    );
  }
};

module.exports = {
  grandParentGreetingMaker,
  embarrassingQuestionsMaker,
  matchMaker,
};
