/**
* @module SDKModule
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MIT 2016 Jonathan Casarrubias
* @version 2.1.0
* @description
* The SDKModule is a generated Software Development Kit automatically built by
* the LoopBack SDK Builder open source module.
*
* The SDKModule provides Angular 2 >= RC.5 support, which means that NgModules
* can import this Software Development Kit as follows:
*
*
* APP Route Module Context
* ============================================================================
* import { NgModule }       from '@angular/core';
* import { BrowserModule }  from '@angular/platform-browser';
* // App Root 
* import { AppComponent }   from './app.component';
* // Feature Modules
* import { SDK[Browser|Node|Native]Module } from './shared/sdk/sdk.module';
* // Import Routing
* import { routing }        from './app.routing';
* @NgModule({
*  imports: [
*    BrowserModule,
*    routing,
*    SDK[Browser|Node|Native]Module.forRoot()
*  ],
*  declarations: [ AppComponent ],
*  bootstrap:    [ AppComponent ]
* })
* export class AppModule { }
*
**/
import { JSONSearchParams } from './services/core/search.params';
import { ErrorHandler } from './services/core/error.service';
import { LoopBackAuth } from './services/core/auth.service';
import { LoggerService } from './services/custom/logger.service';
import { SDKModels } from './services/custom/SDKModels';
import { InternalStorage, SDKStorage } from './storage/storage.swaps';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { StorageNative } from './storage/storage.native';
import { SocketNative } from './sockets/socket.native';
import { SocketDriver } from './sockets/socket.driver';
import { SocketConnection } from './sockets/socket.connections';
import { RealTime } from './services/core/real.time';
import { UserApi } from './services/custom/User';
import { ItemApi } from './services/custom/Item';
import { CurrencyApi } from './services/custom/Currency';
import { CategoryApi } from './services/custom/Category';
import { PageApi } from './services/custom/Page';
import { AuthorApi } from './services/custom/Author';
import { CouponApi } from './services/custom/Coupon';
import { ItemCouponApi } from './services/custom/ItemCoupon';
import { PropertyApi } from './services/custom/Property';
import { PropertyTypeApi } from './services/custom/PropertyType';
import { PropertyValueApi } from './services/custom/PropertyValue';
import { ItemPropertyApi } from './services/custom/ItemProperty';
import { MerchantGatewayApi } from './services/custom/MerchantGateway';
import { NotifyApi } from './services/custom/Notify';
import { OrderApi } from './services/custom/Order';
import { StatusApi } from './services/custom/Status';
import { OrderStatusApi } from './services/custom/OrderStatus';
import { OrderCouponApi } from './services/custom/OrderCoupon';
import { OrderItemApi } from './services/custom/OrderItem';
import { PackageLevelApi } from './services/custom/PackageLevel';
import { ServiceApi } from './services/custom/Service';
import { ServiceCouponApi } from './services/custom/ServiceCoupon';
import { ServicePackageLevelApi } from './services/custom/ServicePackageLevel';
import { OrderServiceApi } from './services/custom/OrderService';
import { SubscriptionApi } from './services/custom/Subscription';
import { SubscriptionCouponApi } from './services/custom/SubscriptionCoupon';
import { SubscriptionPackageLevelApi } from './services/custom/SubscriptionPackageLevel';
import { SubscriptionServiceApi } from './services/custom/SubscriptionService';
import { OrderSubscriptionApi } from './services/custom/OrderSubscription';
/**
* @module SDKNativeModule
* @description
* This module should be imported when building a NativeScript Applications.
**/
@NgModule({
  imports:      [ CommonModule, HttpModule ],
  declarations: [ ],
  exports:      [ ],
  providers:    [
    ErrorHandler,
    SocketConnection
  ]
})
export class SDKNativeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule  : SDKNativeModule,
      providers : [
        LoopBackAuth,
        LoggerService,
        JSONSearchParams,
        SDKModels,
        RealTime,
        UserApi,
        ItemApi,
        CurrencyApi,
        CategoryApi,
        PageApi,
        AuthorApi,
        CouponApi,
        ItemCouponApi,
        PropertyApi,
        PropertyTypeApi,
        PropertyValueApi,
        ItemPropertyApi,
        MerchantGatewayApi,
        NotifyApi,
        OrderApi,
        StatusApi,
        OrderStatusApi,
        OrderCouponApi,
        OrderItemApi,
        PackageLevelApi,
        ServiceApi,
        ServiceCouponApi,
        ServicePackageLevelApi,
        OrderServiceApi,
        SubscriptionApi,
        SubscriptionCouponApi,
        SubscriptionPackageLevelApi,
        SubscriptionServiceApi,
        OrderSubscriptionApi,
        { provide: InternalStorage, useClass: StorageNative },
        { provide: SDKStorage, useClass: StorageNative },
        { provide: SocketDriver, useClass: SocketNative }
      ]
    };
  }
}
/**
* Have Fun!!!
* - Jon
**/
export * from './models/index';
export * from './services/index';
export * from './lb.config';