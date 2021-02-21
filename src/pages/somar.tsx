import Head from 'next/head'
import { MouseEvent, useState } from 'react';
import { Container, BoxLeft, BoxRight, Button, Input,FormFooter } from '../styles/pages/Somar'



export default function Somar() {
  const [result, setResult] = useState<number>();
  const [numero1, setNumero1] = useState<string>();
  const [numero2, setNumero2] = useState<string>();

  const somarNumeros = (event: MouseEvent) => {
    event.preventDefault()
    setResult(parseInt(numero1) + parseInt(numero2));
  }

  return (
    <Container>
      <Head>
        <title>Somar</title>
      </Head>
      <main>
        <BoxLeft>
          <h1>{ result ? "O resultado é " + result : "Digite dois números" }</h1>
        </BoxLeft>

        <BoxRight>
          <h2>Adição</h2>

          <Input 
            placeholder="Primeiro número" 
            value={numero1} 
            onChange={event => setNumero1(event.target.value)} 
            type="number"
          />

          <Input 
            placeholder="Segundo número" 
            value={numero2} 
            onChange={event => setNumero2(event.target.value)} 
            type="number"
          />

          <Button onClick={somarNumeros}>Calcular</Button>

          <FormFooter>
            <p>Para calcular</p>
            <p>-</p>
            <p>Clique no botão acima</p>
          </FormFooter>   
        </BoxRight>
      </main>
    </Container>
  )
}  