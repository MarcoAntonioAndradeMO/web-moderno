// Utilizado para processamento assincrono
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        settimeout(() => {
            resolve(frase)
        }, segundos * 1000);
    });
}

falarDepoisDe(3, 'Que Legal!');
    .then(frase => frase.concat('?!?!'))
    .then(outraFrase => console.log(outraFrase))
    //tratamento de erros com catch
    .catch(e => console.log(e))