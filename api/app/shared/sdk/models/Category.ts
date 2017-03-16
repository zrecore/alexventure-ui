/* tslint:disable */

declare var Object: any;
export interface CategoryInterface {
  is_active: boolean;
  slug: string;
  parent?: any;
  name: string;
}

export class Category implements CategoryInterface {
  is_active: boolean;
  slug: string;
  parent: any;
  name: string;
  constructor(data?: CategoryInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Category`.
   */
  public static getModelName() {
    return "Category";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Category for dynamic purposes.
  **/
  public static factory(data: CategoryInterface): Category{
    return new Category(data);
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
      name: 'Category',
      plural: 'Categories',
      properties: {
        is_active: {
          name: 'is_active',
          type: 'boolean'
        },
        slug: {
          name: 'slug',
          type: 'string'
        },
        parent: {
          name: 'parent',
          type: 'any'
        },
        name: {
          name: 'name',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
