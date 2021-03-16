"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashBackByRateQuantity = void 0;
const moment_1 = __importDefault(require("moment"));
function CashBackByRateQuantity(cart) {
    const now = moment_1.default.utc();
    if (now.isBetween(this.startDate, this.endDate)) {
        if (this.stores.includes(cart.store))
            if (!cart.flags.includes("service"))
                cart.products.map((product) => {
                    if (product.quantity >= this.minQuantity)
                        cart.discount = this.discountByPercentage;
                    return cart;
                });
        return cart;
    }
}
exports.CashBackByRateQuantity = CashBackByRateQuantity;
//# sourceMappingURL=index.js.map