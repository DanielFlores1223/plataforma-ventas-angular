import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import Swal from 'sweetalert2'
//servicio
import {EmpleadoService} from '../../../services/empleado.service';
import {PedidoService} from '../../../services/pedido.service';
import { InventarioService } from '../../../services/inventario.service';
import {ArduinoService} from '../../../services/arduino.service';

@Component({
  selector: 'app-inicio-empleado',
  templateUrl: './inicio-empleado.component.html',
  styleUrls: ['./inicio-empleado.component.css']
})
export class InicioEmpleadoComponent implements OnInit {
 nombre = localStorage.getItem('nombre');
 letra = this.nombre.charAt(0);
 correo : String = localStorage.getItem('correo');

 alertsTotal;
 notifiProd;
 notificaciones;
 pedidos;
 productos;

 tipoUsu =localStorage.getItem('tipo');

 empleado = {
  _id:"",
  nombre: "",
  apellidos: "",
  telefono: "",
  sueldo: 0,
  correo: this.correo,
  contrasenia: "",
  fechaNac: "",
  tipo: ""   
}

empleadoM = {
  _id: "",
  nombre: "",
  apellidos: "",
  telefono: "",
  correo: "",
  contrasenia: "",
  fechaNac: "",  
}

contasenias = {
  contrasenia: "",
  contrasenia2: "",
  correo: ''
}


fechaNacimiento = String[''];
modificarPerfil = false;
modificarContra = false;
exito = 0;
exitoContra = 0;
arduinoReg;
fechaHoy = '';

  constructor(private empleadoService : EmpleadoService, private pedidoservice :PedidoService, private inventarioservice: InventarioService, private rutas : Router, private arduinoService : ArduinoService) { }

  ngOnInit(): void {
    //this.countPendidosPendientes();
    this.alertas();
    this.miInfo();
    this.consultarArd()
  
  }

  consultarArd(){
    this.arduinoService.consultarTodoArd().subscribe(res => {
      this.arduinoReg = res;
      this.buscarPeligro()
    })
    
  }

  buscarPeligro(){
    var f = new Date();
    if (f.getDay() < 10) {
      this.fechaHoy =  f.getFullYear() + "-" + (f.getMonth() +1) + "-" + "0"+f.getDate();
    }else{
      this.fechaHoy =  f.getFullYear() + "-" + (f.getMonth() +1) + "-" + f.getDate();
    }
    
    
    for (let i = 0; i < this.arduinoReg.length; i++) {
      console.log(this.arduinoReg[i].fecha_reg.substring(0,10))
      if (this.arduinoReg[i].fecha_reg.substring(0,10) == this.fechaHoy) {
        Swal.fire({
          icon: 'warning',
          title: 'Peligro',
          text: 'La temperatura a subido drasticamente',
        })
      }
    }
  }

  miInfo(){
    this.empleadoService.consultarEmpCorreo(this.empleado).subscribe(res=>{
      this.empleado = res;
      this.fechaNacimiento = this.empleado.fechaNac.split('T');
      this.empleado.fechaNac = this.fechaNacimiento[0];
      this.empleadoM._id = this.empleado._id;
      //console.log(this.empleadoM._id);
    },
    err => console.log(err)
    );
  }

  infoModificar(){
    this.empleadoService.buscarEmpId(this.empleadoM).subscribe(res => {
      this.empleadoM = res;
      this.fechaNacimiento = this.empleadoM.fechaNac.split('T');
      this.empleadoM.fechaNac = this.fechaNacimiento[0];
    },
    err => console.log(err))
  }

  modificarPerfilEmp(){

    if(this.modificarPerfil){
        this.empleadoService.modificarPerfilEmp(this.empleadoM).subscribe   (res=> {
          this.exito = 1;
          this.miInfo();
        },
        err => {
          this.exito = 2;
        });
    }

    if (this.modificarContra) {
      this.contasenias.correo = localStorage.getItem('correo');
      if(this.contasenias.contrasenia === this.contasenias.contrasenia2){ 
        this.empleadoService.modificarContraEmp(this.contasenias).subscribe(res=>{
          this.exito = 1;
          this.cerrarSesion();
        },
        err => {
          this.exito = 2;
        });
      
      }else{
        this.exitoContra = 3;
      }
    }
  }
// metodos para notificaciones 
  countPendidosPendientes(){
    this.notificaciones=0;
    this.pedidoservice.consultarTodo().subscribe(res =>{
      this.pedidos=res;
      for(let i=0;i<this.pedidos.length;i++){
        
        if(this.pedidos[i].estatus=="Pendiente"){
          this.notificaciones++;
        }
      }
      console.log(this.notificaciones);
    },
    err =>console.log(err)
    );
    //console.log(this.notificaciones);
  }

  countProductPendientes(){
    this.notifiProd=0;
    this.inventarioservice.consultarTodo().subscribe(res=>{
      this.productos=res;
      for(let i=0;i<this.productos.length;i++){
        if(this.productos[i].existencia <=5){
          this.notifiProd++;
        }
      }
      console.log(this.notifiProd);
    },
    err =>console.log(err)
    );
    //console.log(this.notifiProd);
  }

  alertas(){
    this.countPendidosPendientes();
    this.countProductPendientes();
  }

  //funciones extra
  reiniciarExito(){
    this.exito = 0;
  }

  modificarP(){
    if(this.modificarPerfil)
      this.modificarPerfil = false;
    else
      this.modificarPerfil = true;
  }

  modificarC(){
    if(this.modificarContra)
      this.modificarContra = false;
    else
      this.modificarContra = true;
  }

  cerrarSesion(){
    //elimina las variables del localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('nombre');
    localStorage.removeItem('tipo');
    localStorage.removeItem('correo')
    this.rutas.navigate(['/inicio']);
  }
}
