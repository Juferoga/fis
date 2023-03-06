import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService, FilterService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { SlideMenuModule } from 'primeng/slidemenu';
import { MenuModule } from 'primeng/menu';
import { ProfileComponent } from './shared/profile/profile.component';
import { ChartModule } from 'primeng/chart';
import { OnBuildComponent } from './pages/on-build/on-build.component';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FileUploadModule } from 'primeng/fileupload';
import { PaymentComponent } from './shared/payment/payment.component';
import { StockComponent } from './shared/stock/stock.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    NotFoundComponent,
    TopBarComponent,
    SideBarComponent,
    ProfileComponent,
    OnBuildComponent,
    PaymentComponent,
    StockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    HttpClientModule,
    ToastModule,
    FormsModule,
    MenubarModule,
    SlideMenuModule,
    MenuModule,
    ChartModule,
    SidebarModule,
    TableModule,
    ToolbarModule,
    DialogModule,
    ConfirmDialogModule,
    FileUploadModule,
    DropdownModule,
    RatingModule
  ],
  providers: [
    MessageService,
    ConfirmationService,
    FilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
