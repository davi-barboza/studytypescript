import { Button } from "./styles";

type TextButton = {
  txtBtn: string;
}

const ButtonForm: React.FC<TextButton> = (props) => {

  return (
    <Button>{props.txtBtn}</Button>
  );
}

export default ButtonForm; 