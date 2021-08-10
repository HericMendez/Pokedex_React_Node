import React, { useState } from "react";
import "./form.css";
import { TextField, Button, Switch, FormControlLabel, Container, Typography } from "@material-ui/core";

function Formulario({ aoEnviar, validarCPF, validarNome, validarSobrenome, validarEmail, valiData, validarSubmitBtn }) {
  //dados do form:
  const [nome, setNome] = useState("Batata");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCPF] = useState("");
  const [dataNasc, setData] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  //validação de erros:
  const [erroCpf, setErroCpf] = useState({ valido: true, msg: "" });
  const [erroNome, setErroNome] = useState({ valido: true, msg: "" });
  const [erroSobrenome, setErroSobrenome] = useState({ valido: true, msg: "" });
  const [erroEmail, setErroEmail] = useState({ valido: true, msg: "" });
  const [erroData, setErroData] = useState({valido: true, msg: ""});

 // const [submit, setSubmit] = useState(true);
/*
  
  const validFormSubmit = validarSubmitBtn(erroNome, erroEmail, erroCpf, erroData);
  setSumbitBtn(validFormSubmit)
*/
  
  
  return (

    <div className="App">
    <Container className="main-form" component='article' maxWidth="sm">
      <Typography variant='h4'  component='h2'>Formulário de Cadastro</Typography>
      <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ nome, cpf,  promocoes, novidades });
        console.log(`
        Nome: ${nome}   
        E-mail: ${email}
        CPF: ${cpf}
        Data de Nascimento: ${dataNasc}
        Promoções: ${promocoes}
        Novidades: ${novidades}

       
      `);
      }}
    >
      <TextField
        value={nome}
       
        id="Nome"
        label="Nome Completo"
        variant="outlined"
        color="primary"
        margin="normal"
        fullWidth
      />

<TextField
        value={sobrenome}
        
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        color="primary"
        margin="normal"
        fullWidth
      />
     
      <TextField
        value={email}
        
        id="email"
        label="E-mail"
        variant="outlined"
        margin="normal"
        color="primary"
        fullWidth
      />
      <TextField
        className="toTheLeft"

        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        color="primary"
        pattern="[0-9]*"
        autoComplete="off"
      />
      <TextField
        className="toTheRight"
        

        type="date"
        id="data_nasc"
        label="Data de Nascimento"
        variant="outlined"
        margin="normal"
        color="primary"
        maxWidth="sd"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <br />
      <div className="switches">
        <FormControlLabel
          checked={promocoes}
          label="Promoções"
          control={
            <Switch
              onChange={(event) => {
                setPromocoes(event.target.checked);
              }}
              name="promocoes"
              defaultChecked={promocoes}
              color="primary"
            />
          }
          fullWidth
        />
        <FormControlLabel
          checked={novidades}
          label="Novidades"
          control={
            <Switch
              onChange={(event) => {
                setNovidades(event.target.checked);
              }}
              name="novidades"
              defaultChecked={novidades}
              color="primary"
            />
          }
          fullWidth
        />
      </div>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        margin="normal"
        fullWidth

      >
        Cadastrar
      </Button>
    </form>
    </Container>
  </div>
   
  );
}

export default Formulario;