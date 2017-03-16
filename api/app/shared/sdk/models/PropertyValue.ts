/* tslint:disable */

declare var Object: any;
export interface PropertyValueInterface {
  value: string;
  property_type?: any;
  id?: any;
}

export class PropertyValue implements PropertyValueInterface {
  value: string;
  property_type: any;
  id: any;
  constructor(data?: PropertyValueInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PropertyValue`.
   */
  public static getModelName() {
    return "PropertyValue";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PropertyValue for dynamic purposes.
  **/
  public static factory(data: PropertyValueInterface): PropertyValue{
    return new PropertyValue(data);
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
      name: 'PropertyValue',
      plural: 'PropertyValues',
      properties: {
        value: {
          name: 'value',
          type: 'string'
        },
        property_type: {
          name: 'property_type',
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
