/* tslint:disable */

declare var Object: any;
export interface OrderStatusInterface {
  change_date: Date;
  status?: any;
  order?: any;
}

export class OrderStatus implements OrderStatusInterface {
  change_date: Date;
  status: any;
  order: any;
  constructor(data?: OrderStatusInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `OrderStatus`.
   */
  public static getModelName() {
    return "OrderStatus";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of OrderStatus for dynamic purposes.
  **/
  public static factory(data: OrderStatusInterface): OrderStatus{
    return new OrderStatus(data);
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
      name: 'OrderStatus',
      plural: 'OrderStatuses',
      properties: {
        change_date: {
          name: 'change_date',
          type: 'Date'
        },
        status: {
          name: 'status',
          type: 'any'
        },
        order: {
          name: 'order',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
