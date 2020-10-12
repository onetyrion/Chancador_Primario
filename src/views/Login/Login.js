import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { stylesLogin } from 'assets/css/loginTheme';
import { validarRUT } from 'validar-rut';
import { notify } from 'react-notify-toast';
import {Auth, validLogin} from '../../API/Auth';

export default function Login() {
  const classes = stylesLogin();
  const [ id_username,setid_username ] = React.useState("");
  const [ pass_username,setpass_username ] = React.useState("");
  const [ validError,setvalidError ] = React.useState(["",""]);//ERROR pass /////////// ERROR RUT
  
  const redirectLogin = async()=>{
    if (await validLogin() && id_username.length===0) {
      window.location.href="/";
      //alert("LOGEADO");
    }
  }
  redirectLogin()
  const handleChangeUser = async(e)=>{
    switch (e.target.name) {
      case "rut":
        (e.target.value.length>0 && validarRUT(e.target.value)) ? setvalidError([validError[0],""]) : setvalidError([validError[0],"El Rut es incorrecto"]);
        setid_username(e.target.value);
        break;
      case "password":
        (e.target.value.length>0 ? setvalidError(["",validError[1]]) : setvalidError(["Debe ingresar una contraseña",validError[1]]));
        setpass_username(e.target.value);
        break;
      default:
        break;
      }
  }
  //FUNCION LOGIN ON API
  const LoginOnToken = async()=>{
    if ((id_username.length > 0 && validarRUT(id_username)) && pass_username.length > 0) {
      //console.log(`username: ${id_username}\n password: ${pass_username}`);
      await Auth(id_username,pass_username)
      .then((value)=>{
        if (value!==undefined) {
          setvalidError(["a","a"])
          notify.show(value.error ? 'Revise sus credenciales!' : 'Ha ocurrido un error, intentelo más tarde!','error',5000);
        }
      });
    }else{
      setvalidError(["a","a"])
      notify.show('Revise sus credenciales!','error',5000);
    }
  }
  return (
    <div className={classes.background} > 
    <Container component="main" maxWidth="xs" className={classes.windows}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Bienvenido
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required          
            fullWidth
            id="rut"
            label="Rut"
            name="rut"
            onChange={handleChangeUser}
            autoComplete="rut"
            autoFocus
            error = {validError[1].length > 0 ? (true) : (false)}
            helperText={validError[1].length > 1 && (validError[1])}
            />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            onChange={handleChangeUser}
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            error = {validError[0].length > 0 ? (true) : (false)}
            helperText= {validError[0].length > 1 && (validError[0])}
            />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recordarme"
            />
          <Button
            type="button"
            onClick={LoginOnToken}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            >
            Iniciar Sesión
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                ¿Olvidaste tu contraseña?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>

    </div>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/onetyrion">
        onetyrion
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}