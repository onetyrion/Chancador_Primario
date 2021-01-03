var columnsType = [
  ["Fecha_mantencion", "date"],
  ["CantEvento_especial", "number"],
  ["Duracion", "number"],
  ["Horas_programadas", "number"],
  ["Horas_no_programadas", "number"],
  ["Cantidad_evProgramados", "number"],
  ["Cantidad_evNoProgramados", "number"],
  ["RCFA", "number"],
  ["Anio", "number"],
  ["Meta", "number"],
  ["Correo_electronico", "email"],
  ["Rut", "Rut"],
];
export const getTypeInputs = (value) => {
  let type = "text";
  columnsType.forEach((element) => value === element[0] && (type = element[1]));
  return type;
};
export const getChangeInputs = (name, value) => {
  switch (name.columnDef.field) {
    case "Rut":
      value = format_rutify(value);
      break;
    case "Correo_electronico":
      // console.log(validateEmail(value));
      // value=validateEmail(value);
      break;
    case "unidad":
      if (name.rowData.Id_kpi === "1") value = "Porcentaje";
      else value = "Horas";
      // name.rowData.Anio=2
      break;
    case "Id_kpi":
      // console.log(name.rowData);
      if (name.rowData.Id_kpi === "1") name.rowData.unidad = "Porcentaje";
      else name.rowData.unidad = "Horas";
      break;
    default:
      // console.log(name.rowData.Id_kpi)
      break;
  }
  return value;
};
// BY GITHUB/MARTIIXX
export const format_rutify = (str) => {
  let clearRut =
    typeof str === "string" ? str.replace(/[^0-9kK]+/g, "").toUpperCase() : ""; // limpiamos la variable rut
  if (clearRut.length <= 1) {
    return str;
  }
  var result =
    clearRut.slice(-4, -1) + "-" + clearRut.substr(clearRut.length - 1);
  for (var i = 4; i < clearRut.length; i += 3) {
    result = clearRut.slice(-3 - i, -i) + "." + result;
  }
  str = result;
  if (typeof str !== "string") {
    return str;
  }
  return str;
};
// BY GITHUB/MARTIIXX
export const validate_rutify = (str) => {
  let rut =
    typeof str === "string" ? str.replace(/[^0-9kK]+/g, "").toUpperCase() : "";
  var rutDigits = parseInt(rut.slice(0, -1), 10);
  var m = 0;
  var s = 1;
  while (rutDigits > 0) {
    s = (s + (rutDigits % 10) * (9 - (m++ % 6))) % 11;
    rutDigits = Math.floor(rutDigits / 10);
  }
  var checkDigit = s > 0 ? String(s - 1) : "K";
  // console.log(checkDigit === rut.slice(-1))
  if (checkDigit === rut.slice(-1)) {
    return true;
  } else {
    return false;
  }
};
export const validateEmail = (elementValue) => {
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(elementValue);
};
