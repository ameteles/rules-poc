import Rules from "./Rules";

// import cart from "./Fake/cart";
import amePayEventCart from "./Fake/AmePayEventCart";
import { CartInterface } from "./Interfaces";

// console.log(cart);

//escolhe a melhor promoção para o determinado carrinho example
const applyRules = (cart: CartInterface) => {
  const carts: CartInterface[] = [];
  Rules.getRules().map(({ rule }) => carts.push(rule(cart)));
  return carts.sort((first, next) => first.total - next.total)[0];
};

// // console.log(rules);
// Rules.getRules().map(({ rule }) => {
//   // console.log(rule);
//   rule(amePayEventCart);
// });

// console.log(applyRules(amePayEventCart));

export default applyRules;
