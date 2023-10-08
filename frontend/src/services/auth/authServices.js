import { HttpClient } from '../../infra/HttpClient/HttpClient'
<<<<<<< HEAD
import { tokenService } from './tokenService'

=======
''
>>>>>>> 30d1d7e1b770aa3ef106c9fd444d40f3d2b59551
export const authService = {
    async login({ username, password}) {
        // Video usa variavel de ambiente no local do localhost, porém está dando erro
        return HttpClient(`http://localhost:4000/api/login`, {
            method: 'POST',
            body: {username, password}
        })
        .then(async (respostaDoServidor) => {
            if(!respostaDoServidor.ok) throw new Error ('Usuário ou senha inválido')
            const body = await respostaDoServidor.body
<<<<<<< HEAD
            console.log(body.data.access_token)

            tokenService.save(body.data.access_token)
=======
            console.log(body)
>>>>>>> 30d1d7e1b770aa3ef106c9fd444d40f3d2b59551
        })
    }
}