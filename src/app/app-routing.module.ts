import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//guardianes
import{ GuardiaSesionAdminGuard } from './guardias/guardia-sesion-admin.guard';
import { GuardiaPaginaInfoGuard } from './guardias/guardia-pagina-info.guard';
import { GuardiaClienteGuard } from './guardias/guardia-cliente.guard';

//componentes
import { HomeComponent } from './components/paginaInfo/home/home.component';
import { ContactoComponent } from './components/paginaInfo/contacto/contacto.component';
import { NosotrosComponent } from './components/paginaInfo/nosotros/nosotros.component';
import { RegistrarseComponent } from './components/paginaInfo/registrarse/registrarse.component';
import { InicioClienteComponent } from './components/Cliente/inicio-cliente/inicio-cliente.component';
import { InicioEmpleadoComponent } from './components/Empleado/inicio-empleado/inicio-empleado.component';
import { EmpleadoCrudComponent } from './components/Empleado/empleado-crud/empleado-crud.component';
import { ClienteCrudComponent } from './components/Empleado/cliente-crud/cliente-crud.component';
import { ProveedorCrudComponent } from './components/Empleado/proveedor-crud/proveedor-crud.component';
import { InventarioComponent } from './components/Empleado/inventario/inventario.component';
import { ServiciosComponent } from './components/paginaInfo/servicios/servicios.component';
import { MisPedidosComponent } from './components/Cliente/mis-pedidos/mis-pedidos.component';
import { CarritoComponent } from './components/Cliente/carrito/carrito.component';
import { ProductosComponent } from './components/paginaInfo/productos/productos.component';
import { ReportesComponent } from './components/Empleado/reportes/reportes.component';
import { PedidosComponent } from './components/Empleado/pedidos/pedidos.component';
import { SolicitudesServiciosComponent } from './components/Empleado/solicitudes-servicios/solicitudes-servicios.component';


const routes: Routes = [
  { path:'', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent, canActivate: [GuardiaPaginaInfoGuard]},
  { path: 'contacto', component: ContactoComponent, canActivate: [GuardiaPaginaInfoGuard]},
  { path: 'nosotros', component: NosotrosComponent, canActivate: [GuardiaPaginaInfoGuard]},
  { path: 'registrarse', component: RegistrarseComponent, canActivate: [GuardiaPaginaInfoGuard]},
  { path: 'inicio-Cliente', component: InicioClienteComponent, canActivate: [GuardiaClienteGuard]},
  { path: 'inicio-Empleado',component: InicioEmpleadoComponent, canActivate: [GuardiaSesionAdminGuard]},
  { path: 'empleado-crud', component: EmpleadoCrudComponent, canActivate: [GuardiaSesionAdminGuard] },
  { path: 'cliente-crud', component: ClienteCrudComponent, canActivate: [GuardiaSesionAdminGuard]},
  { path: 'proveedor-crud', component: ProveedorCrudComponent, canActivate: [GuardiaSesionAdminGuard]},
  { path: 'inventario', component: InventarioComponent, canActivate: [GuardiaSesionAdminGuard]},
  { path: 'reportes',component:ReportesComponent,canActivate:[GuardiaSesionAdminGuard]},
  { path: 'pedidos', component: PedidosComponent, canActivate: [GuardiaSesionAdminGuard]},
  { path: 'productos', component: ProductosComponent, canActivate: [GuardiaPaginaInfoGuard]},
  { path: 'servicios', component: ServiciosComponent, canActivate: [GuardiaPaginaInfoGuard] },
  { path: 'misPedidos', component: MisPedidosComponent, canActivate: [GuardiaClienteGuard]},
  { path: 'carrito', component: CarritoComponent, canActivate: [GuardiaClienteGuard]},
  { path: 'solicitudes-servicios', component: SolicitudesServiciosComponent},
  { path: '**', redirectTo: '/inicio'}, //<--- esta ruta tiene que ir siempre al último para que funcione

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
