/* tslint:disable */

declare var Object: any;
export interface ServicePackageLevelInterface {
  service: any;
  package_level: any;
}

export class ServicePackageLevel implements ServicePackageLevelInterface {
  service: any;
  package_level: any;
  constructor(data?: ServicePackageLevelInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ServicePackageLevel`.
   */
  public static getModelName() {
    return "ServicePackageLevel";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ServicePackageLevel for dynamic purposes.
  **/
  public static factory(data: ServicePackageLevelInterface): ServicePackageLevel{
    return new ServicePackageLevel(data);
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
      name: 'ServicePackageLevel',
      plural: 'ServicePackageLevels',
      properties: {
        service: {
          name: 'service',
          type: 'any'
        },
        package_level: {
          name: 'package_level',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
