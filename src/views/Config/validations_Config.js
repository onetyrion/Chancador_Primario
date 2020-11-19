import { notify } from "react-notify-toast";

export const validation_metas = (newData)=>{
    let errors = "";
    if (!newData.Id_kpi || !newData.Id_maquinaria || !newData.Anio || !newData.Meta) {
        errors = "No puede dejar campos vacíos";
    }
    if (newData.Anio < 1900) {
        errors = "Ingrese un Año Valido";
    }
    if (newData.Meta <= 0) {
        errors = "Ingrese una meta Valida";
    }
    if (errors.length>0) {
        notify.show(errors,"error");
        return true;
    }else{
        return false;
    }
}