import { notify } from 'react-notify-toast';
import Cookies from 'universal-cookie';
const {baseURL} = require("./configAPI");
const cookies = new Cookies();
var HeadersLogin = new Headers();

HeadersLogin.append("Content-Type", "application/json;charset=UTF-8");

export const Auth = async (rut,pass) => {
    var body = {
        method: 'POST',
        headers: HeadersLogin,
        body: JSON.stringify({"Rut":rut,"Password":pass,"Id_rol":1}),
        redirect: 'follow'
    }
    try {
        return await fetch(baseURL+"/auth", body)
      .then(response => response.json())
      .then(async result => {
          if (result.success) {
              console.log(result.user)
              await cookies.set('user',result.user.Rut, {path: "/"});
              await cookies.set('user-token',result.success, {path: "/"});
              await cookies.set('rol',result.user.Rol, {path: "/"});
              window.location.reload();
            }else{
                console.log (result);
                return result;
        }
      });
    } catch (error) {
        // console.log("ha ocurrido un error");
        return {success:null,errors:error};
    }
}
export const validLogin = async () =>{
    var vauthHeaders = new Headers();
    vauthHeaders.append("user-token",await cookies.get('user-token'));
    vauthHeaders.append("Content-Type", "application/json;charset=UTF-8");
    var body = { method: 'GET', headers: vauthHeaders, redirect: 'follow' }
    try {
        return await fetch(baseURL+"/vauth", body)
      .then(response => response.json())
      .then(async result => {
          if (result.success) {
            console.log(result.user.rol)
            cookies.remove("rol",{path: "/"})
            await cookies.set('user-token',result.token, {path: "/"});
            await cookies.set('user',result.user.userId, {path: "/"});
            await cookies.set('rol',result.user.rol, {path: "/"});
            return true;
        }else{
            // console.log(result);
            await cookies.remove('user-token',{ path: '/' });
            await cookies.remove('user',{ path: '/' });
            await cookies.remove('rol',{ path: '/' });
            return false;
        }
      });
    } catch (error) {
        notify.show("Error del Servidor, Intente más tarde","error")
        return false
    }
}
export const logout = async () =>{
    // alert("SALIDA")
    await cookies.remove('user-token',{ path: '/' });
    await cookies.remove('user',{ path: '/' });
    await cookies.remove('rol',{ path: '/' });
    window.location.reload();
}