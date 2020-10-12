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
              await cookies.set('user',result.user.Rut, {path: "/"});
              await cookies.set('user-token',result.success, {path: "/"});
              console.log(result.user.Rut)
              window.location.href="./";
            }else{
                console.log (result);
                return result;
        }
      });
    } catch (error) {
        // console.log("ha ocurrido un error");
        return {success:null,error:error};
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
      .then(result => {
          if (result.success) {
            cookies.set('user-token',result.token, {path: "/"});
            cookies.set('user',result.user.userId, {path: "/"});
            return true;
        }else{
            // console.log(result);
            cookies.remove('user-token',{ path: '/' });
            cookies.remove('user',{ path: '/' });
            return false;
        }
      });
    } catch (error) {
        return {error}
    }
}
export const logout = async () =>{
    // alert("SALIDA")
    cookies.remove('user-token',{ path: '/' });
    cookies.remove('user',{ path: '/' });
    window.location.href="./";
}