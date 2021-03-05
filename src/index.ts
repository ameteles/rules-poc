import Rules from "./Rules";

import cart from "./misc/cart";

// console.log(cart);

const rules = Rules.getRules();

// console.log(rules);
rules.map(({ rule }) => {
  console.log(rule(cart));
});
