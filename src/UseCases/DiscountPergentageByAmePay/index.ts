import moment from "moment";
import { CartInterface, ClassRuleInterface } from "../../Interfaces/IRules";

class DiscountPercentageByAmePay implements ClassRuleInterface {
  private stores: string[];
  private departmentCodes: string[];
  private productEans: string[];
  private externalCodes: string[];
  private startDate: string;
  private endDate: string;
  private discountByPercentage: number;

  constructor(props: Omit<DiscountPercentageByAmePay, "execute">) {
    Object.assign(this, props);
  }

  // condições
  public execute(cart: CartInterface) {
    //verifica se a promoção esta no intervalo
    if (
      moment.utc().isBetween(new Date(this.startDate), new Date(this.endDate))
    ) {
      //   verifica se a loja está na lista de promoção
      if (this.stores.includes(cart.store))
        if (
          !cart.flags.includes("service") && //  verifica se não é um serviço e se no meio de pagamento contem AME_DIGITAL
          (cart.selectedPayments.includes("AME_DIGITAL") ||
            cart.selectedPayments.find(
              (element: any) => element?.name == "AME_DIGITAL"
            ))
        )
          cart.products.map((product) => {
            // verifica os eans dos produtos que são passivos da promoção
            if (this.productEans.includes(product.product.ean)) {
              //constante do desconto do produto
              const discount = Number(
                (
                  product.price *
                  product.quantity *
                  this.discountByPercentage
                ).toFixed(2)
              );

              // adiciona o array de desconto com o type dele
              product.discountArray.push({
                message: "DISCOUNT_PERCENTAGE_BY_AME_PAY",
                value: discount,
                discountType: "VALUE",
                campaign: "DISCOUNT_PERCENTAGE_BY_AME_PAY",
              });

              // o desconto no produto é adicionado também
              product.discount = discount;
              // o desconto é incrementado no cart
              cart.discount += discount;
              // o total é reduzido do disconto dado
              cart.total = Number((cart.total - discount).toFixed(2));

              // não sei o motivo desse charges está mudando de number pra string
              cart.charges = Number(cart.charges).toFixed(2);
            }

            return product;
          });
      return cart;
    }
  }
}

// export default DiscountPercentageByAmePay;
export { DiscountPercentageByAmePay };
