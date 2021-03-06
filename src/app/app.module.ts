import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; //paginacion
// Import pdfmake-wrapper and the fonts to use
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from "pdfmake/build/vfs_fonts"; // fonts provided for pdfmake
 
// Set the fonts to use
PdfMakeWrapper.setFonts(pdfFonts);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//servicios
import {LoginService} from './services/login.service';


//Importacion de componentes
import { HeaderComponent } from './components/paginaInfo/header/header.component';
import { FooterComponent } from './components/paginaInfo/footer/footer.component';
import { HomeComponent } from './components/paginaInfo/home/home.component';
import { ContactoComponent } from './components/paginaInfo/contacto/contacto.component';
import { ChatFacebookComponent } from './components/paginaInfo/chat-facebook/chat-facebook.component';
import { NosotrosComponent } from './components/paginaInfo/nosotros/nosotros.component';
import { RegistrarseComponent } from './components/paginaInfo/registrarse/registrarse.component';
import { LoginComponent } from './components/paginaInfo/login/login.component';
import { HeaderClienteComponent } from './components/Cliente/header-cliente/header-cliente.component';
import { InicioClienteComponent } from './components/Cliente/inicio-cliente/inicio-cliente.component';
import { SidebarEmpleadoComponent } from './components/Empleado/sidebar-empleado/sidebar-empleado.component';
import { InicioEmpleadoComponent } from './components/Empleado/inicio-empleado/inicio-empleado.component';
import { NavbarEmpleadoComponent } from './components/Empleado/navbar-empleado/navbar-empleado.component';
import { EmpleadoCrudComponent } from './components/Empleado/empleado-crud/empleado-crud.component';
import { ClienteCrudComponent } from './components/Empleado/cliente-crud/cliente-crud.component';
import { ProveedorCrudComponent } from './components/Empleado/proveedor-crud/proveedor-crud.component';
import { InventarioComponent } from './components/Empleado/inventario/inventario.component';
import { ServiciosComponent } from './components/paginaInfo/servicios/servicios.component';
import { MisPedidosComponent } from './components/Cliente/mis-pedidos/mis-pedidos.component';
import { CarritoComponent } from './components/Cliente/carrito/carrito.component';
import { ProductosComponent } from './components/paginaInfo/productos/productos.component';
import { PedidosComponent } from './components/Empleado/pedidos/pedidos.component';
import { SolicitudesServiciosComponent } from './components/Empleado/solicitudes-servicios/solicitudes-servicios.component';

import { ReportesComponent } from './components/Empleado/reportes/reportes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactoComponent,
    ChatFacebookComponent,
    NosotrosComponent,
    RegistrarseComponent,
    LoginComponent,
    HeaderClienteComponent,
    InicioClienteComponent,
    SidebarEmpleadoComponent,
    InicioEmpleadoComponent,
    NavbarEmpleadoComponent,
    EmpleadoCrudComponent,
    ClienteCrudComponent,
    ProveedorCrudComponent,
    InventarioComponent,
    ServiciosComponent,
    MisPedidosComponent,
    CarritoComponent,
    ProductosComponent,
    PedidosComponent,
    SolicitudesServiciosComponent,
    ReportesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule 
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
