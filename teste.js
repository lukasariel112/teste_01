function aplicardesconto(valor, desconto)
{
    return valor - desconto
}
function validarnumero(valor)
{
    return isNaN(valor)
}
console.log ('APP funcionando')
console.log ('aplicardesconto()')

module.exports ={aplicardesconto}
module.exports ={validarnumero}
