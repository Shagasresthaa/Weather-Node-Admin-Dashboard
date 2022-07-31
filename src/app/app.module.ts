import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninModuleComponent } from './signin-module/signin-module.component';
import { SignupModuleComponent } from './signup-module/signup-module.component';
import { PassResetModuleComponent } from './pass-reset-module/pass-reset-module.component';
import { DashboardModuleComponent } from './dashboard-module/dashboard-module.component';
import { AdminViewModuleComponent } from './admin-view-module/admin-view-module.component';
import { NodesDataGraphModuleComponent } from './nodes-data-graph-module/nodes-data-graph-module.component';
import { NodesDataRawViewModuleComponent } from './nodes-data-raw-view-module/nodes-data-raw-view-module.component';
import { CreditsModuleComponent } from './credits-module/credits-module.component';
import { UserManagementModuleComponent } from './user-management-module/user-management-module.component';
import { NodeManagementModuleComponent } from './node-management-module/node-management-module.component';
import { AdminLogsModuleComponent } from './admin-logs-module/admin-logs-module.component';
import { NodeActivityModuleComponent } from './node-activity-module/node-activity-module.component';
import { NodeOTAUpdateModuleComponent } from './node-otaupdate-module/node-otaupdate-module.component';
import { DataDownloadModuleComponent } from './data-download-module/data-download-module.component';
import { NodeMapNetworkModuleComponent } from './node-map-network-module/node-map-network-module.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninModuleComponent,
    SignupModuleComponent,
    PassResetModuleComponent,
    DashboardModuleComponent,
    AdminViewModuleComponent,
    NodesDataGraphModuleComponent,
    NodesDataRawViewModuleComponent,
    CreditsModuleComponent,
    UserManagementModuleComponent,
    NodeManagementModuleComponent,
    AdminLogsModuleComponent,
    NodeActivityModuleComponent,
    NodeOTAUpdateModuleComponent,
    DataDownloadModuleComponent,
    NodeMapNetworkModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
