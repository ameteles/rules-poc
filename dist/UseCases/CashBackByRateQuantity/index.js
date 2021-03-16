"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashBackByRateQuantity = void 0;
const moment_1 = __importDefault(require("moment"));
class CashBackByRateQuantity {
    constructor(props) {
        Object.assign(this, props);
    }
    execute(cart) {
        const now = moment_1.default.utc();
        if (now.isBetween(this.startDate, this.endDate)) {
            if (this.stores.includes(cart.store))
                if (!cart.flags.includes("service"))
                    cart.products.map((product) => {
                        if (this.productEans.includes(product.product.ean) &&
                            product.quantity >= this.minQuantity) {
                            const cashback = Number((product.price *
                                product.quantity *
                                this.discountByPercentage).toFixed(2));
                            product.cashback = cashback;
                            product.cashbackInfo.burnt.cashback = 0;
                            product.cashbackInfo.burnt.quantity = 0;
                            product.cashbackInfo.modality.cashback = this.discountByPercentage;
                            product.cashbackInfo.modality.quantity = product.quantity;
                            cart.totalCashbackAmount += cashback;
                        }
                        return cart;
                    });
            return cart;
        }
    }
}
exports.CashBackByRateQuantity = CashBackByRateQuantity;
//# sourceMappingURL=index.js.map