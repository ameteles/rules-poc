import promotions from "./promotions";

import Enuns from "./Enuns";

const rules: any[] = [];

//trás ordenado do menor para o maior
const getRules = () => {
  return rules.sort((current, next) => current.priority - next.priority);
};

//preenche o array de rules com a função e array de parametros necessários
const setRules = (priority: number, rule: any, params: any) => {
  rules.push({ priority, rule: rule.bind(params) });
};

// carrega do objeto json
promotions.map((promotion) =>
  setRules(promotion.priority, Enuns[promotion.type], promotion.params)
);

export default { setRules, getRules };
