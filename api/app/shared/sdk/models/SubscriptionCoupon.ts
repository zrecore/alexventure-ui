/* tslint:disable */

declare var Object: any;
export interface SubscriptionCouponInterface {
  subscription: any;
  coupon: any;
}

export class SubscriptionCoupon implements SubscriptionCouponInterface {
  subscription: any;
  coupon: any;
  constructor(data?: SubscriptionCouponInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SubscriptionCoupon`.
   */
  public static getModelName() {
    return "SubscriptionCoupon";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SubscriptionCoupon for dynamic purposes.
  **/
  public static factory(data: SubscriptionCouponInterface): SubscriptionCoupon{
    return new SubscriptionCoupon(data);
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
      name: 'SubscriptionCoupon',
      plural: 'SubscriptionCoupons',
      properties: {
        subscription: {
          name: 'subscription',
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
