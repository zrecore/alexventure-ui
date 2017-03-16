/* tslint:disable */

declare var Object: any;
export interface ItemCouponInterface {
  item: any;
  coupon: any;
}

export class ItemCoupon implements ItemCouponInterface {
  item: any;
  coupon: any;
  constructor(data?: ItemCouponInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ItemCoupon`.
   */
  public static getModelName() {
    return "ItemCoupon";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ItemCoupon for dynamic purposes.
  **/
  public static factory(data: ItemCouponInterface): ItemCoupon{
    return new ItemCoupon(data);
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
      name: 'ItemCoupon',
      plural: 'ItemCoupons',
      properties: {
        item: {
          name: 'item',
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
