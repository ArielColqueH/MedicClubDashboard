import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./../../layout/header/header.component";
import { FooterComponent } from "./../../layout/footer/footer.component";
import { LoginComponent } from "./../../modules/home/pages/login/login.component";
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
import { MatInputModule } from "@angular/material/input";
import { RegistroComponent } from "./pages/home/registro/registro.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { HomeComponent } from "./pages/home/home.component";
import { FormularioRegistroComponent } from "./pages/home/registro/formulario-registro/formulario-registro.component";
import { MatMenuModule } from "@angular/material/menu";
import { MatDialogModule } from "@angular/material/dialog";
import { FailComponent } from "src/app/dialogs/alerts/fail/fail.component";
import { SuccesfulComponent } from "src/app/dialogs/alerts/succesful/succesful.component";

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LayoutComponent,
    MainComponent,
    SidenavComponent,
    DashboardComponent,
    ConfiguracionesComponent,
    IngresosCategoriaComponent,
    IngresosCategoriaMesesComponent,
    CategoriasImportantesComponent,
    TopMedicosComponent,
    AtencionGeneroComponent,
    TopPacientesComponent,
    RegistroComponent,
    FormularioRegistroComponent,
    FailComponent,
    SuccesfulComponent,
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
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSelectModule,
    MatMenuModule,
    MatDialogModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
