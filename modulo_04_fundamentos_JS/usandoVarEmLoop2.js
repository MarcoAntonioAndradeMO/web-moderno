const funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]();
funcs[8]();

// A variável não tem escopo de função, portanto imprime para todos o valor de "10"