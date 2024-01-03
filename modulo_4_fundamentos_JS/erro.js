function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritanto(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = {name: 'Roberto' }
imprimirNomeGritanto(obj)

// try => tratar erro a partir de um catch
// catch => Tratar o erro
// finally => chamado de qualquer forma
// evitar mostrar mensagens de stack ou que não seja em linguagem padrão