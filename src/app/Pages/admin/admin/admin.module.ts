import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { NgxPrintModule } from 'ngx-print';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';

import { AdminRoutingModule } from './admin-routing.module';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { ShowOderComponent } from '../show-oder/show-oder.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AllOrderComponent } from '../all-order/all-order.component';
import { SettingComponent } from '../setting/setting.component';
import { DetailsComponent } from '../AddFoodMenu/details/details.component';
import { ListComponent } from '../AddFoodMenu/list/list.component';
import { SpecialFoodDetailsComponent } from '../AddSpecialFoodMenu/special-food-details/special-food-details.component';
import { SpecialfoodlistComponent } from '../AddSpecialFoodMenu/specialfoodlist/specialfoodlist.component';
import { LoginAdminComponent } from '../login-admin/login-admin.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { ResetComponent } from '../../reset/reset.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from '../todo-list/todo-list.component';


// Add any needed shared modules here (Material, DevExtreme, etc.)

@NgModule({
  declarations: [
    SidenavComponent,
    ShowOderComponent,
    DashboardComponent,
    AllOrderComponent,
    SettingComponent,
    DetailsComponent,
    ListComponent,
    SpecialFoodDetailsComponent,
    SpecialfoodlistComponent,
    LoginAdminComponent,
    ForgotPasswordComponent,
    ResetComponent,
    TodoListComponent
  ],
  imports: [
    FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
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
        AdminRoutingModule,
  ]
})
export class AdminModule { }
