import {useState} from 'react'
import {useRouter} from 'next/router'
import { authService } from '../src/services/auth/authServices';

export default function HomeScreen() {
  const router = useRouter()

  const [values, setValues] = useState({
    usuario: 'omariosouto',
    senha: 'safepassword'
  });

  function handleChange (e) {
    const fieldValue = e.target.value
    const fieldName = e.target.name

    setValues((currentValues) => {
      return {
        ...currentValues,
        [fieldName] : fieldValue,
      }
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={
        (e) => {
          e.preventDefault()

          authService.login({
            username: values.usuario,
            password: values.senha,
          })
          .then(() => {
            router.push('/auth-page-static')
          })
          .catch(() =>{
            alert('Usuário ou a senha estão inválidos')
          })
          // router.push('/auth-page-static')
        }
      }>
        <input
          placeholder="Usuário" name="usuario"
          value={values.usuario}
          onChange={handleChange}

        />
        <input
          placeholder="Senha" name="senha" type="password"
          value={values.senha}
          onChange={handleChange}
        />
        <pre>
          {/* {JSON.stringify(values, null, 2)} */}
        </pre>
        <div>
          <button>
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
