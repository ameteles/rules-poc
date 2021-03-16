import moment from "moment";
import { CartInterface, ClassRuleInterface } from "../../Interfaces/IRules";

class CashBackByRateQuantity implements ClassRuleInterface {
  private stores: string[];
  private departmentCodes: string[];
  private productEans: string[];
  private externalCodes: string[];
  private startDate: string;
  private endDate: string;
  private minQuantity: number;
  private discountByPercentage: number;

  constructor(props: Omit<CashBackByRateQuantity, "execute">) {
    Object.assign(this, props);
  }

  // conditions
  execute(cart: CartInterface) {
    const now = moment.utc();
    if (now.isBetween(this.startDate, this.endDate)) {
      if (this.stores.includes(cart.store))
        if (!cart.flags.includes("service"))
          cart.products.map((product) => {
            if (
              this.productEans.includes(product.product.ean) &&
              product.quantity >= this.minQuantity
            ) {
              const cashback = Number(
                (
                  product.price *
                  product.quantity *
                  this.discountByPercentage
                ).toFixed(2)
              );

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

export { CashBackByRateQuantity };
