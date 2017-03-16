/* tslint:disable */

declare var Object: any;
export interface OrderServiceInterface {
  order: any;
  service: any;
  price: number;
  units: number;
  start_date: Date;
  end_date: Date;
}

export class OrderService implements OrderServiceInterface {
  order: any;
  service: any;
  price: number;
  units: number;
  start_date: Date;
  end_date: Date;
  constructor(data?: OrderServiceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `OrderService`.
   */
  public static getModelName() {
    return "OrderService";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of OrderService for dynamic purposes.
  **/
  public static factory(data: OrderServiceInterface): OrderService{
    return new OrderService(data);
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
      name: 'OrderService',
      plural: 'OrderServices',
      properties: {
        order: {
          name: 'order',
          type: 'any'
        },
        service: {
          name: 'service',
          type: 'any'
        },
        price: {
          name: 'price',
          type: 'number'
        },
        units: {
          name: 'units',
          type: 'number'
        },
        start_date: {
          name: 'start_date',
          type: 'Date'
        },
        end_date: {
          name: 'end_date',
          type: 'Date'
        },
      },
      relations: {
      }
    }
  }
}
