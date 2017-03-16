/* tslint:disable */

declare var Object: any;
export interface PropertyInterface {
  name?: string;
  property_type?: any;
  id?: any;
}

export class Property implements PropertyInterface {
  name: string;
  property_type: any;
  id: any;
  constructor(data?: PropertyInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Property`.
   */
  public static getModelName() {
    return "Property";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Property for dynamic purposes.
  **/
  public static factory(data: PropertyInterface): Property{
    return new Property(data);
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
      name: 'Property',
      plural: 'Properties',
      properties: {
        name: {
          name: 'name',
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
