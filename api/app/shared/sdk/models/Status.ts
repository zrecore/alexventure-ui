/* tslint:disable */

declare var Object: any;
export interface StatusInterface {
  value: string;
  id?: any;
}

export class Status implements StatusInterface {
  value: string;
  id: any;
  constructor(data?: StatusInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Status`.
   */
  public static getModelName() {
    return "Status";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Status for dynamic purposes.
  **/
  public static factory(data: StatusInterface): Status{
    return new Status(data);
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
      name: 'Status',
      plural: 'Statuses',
      properties: {
        value: {
          name: 'value',
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
