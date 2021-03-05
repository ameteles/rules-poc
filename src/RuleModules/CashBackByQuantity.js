const moment = require("moment");

function cashBackByQuantity(cart) {
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

// console.log(cashBackByQuantity);

module.exports = cashBackByQuantity;
