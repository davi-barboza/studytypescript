import { useState } from "react";
import { Button, Form, FormFooter, Input } from "./styles";

type Somar = {
  title: string;
  footerLeft: string;
  footerRight: string;
  txtBtn: string;
}

const FormSomar: React.FC<Somar> = (props) => {
  const [result, setResult] = useState<number>();
  const [n1, setNumero1] = useState();
  const [n2, setNumero2] = useState();


  function somarNumeros() {
    setResult(parseInt(n1) + parseInt(n2));
  }
  function getNumber1 (n1){
    setNumero1(n1.target.value);
  }
  function getNumber2 (n2){
    setNumero2(n2.target.value);
  }


  return (
    <Form>
      <h1>{props.title}</h1>
      <Input onKeyUp={(n1) => getNumber1(n1)}/>
      <Input onKeyUp={(n2) => getNumber2(n2)}/>

      <Button onClick={somarNumeros}>{props.txtBtn}</Button>

      <FormFooter>
        <p>{props.footerLeft}</p>
        <p>-</p>
        <p>{props.footerRight}</p>
      </FormFooter>

      <h2>{n1} + {n2}</h2>
      <h2>{result}</h2>
    </Form>
  );
}

export default FormSomar; 