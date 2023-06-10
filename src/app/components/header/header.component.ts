import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private renderer: Renderer2){}

  datosBtn = "Perfil";
  cambiar= false;
  change(){
    this.cambiar = !this.cambiar;
    console.log(this.cambiar)
    if (this.cambiar ==true){
      this.datosBtn = "Mostrar Menú";
    }else{
      this.datosBtn = "Perfil";
    }
  }

  Mostrar:boolean = false;
     showMessage(){
      let message = document.getElementById("message");
     this.Mostrar = !this.Mostrar;
     if(this.Mostrar == true){

        this.renderer.removeAttribute(message, 'hidden')
     }else{
      this.renderer.setAttribute( message, 'hidden', 'true')
     }
       console.log("HOLIS" + this.Mostrar);
     }
}
     