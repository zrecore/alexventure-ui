/* tslint:disable */

declare var Object: any;
export interface SubscriptionInterface {
  currency: any;
  name: string;
  description: string;
  terms: string;
  signup_fee_amount: string;
  is_recurring: boolean;
  recurs_every_amount?: number;
  recurs_every_unit?: string;
  recurs_max_amount?: number;
  price_per_unit: number;
  is_available: boolean;
  available_date?: Date;
}

export class Subscription implements SubscriptionInterface {
  currency: any;
  name: string;
  description: string;
  terms: string;
  signup_fee_amount: string;
  is_recurring: boolean;
  recurs_every_amount: number;
  recurs_every_unit: string;
  recurs_max_amount: number;
  price_per_unit: number;
  is_available: boolean;
  available_date: Date;
  constructor(data?: SubscriptionInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Subscription`.
   */
  public static getModelName() {
    return "Subscription";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Subscription for dynamic purposes.
  **/
  public static factory(data: SubscriptionInterface): Subscription{
    return new Subscription(data);
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
      name: 'Subscription',
      plural: 'Subscriptions',
      properties: {
        currency: {
          name: 'currency',
          type: 'any'
        },
        name: {
          name: 'name',
          type: 'string'
        },
        description: {
          name: 'description',
          type: 'string'
        },
        terms: {
          name: 'terms',
          type: 'string'
        },
        signup_fee_amount: {
          name: 'signup_fee_amount',
          type: 'string'
        },
        is_recurring: {
          name: 'is_recurring',
          type: 'boolean'
        },
        recurs_every_amount: {
          name: 'recurs_every_amount',
          type: 'number'
        },
        recurs_every_unit: {
          name: 'recurs_every_unit',
          type: 'string'
        },
        recurs_max_amount: {
          name: 'recurs_max_amount',
          type: 'number'
        },
        price_per_unit: {
          name: 'price_per_unit',
          type: 'number'
        },
        is_available: {
          name: 'is_available',
          type: 'boolean'
        },
        available_date: {
          name: 'available_date',
          type: 'Date'
        },
      },
      relations: {
      }
    }
  }
}
