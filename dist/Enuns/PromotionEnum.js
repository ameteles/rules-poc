"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CashBackByQuantity_1 = __importDefault(require("../RuleModules/CashBackByQuantity"));
const DiscountPercentageByAmePay_1 = __importDefault(require("../RuleModules/DiscountPercentageByAmePay"));
const Enuns = {
    CASHBACK_BY_QUANTITY: CashBackByQuantity_1.default,
    DISCOUNT_PERCENTAGE_BY_AME_PAY: DiscountPercentageByAmePay_1.default,
};
exports.default = Enuns;
