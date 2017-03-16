/* tslint:disable */

declare var Object: any;
export interface PageInterface {
  title: string;
  slug: string;
  is_active: boolean;
  excerpt: string;
  content: string;
  category: any;
  author: any;
}

export class Page implements PageInterface {
  title: string;
  slug: string;
  is_active: boolean;
  excerpt: string;
  content: string;
  category: any;
  author: any;
  constructor(data?: PageInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Page`.
   */
  public static getModelName() {
    return "Page";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Page for dynamic purposes.
  **/
  public static factory(data: PageInterface): Page{
    return new Page(data);
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
      name: 'Page',
      plural: 'Pages',
      properties: {
        title: {
          name: 'title',
          type: 'string'
        },
        slug: {
          name: 'slug',
          type: 'string'
        },
        is_active: {
          name: 'is_active',
          type: 'boolean'
        },
        excerpt: {
          name: 'excerpt',
          type: 'string'
        },
        content: {
          name: 'content',
          type: 'string'
        },
        category: {
          name: 'category',
          type: 'any'
        },
        author: {
          name: 'author',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
