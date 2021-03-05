const promotions = require("../promotions.json");
const Enuns = require("./Enuns");

const rules = [];

//trás ordenado do menor para o maior
const getRules = () => {
  return rules.sort((current, next) => current.priority - next.priority);
};

//preenche o array de rules com a função e array de parametros necessários
const setRules = (priority, rule, params) => {
  rules.push({ priority, rule: rule.bind(params) });
};

// carrega do objeto json
promotions.map((promotion) =>
  setRules(promotion.priority, Enuns[promotion.type], promotion.params)
);

module.exports = { setRules, getRules };
