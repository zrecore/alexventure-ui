/* tslint:disable */

declare var Object: any;
export interface ServiceInterface {
  currency: any;
  requires_subscription: boolean;
  name: string;
  description: string;
  terms: string;
  price_per_unit: number;
  unit_of_measure: string;
  unit_amount: number;
  is_on_site: string;
  is_available: string;
  available_date?: Date;
}

export class Service implements ServiceInterface {
  currency: any;
  requires_subscription: boolean;
  name: string;
  description: string;
  terms: string;
  price_per_unit: number;
  unit_of_measure: string;
  unit_amount: number;
  is_on_site: string;
  is_available: string;
  available_date: Date;
  constructor(data?: ServiceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Service`.
   */
  public static getModelName() {
    return "Service";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Service for dynamic purposes.
  **/
  public static factory(data: ServiceInterface): Service{
    return new Service(data);
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
      name: 'Service',
      plural: 'Services',
      properties: {
        currency: {
          name: 'currency',
          type: 'any'
        },
        requires_subscription: {
          name: 'requires_subscription',
          type: 'boolean'
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
        price_per_unit: {
          name: 'price_per_unit',
          type: 'number'
        },
        unit_of_measure: {
          name: 'unit_of_measure',
          type: 'string'
        },
        unit_amount: {
          name: 'unit_amount',
          type: 'number'
        },
        is_on_site: {
          name: 'is_on_site',
          type: 'string'
        },
        is_available: {
          name: 'is_available',
          type: 'string'
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
