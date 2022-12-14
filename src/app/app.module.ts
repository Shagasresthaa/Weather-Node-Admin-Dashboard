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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
