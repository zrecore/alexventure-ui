/* tslint:disable */

declare var Object: any;
export interface SubscriptionPackageLevelInterface {
  subscription: any;
  package_level: any;
}

export class SubscriptionPackageLevel implements SubscriptionPackageLevelInterface {
  subscription: any;
  package_level: any;
  constructor(data?: SubscriptionPackageLevelInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SubscriptionPackageLevel`.
   */
  public static getModelName() {
    return "SubscriptionPackageLevel";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SubscriptionPackageLevel for dynamic purposes.
  **/
  public static factory(data: SubscriptionPackageLevelInterface): SubscriptionPackageLevel{
    return new SubscriptionPackageLevel(data);
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
      name: 'SubscriptionPackageLevel',
      plural: 'SubscriptionPackageLevels',
      properties: {
        subscription: {
          name: 'subscription',
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
