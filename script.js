function contar(){
    var start = document.getElementById('start')
    var finish = document.getElementById('finish')
    var pass = document.getElementById('pass')
    var res = document.getElementById('res')
    if (start.value.length == 0 || finish.value.length == 0 || pass.value.length == 0){
        res.innerHTML = `Preencha todos os campos \u{1F44D}`
    } else {
        res.innerHTML = 'Contando: </br> '
        var s = Number(start.value)
        var f = Number(finish.value)
        var p = Number(pass.value)
        if (s < f){
            for(var c = s; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for (var c = s; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}