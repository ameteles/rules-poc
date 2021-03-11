"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyPromotions = exports.loadPromotions = void 0;
const Rules_1 = __importDefault(require("./Rules"));
const PromotionEnum_1 = __importDefault(require("./Enuns/PromotionEnum"));
const ruleService = new Rules_1.default();
const applyPromotions = (cart) => {
    const carts = [];
    ruleService.getRules().map(({ rule }) => carts.push(rule(cart)));
    return carts.sort((first, next) => first.total - next.total)[0];
};
exports.applyPromotions = applyPromotions;
const loadPromotions = (promotions) => {
    promotions.map((promotion) => ruleService.setRules(promotion.priority, PromotionEnum_1.default[promotion.type], promotion.params));
};
exports.loadPromotions = loadPromotions;
exports.default = applyPromotions;