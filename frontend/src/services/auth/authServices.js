import { HttpClient } from '../../infra/HttpClient/HttpClient'
''
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
            console.log(body)
        })
    }
}