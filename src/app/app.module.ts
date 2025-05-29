import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Keep this here, in the root module only

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSidenavContent } from '@angular/material/sidenav';
import { MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { NgxPrintModule } from 'ngx-print';
import { HeaderComponent } from './Pages/admin/header/header.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { BodyComponent } from './Pages/body/body.component';
import { authGuard } from 'src/auth/auth.guard';
import { JwtInterceptorService } from '../app/Services/jwt-interceptor.service'; // <-- Import your interceptor
import { OrderSignalrServiceTsService } from './Services/order-signalr.service.ts.service';




@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,  // <-- BrowserModule should only be in the AppModule
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatBadgeModule,
    DxContextMenuModule,
    DevExtremeModule,
    DxDataGridModule,
    DxDropDownBoxModule,
    DxButtonModule,
    DxTabsModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
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
    DxGalleryModule,
    DxToolbarModule,
    DxTabPanelModule,
    DxTemplateModule,
    DxLoadPanelModule,
    DxHtmlEditorModule,
    NgxExtendedPdfViewerModule,
    NgxPrintModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    }),
  ],
  providers: [ApiCallService, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },OrderSignalrServiceTsService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
