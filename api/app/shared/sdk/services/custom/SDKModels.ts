/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Item } from '../../models/Item';
import { Currency } from '../../models/Currency';
import { Category } from '../../models/Category';
import { Page } from '../../models/Page';
import { Author } from '../../models/Author';
import { Coupon } from '../../models/Coupon';
import { ItemCoupon } from '../../models/ItemCoupon';
import { Property } from '../../models/Property';
import { PropertyType } from '../../models/PropertyType';
import { PropertyValue } from '../../models/PropertyValue';
import { ItemProperty } from '../../models/ItemProperty';
import { MerchantGateway } from '../../models/MerchantGateway';
import { Notify } from '../../models/Notify';
import { Order } from '../../models/Order';
import { Status } from '../../models/Status';
import { OrderStatus } from '../../models/OrderStatus';
import { OrderCoupon } from '../../models/OrderCoupon';
import { OrderItem } from '../../models/OrderItem';
import { PackageLevel } from '../../models/PackageLevel';
import { Service } from '../../models/Service';
import { ServiceCoupon } from '../../models/ServiceCoupon';
import { ServicePackageLevel } from '../../models/ServicePackageLevel';
import { OrderService } from '../../models/OrderService';
import { Subscription } from '../../models/Subscription';
import { SubscriptionCoupon } from '../../models/SubscriptionCoupon';
import { SubscriptionPackageLevel } from '../../models/SubscriptionPackageLevel';
import { SubscriptionService } from '../../models/SubscriptionService';
import { OrderSubscription } from '../../models/OrderSubscription';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Item: Item,
    Currency: Currency,
    Category: Category,
    Page: Page,
    Author: Author,
    Coupon: Coupon,
    ItemCoupon: ItemCoupon,
    Property: Property,
    PropertyType: PropertyType,
    PropertyValue: PropertyValue,
    ItemProperty: ItemProperty,
    MerchantGateway: MerchantGateway,
    Notify: Notify,
    Order: Order,
    Status: Status,
    OrderStatus: OrderStatus,
    OrderCoupon: OrderCoupon,
    OrderItem: OrderItem,
    PackageLevel: PackageLevel,
    Service: Service,
    ServiceCoupon: ServiceCoupon,
    ServicePackageLevel: ServicePackageLevel,
    OrderService: OrderService,
    Subscription: Subscription,
    SubscriptionCoupon: SubscriptionCoupon,
    SubscriptionPackageLevel: SubscriptionPackageLevel,
    SubscriptionService: SubscriptionService,
    OrderSubscription: OrderSubscription,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
