import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./../../layout/header/header.component";
import { FooterComponent } from "./../../layout/footer/footer.component";
import { DialogsComponent } from "./../../modules/dialogs/dialogs.component";
import { LoginComponent } from "./../../modules/home/pages/login/login.component";
import { HomeComponent } from "./../../modules/home/pages/home/home.component";
import { LayoutComponent } from "./../../layout/layout.component";
import { MainComponent } from "./../../layout/main/main.component";
import { SidenavComponent } from "./../../layout/sidenav/sidenav.component";
import { BrowserModule } from "@angular/platform-browser";
import { MatButtonModule } from "@angular/material/button";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { DashboardComponent } from "./pages/home/dashboard/dashboard.component";
import { TiendasComponent } from "./pages/home/tiendas/tiendas.component";
import { ConfiguracionesComponent } from "./pages/home/configuraciones/configuraciones.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { IngresosCategoriaComponent } from "./pages/home/dashboard/ingresos-categoria/ingresos-categoria.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { IngresosCategoriaMesesComponent } from "./pages/home/dashboard/ingresos-categoria-meses/ingresos-categoria-meses.component";
import { CategoriasImportantesComponent } from "./pages/home/dashboard/categorias-importantes/categorias-importantes.component";
import { TopMedicosComponent } from "./pages/home/dashboard/top-medicos/top-medicos.component";
import { AtencionGeneroComponent } from "./pages/home/dashboard/atencion-genero/atencion-genero.component";
import { TopPacientesComponent } from "./pages/home/dashboard/top-pacientes/top-pacientes.component";
import { MatProgressBarModule } from "@angular/material/progress-bar";

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DialogsComponent,
    LoginComponent,
    LayoutComponent,
    MainComponent,
    SidenavComponent,
    DashboardComponent,
    TiendasComponent,
    ConfiguracionesComponent,
    IngresosCategoriaComponent,
    IngresosCategoriaMesesComponent,
    CategoriasImportantesComponent,
    TopMedicosComponent,
    AtencionGeneroComponent,
    TopPacientesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    NoopAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    NgxChartsModule,
    MatProgressBarModule,
  ],
})
export class HomeModule {}
