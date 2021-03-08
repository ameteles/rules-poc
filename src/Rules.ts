import promotions from "./promotions";

import Enuns from "./Enuns/PromotionEnum";
import { RulesInterface } from "./Interfaces/index";

class Rules {
  private rules: RulesInterface[] = [];

  constructor() {
    // carrega do objeto json
    promotions.map((promotion) =>
      this.setRules(promotion.priority, Enuns[promotion.type], promotion.params)
    );
  }

  //trás ordenado do menor para o maior
  public getRules = () => {
    return this.rules.sort((current, next) => current.priority - next.priority);
  };

  //preenche o array de rules com a função e array de parametros necessários
  public setRules = (priority: number, rule: Function, params: any) => {
    this.rules.push({ priority, rule: rule.bind(params) });
  };
}

export default new Rules();
