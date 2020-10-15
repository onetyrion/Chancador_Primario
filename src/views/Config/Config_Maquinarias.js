import React from "react";
// @material-ui/core components
import GridContainer from "components/Grid/GridContainer.js";

//Components
import TableComponentes from './maquinariasTables/table_componentes';
import TableMaquinaria from './maquinariasTables/table_maquinaria';

export default function ConfigMaquinarias() {
  return (
    <GridContainer>
      <TableMaquinaria/>
      <TableComponentes/>
   </GridContainer>
  );
}
