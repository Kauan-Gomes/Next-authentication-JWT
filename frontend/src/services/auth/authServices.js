export const authService = {
    async login({ username, password}) {
        // Video usa variavel de ambiente no local do localhost, porém está dando erro
        return fetch(`http://localhost:4000/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(async (respostaDoServidor) => {
            if(!respostaDoServidor.ok) throw new Error ('Usuário ou senha inválido')
            const body = await respostaDoServidor.json()
            console.log(body)
        })
    }
}