import { Component, OnInit } from '@angular/core';
import{AuthService} from '../auth.service';
@Component({
  selector: 'app-otrocomponente',
  templateUrl: './otrocomponente.component.html',
  styleUrls: ['./otrocomponente.component.scss']
})
export class OtrocomponenteComponent{

  //constructor(private auth: AuthService) { }
  /*
  loginUser(event){
    event.preventDefault()
    const target = event.target
    const username = target.querySelector("#mail").value
    const password = target.querySelector("#password").value
    this.auth.getUserDetails(username,password).subscribe(data=>{
      if (data.success){
        //redireccionaremos a home
      }else{
        window.alert('data.message')
      }
      
    }
    console.log(username, password)
  }*/

}


  /*
  $(document).ready(function()
  {
    $(#"boton").click(function(){
      $.ajax(
      {
      url:'/login',
      type:'post'.
      data:
      {
      user:$(".variablecorreo").val(),
      password:$(".variablecontraseña"),
      val()
    },
    success: function(data){
    alert("el servidor ha respondido: "+data)
  },
  error: function(){
  alert("el servidor tuvo un error.");
}


    });
  });

});
  */