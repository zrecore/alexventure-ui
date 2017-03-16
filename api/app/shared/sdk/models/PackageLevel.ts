/* tslint:disable */

declare var Object: any;
export interface PackageLevelInterface {
  name: string;
  is_available: boolean;
  id?: any;
}

export class PackageLevel implements PackageLevelInterface {
  name: string;
  is_available: boolean;
  id: any;
  constructor(data?: PackageLevelInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PackageLevel`.
   */
  public static getModelName() {
    return "PackageLevel";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PackageLevel for dynamic purposes.
  **/
  public static factory(data: PackageLevelInterface): PackageLevel{
    return new PackageLevel(data);
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
      name: 'PackageLevel',
      plural: 'PackageLevels',
      properties: {
        name: {
          name: 'name',
          type: 'string'
        },
        is_available: {
          name: 'is_available',
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
