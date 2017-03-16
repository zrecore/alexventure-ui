/* tslint:disable */

declare var Object: any;
export interface CurrencyInterface {
  code?: string;
  name?: string;
  is_default?: boolean;
  id?: any;
}

export class Currency implements CurrencyInterface {
  code: string;
  name: string;
  is_default: boolean;
  id: any;
  constructor(data?: CurrencyInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Currency`.
   */
  public static getModelName() {
    return "Currency";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Currency for dynamic purposes.
  **/
  public static factory(data: CurrencyInterface): Currency{
    return new Currency(data);
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
      name: 'Currency',
      plural: 'Currencies',
      properties: {
        code: {
          name: 'code',
          type: 'string'
        },
        name: {
          name: 'name',
          type: 'string'
        },
        is_default: {
          name: 'is_default',
          type: 'boolean'
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
