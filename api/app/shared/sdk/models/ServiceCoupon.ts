/* tslint:disable */

declare var Object: any;
export interface ServiceCouponInterface {
  coupon: any;
  service: any;
}

export class ServiceCoupon implements ServiceCouponInterface {
  coupon: any;
  service: any;
  constructor(data?: ServiceCouponInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ServiceCoupon`.
   */
  public static getModelName() {
    return "ServiceCoupon";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ServiceCoupon for dynamic purposes.
  **/
  public static factory(data: ServiceCouponInterface): ServiceCoupon{
    return new ServiceCoupon(data);
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
      name: 'ServiceCoupon',
      plural: 'ServiceCoupons',
      properties: {
        coupon: {
          name: 'coupon',
          type: 'any'
        },
        service: {
          name: 'service',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
