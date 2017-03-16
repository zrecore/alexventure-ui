/* tslint:disable */

declare var Object: any;
export interface OrderCouponInterface {
  order?: any;
  coupon?: any;
}

export class OrderCoupon implements OrderCouponInterface {
  order: any;
  coupon: any;
  constructor(data?: OrderCouponInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `OrderCoupon`.
   */
  public static getModelName() {
    return "OrderCoupon";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of OrderCoupon for dynamic purposes.
  **/
  public static factory(data: OrderCouponInterface): OrderCoupon{
    return new OrderCoupon(data);
  }  
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'OrderCoupon',
      plural: 'OrderCoupons',
      properties: {
        order: {
          name: 'order',
          type: 'any'
        },
        coupon: {
          name: 'coupon',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
