import Head from 'next/head'
import FormLogin from '../components/FormLogin'
import LogoForm from '../components/LogoForm'
import { Container } from '../styles/pages/Home'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <main>
        <LogoForm />
        <FormLogin 
          title="Login" 
          footerLeft="Forgot your password"
          footerRight="Question?"
          txtBtn="Connect" 
        />
      </main>
    </Container>
  )
} 