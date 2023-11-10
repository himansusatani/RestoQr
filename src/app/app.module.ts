import { NgModule } from '@angular/core';
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
    OrderDetailsComponent
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
    NgxPrintModule
  ],
  providers: [ApiCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
