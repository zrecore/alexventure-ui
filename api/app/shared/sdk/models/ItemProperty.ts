/* tslint:disable */

declare var Object: any;
export interface ItemPropertyInterface {
  item: any;
  property: any;
}

export class ItemProperty implements ItemPropertyInterface {
  item: any;
  property: any;
  constructor(data?: ItemPropertyInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ItemProperty`.
   */
  public static getModelName() {
    return "ItemProperty";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ItemProperty for dynamic purposes.
  **/
  public static factory(data: ItemPropertyInterface): ItemProperty{
    return new ItemProperty(data);
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
      name: 'ItemProperty',
      plural: 'ItemProperties',
      properties: {
        item: {
          name: 'item',
          type: 'any'
        },
        property: {
          name: 'property',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
