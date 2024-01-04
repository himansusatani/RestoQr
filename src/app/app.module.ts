import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSidenavModule } from '@angular/material/sidenav';
import {MatSidenavContent } from '@angular/material/sidenav';
import {MatSidenav } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge'
import {
  DevExtremeModule,
  DxDataGridModule,
  DxDropDownBoxModule,
  DxButtonModule,
  DxTabsModule,
  DxSelectBoxModule,
  DxCheckBoxModule,
  DxContextMenuModule,
  DxFormModule,
  DxPopupModule,
  DxScrollViewModule,
  DxResponsiveBoxModule,
  DxNumberBoxModule,
  DxRadioGroupModule,
  DxListModule,
  DxTreeListModule,
  DxFileUploaderModule,
  DxTextBoxModule,
  DxTagBoxModule,
  DxTextAreaModule,
  DxDateBoxModule,
  DxTreeViewModule,
  DxValidatorModule,
  DxValidationGroupModule,
  DxColorBoxModule,
  DxSwitchModule,
  DxChartModule,
  DxToolbarModule,
  DxTabPanelModule,
  DxTemplateModule,
  DxLoadPanelModule,
  DxHtmlEditorModule,
  DxGalleryModule,
  DxAccordionModule
} from "devextreme-angular";
import { ApiCallService } from './Services/api-call.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { NgxPrintModule } from 'ngx-print';
import { SidenavComponent } from './Pages/admin/sidenav/sidenav.component';
import { HeaderComponent } from './Pages/admin/header/header.component';
import { ShowOderComponent } from './Pages/admin/show-oder/show-oder.component';
import { LoginAdminComponent } from './Pages/admin/login-admin/login-admin.component';
import { UserFoodSelectionComponent } from './Pages/user/user-food-selection/user-food-selection.component';
import { UserNavComponent } from './Pages/user/user-nav/user-nav.component';
import { ForgotPasswordComponent } from './Pages/admin/forgot-password/forgot-password.component';
import { UsercartComponent } from './Pages/user/usercart/usercart.component';
import { UserDetailsComponent } from './Pages/user/user-details/user-details.component';
import { OrderDetailsComponent } from './Pages/admin/order-details/order-details.component';
import { DashboardComponent } from './Pages/admin/dashboard/dashboard.component';
import { AllOrderComponent } from './Pages/admin/all-order/all-order.component';
import { SpecialFoodMenuComponent } from './Pages/user/special-food-menu/special-food-menu.component';
import { SettingComponent } from './Pages/admin/setting/setting.component';
import { DetailsComponent } from './Pages/admin/AddFoodMenu/details/details.component';
import { ListComponent } from './Pages/admin/AddFoodMenu/list/list.component';
import { SpecialFoodDetailsComponent } from './Pages/admin/AddSpecialFoodMenu/special-food-details/special-food-details.component';
import { SpecialfoodlistComponent } from './Pages/admin/AddSpecialFoodMenu/specialfoodlist/specialfoodlist.component';
import { OrderStatusComponent } from './Pages/user/order-status/order-status.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    ShowOderComponent,
    LoginAdminComponent,
    UserFoodSelectionComponent,
    UserNavComponent,
    ForgotPasswordComponent,
    UsercartComponent,
    UserDetailsComponent,
    OrderDetailsComponent,
    DashboardComponent,
    AllOrderComponent,
    SpecialFoodMenuComponent,
    SettingComponent,
    DetailsComponent,
    ListComponent,
    SpecialFoodDetailsComponent,
    SpecialfoodlistComponent,
    OrderStatusComponent,
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,MatSidenavModule,MatListModule,MatToolbarModule,MatIconModule,MatFormFieldModule,MatSelectModule
    ,MatMenuModule
    ,MatBadgeModule
    ,DxContextMenuModule,
    DevExtremeModule,
    DxDataGridModule,
    DxDropDownBoxModule,
    DxButtonModule, DxTabsModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxContextMenuModule,
    DxFormModule,
    DxPopupModule,
    DxScrollViewModule,
    DxResponsiveBoxModule,
    DxNumberBoxModule,
    DxRadioGroupModule,
    DxListModule,
    DxTabsModule,
    DxTreeListModule,
    DxFileUploaderModule,
    DxTextBoxModule,
    DxTagBoxModule,
    DxTextAreaModule,
    DxDateBoxModule,
    DxTreeViewModule,
    DxValidatorModule,
    DxValidationGroupModule,
    DxColorBoxModule,
    DxSwitchModule,
    DxChartModule,
    DxGalleryModule,
    DxToolbarModule,
    DxFileUploaderModule,
    DxTabPanelModule,
    DxTemplateModule,
    DxLoadPanelModule,
    DxHtmlEditorModule,
    NgxExtendedPdfViewerModule,
    NgxPrintModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
    }),
    
  ],
  providers: [ApiCallService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AppModule { }
