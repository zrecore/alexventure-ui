/* tslint:disable */

declare var Object: any;
export interface CouponInterface {
  start_date?: Date;
  end_date?: string;
  code: string;
  id?: any;
}

export class Coupon implements CouponInterface {
  start_date: Date;
  end_date: string;
  code: string;
  id: any;
  constructor(data?: CouponInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Coupon`.
   */
  public static getModelName() {
    return "Coupon";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Coupon for dynamic purposes.
  **/
  public static factory(data: CouponInterface): Coupon{
    return new Coupon(data);
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
      name: 'Coupon',
      plural: 'Coupons',
      properties: {
        start_date: {
          name: 'start_date',
          type: 'Date'
        },
        end_date: {
          name: 'end_date',
          type: 'string'
        },
        code: {
          name: 'code',
          type: 'string'
        },
        id: {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
