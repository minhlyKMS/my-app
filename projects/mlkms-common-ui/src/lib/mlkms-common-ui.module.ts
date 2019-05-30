import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarContainerComponent } from './sidebar-container/sidebar-container.component';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarContainerComponent,
    SidebarContentComponent,
    SidebarMenuComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarContainerComponent,
    SidebarContentComponent,
    SidebarMenuComponent,
    LoginComponent
  ]
})
export class MlkmsCommonUiModule { }
