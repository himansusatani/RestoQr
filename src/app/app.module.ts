import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSidenavModule } from '@angular/material/sidenav';
import {MatSidenavContent } from '@angular/material/sidenav';
import {MatSidenav } from '@angular/material/sidenav';
import { SidenavComponent } from './Pages/sidenav/sidenav.component';
import { HeaderComponent } from './Pages/header/header.component';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge'
import { ShowOderComponent } from './Pages/show-oder/show-oder.component';
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
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    ShowOderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
