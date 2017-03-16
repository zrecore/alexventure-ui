/* tslint:disable */

declare var Object: any;
export interface ItemInterface {
  price: number;
  currency: any;
  name: string;
  sku: string;
  slug: string;
  description: string;
  availability_date: Date;
  category: any;
  max_purchase_amount?: number;
  metric_unit_of_measure?: string;
  metric_width?: number;
  metric_height?: number;
  metric_depth?: number;
  finite_amount_available?: number;
  finite_unit_of_measure?: string;
  min_purchase_amount?: string;
  perishable_date?: Date;
  weight?: number;
  weight_unit_of_measure?: string;
  is_available: boolean;
  is_finite: boolean;
  is_perishable: boolean;
  is_tangible: boolean;
}

export class Item implements ItemInterface {
  price: number;
  currency: any;
  name: string;
  sku: string;
  slug: string;
  description: string;
  availability_date: Date;
  category: any;
  max_purchase_amount: number;
  metric_unit_of_measure: string;
  metric_width: number;
  metric_height: number;
  metric_depth: number;
  finite_amount_available: number;
  finite_unit_of_measure: string;
  min_purchase_amount: string;
  perishable_date: Date;
  weight: number;
  weight_unit_of_measure: string;
  is_available: boolean;
  is_finite: boolean;
  is_perishable: boolean;
  is_tangible: boolean;
  constructor(data?: ItemInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Item`.
   */
  public static getModelName() {
    return "Item";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Item for dynamic purposes.
  **/
  public static factory(data: ItemInterface): Item{
    return new Item(data);
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
      name: 'Item',
      plural: 'Items',
      properties: {
        price: {
          name: 'price',
          type: 'number'
        },
        currency: {
          name: 'currency',
          type: 'any'
        },
        name: {
          name: 'name',
          type: 'string'
        },
        sku: {
          name: 'sku',
          type: 'string'
        },
        slug: {
          name: 'slug',
          type: 'string'
        },
        description: {
          name: 'description',
          type: 'string'
        },
        availability_date: {
          name: 'availability_date',
          type: 'Date'
        },
        category: {
          name: 'category',
          type: 'any'
        },
        max_purchase_amount: {
          name: 'max_purchase_amount',
          type: 'number'
        },
        metric_unit_of_measure: {
          name: 'metric_unit_of_measure',
          type: 'string'
        },
        metric_width: {
          name: 'metric_width',
          type: 'number'
        },
        metric_height: {
          name: 'metric_height',
          type: 'number'
        },
        metric_depth: {
          name: 'metric_depth',
          type: 'number'
        },
        finite_amount_available: {
          name: 'finite_amount_available',
          type: 'number'
        },
        finite_unit_of_measure: {
          name: 'finite_unit_of_measure',
          type: 'string'
        },
        min_purchase_amount: {
          name: 'min_purchase_amount',
          type: 'string'
        },
        perishable_date: {
          name: 'perishable_date',
          type: 'Date'
        },
        weight: {
          name: 'weight',
          type: 'number'
        },
        weight_unit_of_measure: {
          name: 'weight_unit_of_measure',
          type: 'string'
        },
        is_available: {
          name: 'is_available',
          type: 'boolean'
        },
        is_finite: {
          name: 'is_finite',
          type: 'boolean'
        },
        is_perishable: {
          name: 'is_perishable',
          type: 'boolean'
        },
        is_tangible: {
          name: 'is_tangible',
          type: 'boolean'
        },
      },
      relations: {
      }
    }
  }
}
