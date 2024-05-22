// import statements
const {
  grandParentGreetingMaker,
  embarrassingQuestionsMaker,
  matchMaker,
  gender,
} = require("./functions");
const { grandpa } = require("./asciArt");

// logic
console.log(grandpa);
console.log(grandParentGreetingMaker());
console.log("-------------------------------------------------");
console.log(embarrassingQuestionsMaker());
console.log("-------------------------------------------------");
matchMaker("female");
