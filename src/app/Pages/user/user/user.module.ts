import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
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
import { UserRoutingModule } from './user-routing.module';
import { UserNavComponent } from '../user-nav/user-nav.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { SpecialFoodMenuComponent } from '../special-food-menu/special-food-menu.component';
import { UserFoodSelectionComponent } from '../user-food-selection/user-food-selection.component';
import { UsercartComponent } from '../usercart/usercart.component';
import { OrderStatusComponent } from '../order-status/order-status.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { NgxPrintModule } from 'ngx-print';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { ApiCallService } from 'src/app/Services/api-call.service';
import { AppComponent } from 'src/app/app.component';
import { JwtInterceptorService } from 'src/app/Services/jwt-interceptor.service';


@NgModule({
  declarations: [
    UserNavComponent,
    UserDetailsComponent,
    SpecialFoodMenuComponent,
    UserFoodSelectionComponent,
    UsercartComponent,
    OrderStatusComponent
  ],
  imports: [
   FormsModule,
           ReactiveFormsModule,
           CommonModule,
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
          UserRoutingModule,
    // Shared modules here (Material, DevExtreme, etc.)
  ],
  providers: [ApiCallService,  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true }],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class UserModule { }
