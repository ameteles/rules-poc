import moment from "moment";

function cashBackByQuantity(cart: any) {
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
        if (cart.products.length >= this.minQuantity) {
          // then

          cart.discount = this.discountByPercentage;
          return cart;
        }
  }
}

export default cashBackByQuantity;
