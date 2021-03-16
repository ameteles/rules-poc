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
            if (product.quantity >= this.minQuantity)
              cart.discount = this.discountByPercentage;
            return cart;
          });
      return cart;
    }
  }
}

export { CashBackByRateQuantity };
