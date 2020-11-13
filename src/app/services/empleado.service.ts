import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private urlEmp = 'http://localhost:3000/empleados';

  constructor(private http : HttpClient) { }

  regEmp( empleado ){
    return this.http.post<any>(this.urlEmp, empleado);
  }

  consultarEmpCorreo( correo ){
    return this.http.post<any>(this.urlEmp + "/buscar-emp-correo", correo);
  }

  consultarTodoEmp(){
    return this.http.get(this.urlEmp);
  }

  modificarEmp(empleado){
    return this.http.put<any>(this.urlEmp, empleado);
  }

  modificarContraEmp(empleado){
    return this.http.put<any>(this.urlEmp + "/modificar-contrasenia", empleado);
  }
   
  eliminarEmp(empleado){
    return this.http.post<any>(this.urlEmp + "/eliminar", empleado);
  }

  buscarEmpLike(empleado){
    return this.http.post<any>(this.urlEmp + "/buscar-like", empleado)
  }

}

