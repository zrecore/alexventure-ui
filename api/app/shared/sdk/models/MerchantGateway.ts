/* tslint:disable */

declare var Object: any;
export interface MerchantGatewayInterface {
  is_default?: boolean;
  name: string;
  class: string;
  id?: any;
}

export class MerchantGateway implements MerchantGatewayInterface {
  is_default: boolean;
  name: string;
  class: string;
  id: any;
  constructor(data?: MerchantGatewayInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MerchantGateway`.
   */
  public static getModelName() {
    return "MerchantGateway";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MerchantGateway for dynamic purposes.
  **/
  public static factory(data: MerchantGatewayInterface): MerchantGateway{
    return new MerchantGateway(data);
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
      name: 'MerchantGateway',
      plural: 'MerchantGateways',
      properties: {
        is_default: {
          name: 'is_default',
          type: 'boolean'
        },
        name: {
          name: 'name',
          type: 'string'
        },
        class: {
          name: 'class',
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
