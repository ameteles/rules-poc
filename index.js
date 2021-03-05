const Rules = require("./src/Rules");

const cart = require("./src/misc/cart")();

const rules = Rules.getRules();

// console.log(rules);
rules.map(({ rule }) => {
  console.log(rule(cart));
});
