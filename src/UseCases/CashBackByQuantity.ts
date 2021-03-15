import moment from "moment";
import { CartInterface } from "../Interfaces/IRules";

function CashBackByQuantity(cart: CartInterface) {
  // console.log(this);
  // this.stores
  // this.departmentCodes
  // this.productEans
  // this.externalCodes
  // this.startDate
  // this.endDate
  // this.minQuantity
  // this.discountByPercentage

  // conditions
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

export default CashBackByQuantity;
export { CashBackByQuantity };
