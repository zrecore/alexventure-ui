/* tslint:disable */

declare var Object: any;
export interface PropertyTypeInterface {
  type?: string;
  id?: any;
}

export class PropertyType implements PropertyTypeInterface {
  type: string;
  id: any;
  constructor(data?: PropertyTypeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PropertyType`.
   */
  public static getModelName() {
    return "PropertyType";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PropertyType for dynamic purposes.
  **/
  public static factory(data: PropertyTypeInterface): PropertyType{
    return new PropertyType(data);
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
      name: 'PropertyType',
      plural: 'PropertyTypes',
      properties: {
        type: {
          name: 'type',
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
