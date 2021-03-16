import RuleService from "./UseCases/Rules";
import { CartInterface, PromotionInterface } from "./Interfaces/IRules";
import Enuns from "./Enuns/PromotionEnum";
import promotions from "./promotions.json";
import barCodeReadCart from "./Fake/AmePayment/BarCodeReadCart";
class Promotions {
  private ruleService = new RuleService();

  public applyPromotions = (cart: CartInterface) => {
    const carts: CartInterface[] = [];

    const allRules = this.ruleService.getRules();

    allRules.map(({ rule }) => {
      carts.push(rule.execute(Object.assign({}, cart)));
    });
    if (carts.length == 0) {
      return cart;
    }
    return carts.sort((first, next) => first.total - next.total)[0];
  };

  // carrega as regras apartir de determinado parametros que seguem a interface
  public loadPromotions = (promotions: PromotionInterface[]) => {
    this.ruleService.resetRules();
    promotions.map((promotion) =>
      this.ruleService.setRules(
        promotion.priority,
        Enuns[promotion.type],
        promotion.params
      )
    );
  };
}
//escolhe a melhor promoção para o determinado carrinho example

const promotion = new Promotions();

//remover caso use como package
promotion.loadPromotions(promotions);

console.log(promotion.applyPromotions(barCodeReadCart));

export { Promotions };
