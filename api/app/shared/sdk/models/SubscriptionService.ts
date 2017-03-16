/* tslint:disable */

declare var Object: any;
export interface SubscriptionServiceInterface {
  subscription: any;
  service: any;
}

export class SubscriptionService implements SubscriptionServiceInterface {
  subscription: any;
  service: any;
  constructor(data?: SubscriptionServiceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SubscriptionService`.
   */
  public static getModelName() {
    return "SubscriptionService";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SubscriptionService for dynamic purposes.
  **/
  public static factory(data: SubscriptionServiceInterface): SubscriptionService{
    return new SubscriptionService(data);
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
      name: 'SubscriptionService',
      plural: 'SubscriptionServices',
      properties: {
        subscription: {
          name: 'subscription',
          type: 'any'
        },
        service: {
          name: 'service',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
