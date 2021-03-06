"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotions = void 0;
const Rules_1 = __importDefault(require("./UseCases/Rules"));
const PromotionEnum_1 = __importDefault(require("./Enuns/PromotionEnum"));
class Promotions {
    constructor() {
        this.ruleService = new Rules_1.default();
        this.applyPromotions = (cart) => {
            const carts = [];
            const allRules = this.ruleService.getRules();
            allRules.map(({ rule }) => {
                carts.push(rule.execute(Object.assign({}, cart)));
            });
            if (carts.length == 0) {
                return cart;
            }
            return carts.sort((first, next) => first.total - next.total)[0];
        };
        this.loadPromotions = (promotions) => {
            this.ruleService.resetRules();
            promotions.map((promotion) => this.ruleService.setRules(promotion.priority, PromotionEnum_1.default[promotion.type], promotion.params));
        };
    }
}
exports.Promotions = Promotions;
//# sourceMappingURL=index.js.map