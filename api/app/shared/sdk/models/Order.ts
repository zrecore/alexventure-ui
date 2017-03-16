/* tslint:disable */

declare var Object: any;
export interface OrderInterface {
  amount_total: number;
  ip: string;
  order_date: Date;
  email: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  phone1: string;
  phone2?: string;
  notes?: string;
  created_by?: any;
  modified_by?: any;
  currency: any;
  merchant_data?: string;
  merchant_gateway?: any;
  id?: any;
}

export class Order implements OrderInterface {
  amount_total: number;
  ip: string;
  order_date: Date;
  email: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  phone1: string;
  phone2: string;
  notes: string;
  created_by: any;
  modified_by: any;
  currency: any;
  merchant_data: string;
  merchant_gateway: any;
  id: any;
  constructor(data?: OrderInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Order`.
   */
  public static getModelName() {
    return "Order";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Order for dynamic purposes.
  **/
  public static factory(data: OrderInterface): Order{
    return new Order(data);
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
      name: 'Order',
      plural: 'Orders',
      properties: {
        amount_total: {
          name: 'amount_total',
          type: 'number'
        },
        ip: {
          name: 'ip',
          type: 'string'
        },
        order_date: {
          name: 'order_date',
          type: 'Date'
        },
        email: {
          name: 'email',
          type: 'string'
        },
        address1: {
          name: 'address1',
          type: 'string'
        },
        address2: {
          name: 'address2',
          type: 'string'
        },
        city: {
          name: 'city',
          type: 'string'
        },
        state: {
          name: 'state',
          type: 'string'
        },
        postal_code: {
          name: 'postal_code',
          type: 'string'
        },
        country: {
          name: 'country',
          type: 'string'
        },
        phone1: {
          name: 'phone1',
          type: 'string'
        },
        phone2: {
          name: 'phone2',
          type: 'string'
        },
        notes: {
          name: 'notes',
          type: 'string'
        },
        created_by: {
          name: 'created_by',
          type: 'any'
        },
        modified_by: {
          name: 'modified_by',
          type: 'any'
        },
        currency: {
          name: 'currency',
          type: 'any'
        },
        merchant_data: {
          name: 'merchant_data',
          type: 'string'
        },
        merchant_gateway: {
          name: 'merchant_gateway',
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
