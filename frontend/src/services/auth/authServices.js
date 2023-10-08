import { HttpClient } from '../../infra/HttpClient/HttpClient'
import { tokenService } from './tokenService'

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
            console.log(body.data.access_token)

            tokenService.save(body.data.access_token)
            console.log(body)
        })
    },
    async getSession(ctx = null){
        const token = tokenService.get(ctx)

        return HttpClient(`http://localhost:4000/api/session`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response) => {
            if(!response.ok) throw new Error ('Não autorizado')
            return response.body.data
        } )
    }
}