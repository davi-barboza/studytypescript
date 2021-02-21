import { Button, Form, FormFooter, Input } from "./styles";

type FormLogin = {
  title: string;
  footerLeft: string;
  footerRight: string;
  txtBtn: string;
}

const FormLogin: React.FC<FormLogin> = (props) => {
  return (
    <Form>
      <h1>{props.title}</h1>
      <Input />
      <Input />

      <Button>{props.txtBtn}</Button>

      <FormFooter>
        <p>{props.footerLeft}</p>
        <p>-</p>
        <p>{props.footerRight}</p>
      </FormFooter>
    </Form>
  );
}

export default FormLogin;