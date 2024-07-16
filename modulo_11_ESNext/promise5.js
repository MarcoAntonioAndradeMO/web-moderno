function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!');
            } else {
                resolve(valor)
            }
        } catch (e) {
            resolve(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then( v => `Valor: ${v}`)
    .then(
        v => consol.log(v)
        err => console.log(`Erro Esp.: ${err}`)
    )
    .then(() => console.log('Quase no Fim!'))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim!'))