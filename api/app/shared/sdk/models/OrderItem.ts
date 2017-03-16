/* tslint:disable */

declare var Object: any;
export interface OrderItemInterface {
  order?: any;
  item?: any;
  id?: any;
}

export class OrderItem implements OrderItemInterface {
  order: any;
  item: any;
  id: any;
  constructor(data?: OrderItemInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `OrderItem`.
   */
  public static getModelName() {
    return "OrderItem";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of OrderItem for dynamic purposes.
  **/
  public static factory(data: OrderItemInterface): OrderItem{
    return new OrderItem(data);
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
      name: 'OrderItem',
      plural: 'OrderItems',
      properties: {
        order: {
          name: 'order',
          type: 'any'
        },
        item: {
          name: 'item',
          type: 'any'
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
