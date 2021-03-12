import RuleService from "./Rules";
import { CartInterface, PromotionInterface } from "./Interfaces";
import Enuns from "./Enuns/PromotionEnum";
import promotions from "./promotions.json";
import barCodeReadCart from "./Fake/AmePayment/BarCodeReadCart";
const ruleService = new RuleService();

//escolhe a melhor promoção para o determinado carrinho example
const applyPromotions = (cart: CartInterface) => {
  const carts: CartInterface[] = [];

  const allRules = ruleService.getRules();

  allRules.map(({ rule }) => {
    carts.push(rule(Object.assign({}, cart)));
  });
  if (carts.length == 0) {
    return cart;
  }
  return carts.sort((first, next) => first.total - next.total)[0];
};

// carrega as regras apartir de determinado parametros que seguem a interface
const loadPromotions = (promotions: PromotionInterface[]) => {
  ruleService.resetRules();
  promotions.map((promotion) =>
    ruleService.setRules(
      promotion.priority,
      Enuns[promotion.type],
      promotion.params
    )
  );
};

//remover caso use como package
// loadPromotions(promotions);

// console.log(applyPromotions(barCodeReadCart));

export default applyPromotions;

export { loadPromotions, applyPromotions };
