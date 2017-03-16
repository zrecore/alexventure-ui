/* tslint:disable */

declare var Object: any;
export interface OrderSubscriptionInterface {
  order: any;
  subscription: any;
  subscription_price: number;
  subscription_start_date: Date;
  subscription_end_date: Date;
}

export class OrderSubscription implements OrderSubscriptionInterface {
  order: any;
  subscription: any;
  subscription_price: number;
  subscription_start_date: Date;
  subscription_end_date: Date;
  constructor(data?: OrderSubscriptionInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `OrderSubscription`.
   */
  public static getModelName() {
    return "OrderSubscription";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of OrderSubscription for dynamic purposes.
  **/
  public static factory(data: OrderSubscriptionInterface): OrderSubscription{
    return new OrderSubscription(data);
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
      name: 'OrderSubscription',
      plural: 'OrderSubscriptions',
      properties: {
        order: {
          name: 'order',
          type: 'any'
        },
        subscription: {
          name: 'subscription',
          type: 'any'
        },
        subscription_price: {
          name: 'subscription_price',
          type: 'number'
        },
        subscription_start_date: {
          name: 'subscription_start_date',
          type: 'Date'
        },
        subscription_end_date: {
          name: 'subscription_end_date',
          type: 'Date'
        },
      },
      relations: {
      }
    }
  }
}
