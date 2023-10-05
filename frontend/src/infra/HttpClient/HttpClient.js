//Arquitetura Hexagonal

export async function HttpClient(fetchUrl, fetchoptions) {
 return fetch(fetchUrl, {
    ...fetchoptions,
    headers: {
        ...fetchoptions.headers,
        'Content-Type' : 'application/json'
    },
    body: fetchoptions.body ? JSON.stringify(fetchoptions.body) : null
 })
 .then(async (respostaDoServidor) => {
    return {
        ok: respostaDoServidor.ok ,
        body: await respostaDoServidor.json()
    }
 })
}
