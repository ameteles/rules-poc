"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleService = void 0;
class RuleService {
    constructor() {
        this.rules = [];
        this.getRules = () => {
            return this.rules;
        };
        this.resetRules = () => (this.rules.length = 0);
        this.setRules = (priority, Rule, params) => {
            this.rules.push({ priority, rule: new Rule(params) });
        };
    }
}
exports.RuleService = RuleService;
exports.default = RuleService;
//# sourceMappingURL=Rules.js.map