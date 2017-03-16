/* tslint:disable */

declare var Object: any;
export interface NotifyInterface {
  name?: string;
  email: string;
  item?: any;
  is_mailing_list?: boolean;
  is_active: boolean;
  id?: any;
}

export class Notify implements NotifyInterface {
  name: string;
  email: string;
  item: any;
  is_mailing_list: boolean;
  is_active: boolean;
  id: any;
  constructor(data?: NotifyInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Notify`.
   */
  public static getModelName() {
    return "Notify";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Notify for dynamic purposes.
  **/
  public static factory(data: NotifyInterface): Notify{
    return new Notify(data);
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
      name: 'Notify',
      plural: 'Notifies',
      properties: {
        name: {
          name: 'name',
          type: 'string'
        },
        email: {
          name: 'email',
          type: 'string'
        },
        item: {
          name: 'item',
          type: 'any'
        },
        is_mailing_list: {
          name: 'is_mailing_list',
          type: 'boolean'
        },
        is_active: {
          name: 'is_active',
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
