import { RulesInterface } from "./Interfaces/index";

class RuleService {
  private rules: RulesInterface[] = [];

  //trás ordenado do menor para o maior
  public getRules = () => {
    return this.rules;
  };

  //preenche o array de rules com a função e array de parametros necessários
  public setRules = (priority: number, rule: Function, params: any) => {
    this.rules.push({ priority, rule: rule.bind(params) });
  };
}

export default RuleService;
